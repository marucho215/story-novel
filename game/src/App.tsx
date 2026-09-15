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
import { loadGame, saveGame } from "./engine/saveLoad";
import { ChoiceList } from "./ui/components/ChoiceList";
import { DialogueBox } from "./ui/components/DialogueBox";
import { RelationshipDebugPanel } from "./ui/components/RelationshipDebugPanel";
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
  const isStoryEnd = isLastLine && isLastSceneOfChapter && !nextChapter;
  const canAdvance =
    !isLastLine || (isLastSceneOfChapter ? !!nextChapter : !!nextSceneId);

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
    setSave(createNewGame());
    setLineIndex(0);
  }

  return (
    <div className="game-screen">
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

          {isStoryEnd && <p className="chapter-end">— 옮겨 적은 이야기는 여기까지입니다 —</p>}
        </div>
      </main>

      <details className="debug-panel">
        <summary>디버그</summary>
        <div className="debug-panel__body">
          <RelationshipDebugPanel relationships={save.story.relationships} />
          <ol>
            {save.story.history.map((record, index) => (
              <li key={index}>
                {record.chapterId} / {record.sceneId} / {record.choiceId}
              </li>
            ))}
          </ol>
        </div>
      </details>
    </div>
  );
}
