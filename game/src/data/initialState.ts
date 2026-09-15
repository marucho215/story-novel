// 새 게임을 시작할 때의 storyState. 모든 관계는 0/0/0에서 출발한다 —
// 인물 사이의 과거사(§4.5 등)는 "수치"가 아니라 대본 속 대사와 사실(facts)로 표현하고,
// 그 대사가 진행되면서 선택을 통해 수치가 쌓이게 한다.

import { CHARACTER_IDS } from "./characters";
import type { Relationships, StoryState } from "../types/story";

function createEmptyRelationships(): Relationships {
  const relationships: Relationships = {};
  for (const from of CHARACTER_IDS) {
    relationships[from] = {};
    for (const to of CHARACTER_IDS) {
      if (from === to) continue;
      relationships[from][to] = { trust: 0, guard: 0, debt: 0 };
    }
  }
  return relationships;
}

export function createInitialStoryState(): StoryState {
  return {
    facts: {},
    // MASTER_DESIGN.md §10.2의 예시와 같은 모양이다. 2장에서 운심이 사고 방송 원본을
    // 어떻게 할지 선택하는 순간부터 이 증거 객체를 실제로 건드리기 시작한다.
    evidence: {
      original_accident_stream: {
        id: "original_accident_stream",
        holders: ["kang_unsim", "kim_uju"],
        knownBy: ["kang_unsim", "kim_uju"],
        submittedToInquiry: false,
        publicStatus: "private",
        destroyedCopies: [],
        disclosureLog: [],
      },
    },
    relationships: createEmptyRelationships(),
    history: [],
  };
}
