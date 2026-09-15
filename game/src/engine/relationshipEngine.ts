// 관계 수치를 "어떻게 바꾸는가"만 담당한다. 무엇을 바꿀지는 대본(script) 쪽에서 정한다.

import type { RelationshipEdge, Relationships } from "../types/story";
import type { RelationshipEffect } from "../types/script";

const EMPTY_EDGE: RelationshipEdge = { trust: 0, guard: 0, debt: 0 };

/** relationships[from][to]가 아직 없으면 0/0/0으로 취급한다. */
export function getEdge(relationships: Relationships, from: string, to: string): RelationshipEdge {
  return relationships[from]?.[to] ?? EMPTY_EDGE;
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, value));
}

/**
 * 효과 목록을 순서대로 적용한 "새" relationships를 돌려준다.
 * 기존 객체는 건드리지 않는다 (React 상태 갱신과 세이브/로드에서 다루기 쉽게 하기 위해서다).
 */
export function applyEffects(
  relationships: Relationships,
  effects: RelationshipEffect[],
): Relationships {
  let next = relationships;

  for (const effect of effects) {
    const currentFrom = next[effect.from] ?? {};
    const currentEdge = currentFrom[effect.to] ?? EMPTY_EDGE;

    next = {
      ...next,
      [effect.from]: {
        ...currentFrom,
        [effect.to]: {
          ...currentEdge,
          [effect.stat]: clamp(currentEdge[effect.stat] + effect.amount),
        },
      },
    };
  }

  return next;
}
