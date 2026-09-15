// 대본(chapters/*.md)을 엔진이 읽을 수 있는 형태로 옮길 때 쓰는 타입들.
// "이야기 내용"과 "이야기를 진행시키는 규칙(engine/)"을 분리하기 위한 경계선이다.

import type { CharacterId, RelationshipStat, StoryState } from "./story";

/** 대사 한 줄. speaker가 없으면 지문(내레이션)이다. */
export interface Line {
  speaker?: CharacterId;
  text: string;
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
   */
  next?: string;
}

export interface ChapterScript {
  id: string;
  title: string;
  /** 이 장의 시점 인물 */
  pointOfView: CharacterId;
  firstSceneId: string;
  scenes: Record<string, Scene>;
}
