import { useEffect, useState } from "react";
import { chapter01 } from "./data/chapters/chapter01";
import { chapter02 } from "./data/chapters/chapter02";
import { chapter03 } from "./data/chapters/chapter03";
import { chapter04 } from "./data/chapters/chapter04";
import { chapter05 } from "./data/chapters/chapter05";
import { chapter06 } from "./data/chapters/chapter06";
import { chapter07 } from "./data/chapters/chapter07";
import { createInitialStoryState } from "./data/initialState";
import { applyChoice, getNextSceneId, getScene, getVisibleChoices, getVisibleLines } from "./engine/chapterEngine";
import { clearSave, loadGame, saveGame } from "./engine/saveLoad";
import { ChoiceList } from "./ui/components/ChoiceList";
import { DialogueBox } from "./ui/components/DialogueBox";
import type { GameSave } from "./types/story";
import type { ChapterScript, Choice } from "./types/script";

// 장이 늘어날 때마다 이 표에 추가하기만 하면 된다. 첫 장은 chapter01.firstSceneId.
const ALL_CHAPTERS = [chapter01, chapter02, chapter03, chapter04, chapter05, chapter06, chapter07];
const CHAPTERS: Record<string, ChapterScript> = Object.fromEntries(
  ALL_CHAPTERS.map((chapter) => [chapter.id, chapter]),
);

function createNewGame(): GameSave {
  return {
    story: createInitialStoryState(),
    progress: { chapterId: chapter01.id, sceneId: chapter01.firstSceneId },
  };
}

/**
 * loadGame()은 저장 데이터의 "모양"만 확인한다. 그 모양이 맞아도 chapterId나
 * sceneId가 지금 데이터에는 없는 씬을 가리킬 수 있다 (예: 옛날 세이브인데
 * 그 사이 씬 id가 바뀐 경우). 그런 세이브는 여기서 걸러 새 게임으로 되돌린다.
 */
function resolveSave(save: GameSave | null): GameSave {
  if (!save) return createNewGame();
  const chapter = CHAPTERS[save.progress.chapterId];
  if (!chapter || !chapter.scenes[save.progress.sceneId]) return createNewGame();
  return save;
}

export default function App() {
  const [save, setSave] = useState<GameSave>(() => resolveSave(loadGame()));
  // 지금 씬에서 몇 번째 줄까지 왔는지는 "화면 연출" 상태라 세이브 데이터에는 넣지 않는다.
  // 다시 불러왔을 때 씬 맨 처음부터 다시 보여줘도 서사 진행에는 문제가 없기 때문이다.
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    saveGame(save);
  }, [save]);

  const chapter = CHAPTERS[save.progress.chapterId];
  const scene = getScene(chapter, save.progress.sceneId);
  const visibleChoices = getVisibleChoices(scene, save.story);
  const visibleLines = getVisibleLines(scene, save.story);

  const nextSceneId = getNextSceneId(scene, save.story);
  const isLastSceneOfChapter = !nextSceneId && visibleChoices.length === 0;
  const nextChapter = chapter.nextChapterId ? CHAPTERS[chapter.nextChapterId] : undefined;

  const isLastLine = lineIndex >= visibleLines.length - 1;
  const currentLine = visibleLines[lineIndex];
  const showChoices = isLastLine && visibleChoices.length > 0;
  const canAdvance =
    !isLastLine || (isLastSceneOfChapter ? !!nextChapter : !!nextSceneId);

  // 상징색은 "장의 시점 인물"이 아니라 "지금 말하고 있는 캐릭터"를 따라간다.
  // 그래야 한 장 안에서 화자가 바뀔 때마다(예: 6장의 화영↔마근아) 색도 같이 바뀐다.
  // 지문(내레이션)처럼 화자가 없는 줄에서는 그 장의 시점 인물 색으로 되돌아간다.
  const accentSpeaker = currentLine?.speaker ?? chapter.pointOfView;
  const accentClass =
    accentSpeaker && accentSpeaker !== "ensemble" ? ` accent-${accentSpeaker.replace(/_/g, "-")}` : "";

  function goToScene(chapterId: string, sceneId: string) {
    setSave((current) => ({ ...current, progress: { chapterId, sceneId } }));
    setLineIndex(0);
  }

  function handleChoose(choice: Choice) {
    const { state, nextSceneId } = applyChoice(save.story, chapter.id, scene.id, choice);
    setSave({ story: state, progress: { chapterId: chapter.id, sceneId: nextSceneId } });
    setLineIndex(0);
  }

  function handleAdvance() {
    if (!isLastLine) {
      setLineIndex(lineIndex + 1);
      return;
    }
    if (nextSceneId) {
      goToScene(chapter.id, nextSceneId);
    } else if (nextChapter) {
      goToScene(nextChapter.id, nextChapter.firstSceneId);
    }
  }

  function handleRestart() {
    if (!window.confirm("지금까지의 진행을 모두 지우고 처음부터 시작할까요?")) return;
    clearSave();
    setSave(createNewGame());
    setLineIndex(0);
  }

  // 엔터/스페이스로도 대사를 넘길 수 있게 한다. 대화 상자에 포커스가 있을 때만
  // 반응하면 클릭 없이는 쓸모가 없으니, 페이지 전체에서 듣는다. 다만 버튼이나
  // <summary> 등 자체적으로 엔터/스페이스에 반응하는 요소 위에서는 끼어들지
  // 않는다 — 안 그러면 선택지를 고르면서 동시에 대사도 넘어가 버린다.
  //
  // 선택지가 여러 개 떠 있을 때는 이 리스너를 아예 꺼둔다. 골라야 할 선택지가
  // 있는 순간에는 반드시 마우스로 직접 클릭하게 하려는 것이라, canAdvance가
  // 우연히 true가 되는 경우에도 여기서 막아야 한다. 버튼 자체의 엔터/스페이스
  // 활성화는 ChoiceList에서 따로 막는다.
  useEffect(() => {
    if (showChoices) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (!canAdvance) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("button, a, summary, input, textarea, select")) return;

      event.preventDefault();
      handleAdvance();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className={`game-screen${accentClass}`}>
      <header className="game-header">
        <div className="chapter-title">
          <span className="chapter-title__eyebrow">성아여고</span>
          <h1>{chapter.title}</h1>
        </div>

        <button className="restart-button" onClick={handleRestart}>
          처음부터
        </button>
      </header>

      <main className="scene-stage">
        <div className="novel-ui">
          {showChoices && <ChoiceList choices={visibleChoices} onChoose={handleChoose} />}

          <DialogueBox line={currentLine} onAdvance={canAdvance ? handleAdvance : undefined} />
        </div>
      </main>
    </div>
  );
}
