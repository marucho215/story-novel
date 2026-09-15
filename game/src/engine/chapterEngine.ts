// 한 장(챕터) 안에서 씬을 넘기고 선택지를 처리하는 규칙.
// "장이 끝나면 그 장의 선택은 확정되어 되돌릴 수 없다" (MASTER_DESIGN §3)를
// 지키기 위해, 선택은 즉시 history에 fold(반영)되고 이전 상태로 되돌아가는 길을 만들지 않는다.

import type { ChapterScript, Choice, Scene } from "../types/script";
import type { StoryState } from "../types/story";
import { applyEffects } from "./relationshipEngine";

export function getScene(chapter: ChapterScript, sceneId: string): Scene {
  const scene = chapter.scenes[sceneId];
  if (!scene) {
    throw new Error(`씬을 찾을 수 없음: ${chapter.id}/${sceneId}`);
  }
  return scene;
}

/** 조건이 없는 선택지는 항상 보이고, 조건이 있으면 현재 storyState로 판정한다. */
export function getVisibleChoices(scene: Scene, state: StoryState): Choice[] {
  if (!scene.choices) return [];
  return scene.choices.filter((choice) => !choice.condition || choice.condition(state));
}

/**
 * 플레이어가 선택지를 골랐을 때 storyState를 갱신하고, 다음에 보여줄 씬 id를 돌려준다.
 * 이 함수는 "이 장이 끝났는지"는 모른다 — 그건 다음 씬에 choices도 next도 없을 때
 * 화면(UI) 쪽에서 판단한다.
 */
export function applyChoice(
  state: StoryState,
  chapterId: string,
  sceneId: string,
  choice: Choice,
): { state: StoryState; nextSceneId: string } {
  const relationships = choice.effects
    ? applyEffects(state.relationships, choice.effects)
    : state.relationships;

  const nextState: StoryState = {
    ...state,
    relationships,
    history: [...state.history, { chapterId, sceneId, choiceId: choice.id }],
  };

  return { state: nextState, nextSceneId: choice.next };
}
