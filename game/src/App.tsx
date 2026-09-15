import { useEffect, useState } from "react";
import { chapter01 } from "./data/chapters/chapter01";
import { createInitialStoryState } from "./data/initialState";
import { applyChoice, getScene, getVisibleChoices } from "./engine/chapterEngine";
import { loadGame, saveGame } from "./engine/saveLoad";
import { ChoiceList } from "./ui/components/ChoiceList";
import { DialogueBox } from "./ui/components/DialogueBox";
import { RelationshipDebugPanel } from "./ui/components/RelationshipDebugPanel";
import type { GameSave } from "./types/story";
import type { Choice } from "./types/script";

// 지금은 1장 하나만 있으니 챕터를 id로 찾아오는 아주 단순한 표.
// 장이 늘어나면 이 표에 추가하기만 하면 된다.
const CHAPTERS = { [chapter01.id]: chapter01 };

function createNewGame(): GameSave {
  return {
    story: createInitialStoryState(),
    progress: { chapterId: chapter01.id, sceneId: chapter01.firstSceneId },
  };
}

export default function App() {
  const [save, setSave] = useState<GameSave>(() => loadGame() ?? createNewGame());

  useEffect(() => {
    saveGame(save);
  }, [save]);

  const chapter = CHAPTERS[save.progress.chapterId];
  const scene = getScene(chapter, save.progress.sceneId);
  const visibleChoices = getVisibleChoices(scene, save.story);

  function handleChoose(choice: Choice) {
    const { state, nextSceneId } = applyChoice(
      save.story,
      chapter.id,
      scene.id,
      choice,
    );
    setSave({ story: state, progress: { chapterId: chapter.id, sceneId: nextSceneId } });
  }

  function handleContinue() {
    if (!scene.next) return;
    setSave({ ...save, progress: { chapterId: chapter.id, sceneId: scene.next } });
  }

  function handleRestart() {
    setSave(createNewGame());
  }

  const isChapterEnd = !scene.next && visibleChoices.length === 0;

  return (
    <div className="game-screen">
      <header className="game-header">
        <h1>{chapter.title}</h1>
        <button className="restart-button" onClick={handleRestart}>
          처음부터
        </button>
      </header>

      <DialogueBox lines={scene.lines} />

      {visibleChoices.length > 0 && <ChoiceList choices={visibleChoices} onChoose={handleChoose} />}

      {!isChapterEnd && visibleChoices.length === 0 && (
        <button className="continue-button" onClick={handleContinue}>
          다음
        </button>
      )}

      {isChapterEnd && <p className="chapter-end">— 옮겨 적은 장면은 여기까지입니다 —</p>}

      <details className="debug-panel">
        <summary>디버그: 관계 수치 / 선택 기록</summary>
        <RelationshipDebugPanel relationships={save.story.relationships} />
        <ol>
          {save.story.history.map((record, index) => (
            <li key={index}>
              {record.chapterId} / {record.sceneId} / {record.choiceId}
            </li>
          ))}
        </ol>
      </details>
    </div>
  );
}
