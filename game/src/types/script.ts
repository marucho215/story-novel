// 대본(chapters/*.md)을 엔진이 읽을 수 있는 형태로 옮길 때 쓰는 타입들.
// "이야기 내용"과 "이야기를 진행시키는 규칙(engine/)"을 분리하기 위한 경계선이다.

import type { CharacterId, EvidenceItem, Facts, RelationshipStat, StoryState } from "./story";

/** 대사 한 줄. speaker가 없으면 지문(내레이션)이다. */
export interface Line {
  speaker?: CharacterId;
  text: string;
  /**
   * 이전 선택으로 남은 사실(facts)에 따라 이 줄만 다르게 나가야 할 때 쓴다
   * (예: 1장 결말의 "조건부 마무리 문장"). 없으면 항상 보인다.
   */
  condition?: (state: StoryState) => boolean;
}

/** 선택지 하나가 관계에 주는 영향. MASTER_DESIGN §9의 예시 JSON과 같은 모양이다. */
export interface RelationshipEffect {
  from: CharacterId;
  to: CharacterId;
  stat: RelationshipStat;
  amount: number;
}

export interface Choice {
  id: string;
  label: string;
  /** 다음에 재생할 씬의 id */
  next: string;
  /** 이 선택이 관계에 주는 효과 (없을 수도 있다) */
  effects?: RelationshipEffect[];
  /**
   * ALL_CHAPTERS_SCENES_AND_CHOICES.md에서 "flags"라고 부르는 것.
   * 관계 수치가 아니라 사실/플래그(facts)에 기록해두고, 나중 장의 조건부 대사나
   * 선택지 condition에서 읽는다. 같은 키를 다시 쓰면 덮어쓴다.
   */
  setFacts?: Facts;
  /**
   * 증거 객체 하나를 갱신한다 (예: 2장에서 방송 원본 사본을 "삭제"하는 선택).
   * 대상 증거가 아직 없으면 이 patch만으로 새로 만든다.
   */
  updateEvidence?: { id: string; patch: Partial<EvidenceItem> };
  /**
   * 이전 장의 확정된 선택이나 현재까지의 사실에 따라 이 선택지 자체가
   * 아예 안 보일 수도 있다 (예: 특정 증거를 이미 봤어야 고를 수 있는 선택지).
   * 없으면 항상 보인다.
   */
  condition?: (state: StoryState) => boolean;
}

export interface Scene {
  id: string;
  lines: Line[];
  /** 선택지가 있으면 플레이어의 선택을 기다린다. */
  choices?: Choice[];
  /**
   * 선택지가 없는 씬은 "계속하기" 버튼 한 번으로 다음 씬으로 넘어간다.
   * next가 없으면 이 씬이 장의 마지막 씬이라는 뜻이다.
   *
   * 문자열 대신 함수를 쓸 수도 있다 — 씬 내용은 선택지에 따라 갈리지 않지만
   * "다음에 어디로 갈지"만 이전 선택(facts)에 따라 달라질 때 쓴다
   * (7장의 증거 제출/공개 방식 게이트처럼). 씬 내용을 통째로 복제하지 않아도 된다.
   */
  next?: string | ((state: StoryState) => string | undefined);
}

export interface ChapterScript {
  id: string;
  title: string;
  /** 이 장의 시점 인물 */
  pointOfView: CharacterId;
  firstSceneId: string;
  scenes: Record<string, Scene>;
  /**
   * 이 장의 마지막 씬(선택지도 next도 없는 씬)까지 다 보면 자동으로 넘어갈 다음 장.
   * 없으면 이 장이 지금까지 옮겨 적은 이야기의 끝이라는 뜻이다.
   */
  nextChapterId?: string;
}
