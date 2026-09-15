// 한 장(챕터) 안에서 씬을 넘기고 선택지를 처리하는 규칙.
// "장이 끝나면 그 장의 선택은 확정되어 되돌릴 수 없다" (MASTER_DESIGN §3)를
// 지키기 위해, 선택은 즉시 history에 fold(반영)되고 이전 상태로 되돌아가는 길을 만들지 않는다.

import type { ChapterScript, Choice, Line, Scene } from "../types/script";
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

/** 대사 줄도 선택지와 같은 방식으로 조건에 안 맞으면 걸러낸다 (예: 이전 선택에 따라 갈리는 마무리 대사). */
export function getVisibleLines(scene: Scene, state: StoryState): Line[] {
  return scene.lines.filter((line) => !line.condition || line.condition(state));
}

/** scene.next가 함수면 지금 storyState로 평가해서 실제 다음 씬 id를 구한다. */
export function getNextSceneId(scene: Scene, state: StoryState): string | undefined {
  return typeof scene.next === "function" ? scene.next(state) : scene.next;
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

  const facts = choice.setFacts ? { ...state.facts, ...choice.setFacts } : state.facts;

  let evidence = state.evidence;
  if (choice.updateEvidence) {
    const { id, patch } = choice.updateEvidence;
    evidence = { ...evidence, [id]: { ...evidence[id], ...patch } as StoryState["evidence"][string] };
  }

  const nextState: StoryState = {
    ...state,
    relationships,
    facts,
    evidence,
    history: [...state.history, { chapterId, sceneId, choiceId: choice.id }],
  };

  return { state: nextState, nextSceneId: choice.next };
}
