// 한 장(챕터) 안에서 씬을 넘기고 선택지를 처리하는 규칙.
// "장이 끝나면 그 장의 선택은 확정되어 되돌릴 수 없다" (MASTER_DESIGN §3)를
// 지키기 위해, 선택은 즉시 history에 fold(반영)되고 이전 상태로 되돌아가는 길을 만들지 않는다.

import type { ChapterScript, Choice, Line, Scene } from "../types/script";
import type { EvidenceItem, StoryState } from "../types/story";
import { applyEffects } from "./relationshipEngine";

const REQUIRED_EVIDENCE_FIELDS: (keyof EvidenceItem)[] = [
  "holders",
  "knownBy",
  "submittedToInquiry",
  "publicStatus",
  "destroyedCopies",
  "disclosureLog",
];

/**
 * script.ts의 updateEvidence 주석대로 "증거가 없으면 patch만으로 새로 만든다"를 지키려면
 * 그 patch가 EvidenceItem의 필수 필드를 전부 갖고 있어야 한다. 지금까지는 이미 있는 증거를
 * patch하는 용도로만 쓰여서 문제가 없었지만, 나중에 새 증거를 이 방식으로 만들다가 필드를
 * 빠뜨리면 `as` 단언이 그걸 조용히 통과시켜버린다. 그래서 "새로 만드는" 순간에는 여기서
 * 미리 막는다.
 */
function assertCompleteEvidenceItem(id: string, candidate: Partial<EvidenceItem>): asserts candidate is EvidenceItem {
  const missing = REQUIRED_EVIDENCE_FIELDS.filter((field) => !(field in candidate));
  if (missing.length > 0) {
    throw new Error(
      `증거 "${id}"가 아직 없는데 patch에 없는 필드가 있어 새로 만들 수 없음: ${missing.join(", ")}`,
    );
  }
}

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
    const existing = evidence[id];
    const merged = { ...existing, ...patch };
    if (!existing) {
      assertCompleteEvidenceItem(id, merged);
    }
    evidence = { ...evidence, [id]: merged as EvidenceItem };
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
