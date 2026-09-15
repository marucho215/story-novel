// storyState.ts가 아니라 "타입만" 모아둔 파일이다.
// MASTER_DESIGN.md §9~10에서 정의한 네 가지 데이터(사실/증거/관계/선택 기록)를
// 코드로 옮긴 것뿐이라, 이 파일을 읽을 때는 항상 MASTER_DESIGN.md를 같이 보면 된다.

/** 인물 하나를 가리키는 문자열 id. 예: "hwayoung", "kang_unsim" */
export type CharacterId = string;

/** 관계는 3개 축을 갖는다 (§9). 값의 범위는 0~100. */
export type RelationshipStat = "trust" | "guard" | "debt";

export interface RelationshipEdge {
  trust: number;
  guard: number;
  debt: number;
}

/**
 * A → B와 B → A는 서로 다른 값이라서, "누가 누구를 향해 느끼는가"를
 * 이중 Record로 표현한다. relationships["a"]["b"] = a가 b에게 느끼는 감정.
 */
export type Relationships = Record<CharacterId, Record<CharacterId, RelationshipEdge>>;

export type PublicStatus = "private" | "restricted" | "public";

/** §10.2 증거 객체. weight는 아직 쓰지 않는다고 기획서에 적혀 있어 넣지 않았다. */
export interface EvidenceItem {
  id: string;
  holders: CharacterId[];
  knownBy: CharacterId[];
  submittedToInquiry: boolean;
  publicStatus: PublicStatus;
  destroyedCopies: string[];
  disclosureLog: string[];
}

/** §10.3 선택 기록. 한 번 history에 들어가면 이후 장에서는 읽기만 한다. */
export interface ChoiceRecord {
  chapterId: string;
  sceneId: string;
  choiceId: string;
}

/**
 * 사실(facts)은 장면마다 필요한 항목이 달라서 딱 정해진 모양이 없다.
 * 프로토타입 단계에서는 "키 하나 = 사실 하나"인 느슨한 사전으로 둔다.
 * 예: facts["magun_a_report_submitted_at_d21"] = true
 */
export type Facts = Record<string, boolean | number | string>;

/** 게임이 기억해야 하는 서사 데이터 전체. MASTER_DESIGN §10의 storyState와 1:1 대응. */
export interface StoryState {
  facts: Facts;
  evidence: Record<string, EvidenceItem>;
  relationships: Relationships;
  history: ChoiceRecord[];
}

/** 지금 플레이어가 어느 장, 어느 씬에 있는지는 "서사 사실"이 아니라 "진행 위치"라 분리했다. */
export interface Progress {
  chapterId: string;
  sceneId: string;
}

/** 저장 파일에 실제로 들어가는 전부. */
export interface GameSave {
  story: StoryState;
  progress: Progress;
}
