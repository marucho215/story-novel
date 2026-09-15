// chapters/CHAPTER_07_ENSEMBLE.md 를 엔진이 읽을 수 있는 구조로 옮긴 것.
//
// 7장은 두 단계 게이트를 갖는다: 증거를 전부 제출하는지(CH7-D)에 따라
// 공개 방식 선택(CH7-E)이 열리거나 곧장 "책임 전가" 결말로 고정되고,
// CH7-E에서 고른 값이 최종 엔딩 하나를 정한다. 씬 내용은 같은데 다음에
// "어디로 가는지"만 이전 선택에 따라 달라지는 지점(ch7_s05, ch7_s06)은
// scene.next에 함수를 써서, 내용을 복제하지 않고 상태만 보고 분기했다.

import type { ChapterScript } from "../../types/script";
import type { StoryState } from "../../types/story";

/** ch7_s06 운심-마근아 후일담 분기: 6장에서 마근아가 운심에게 마음을 열었고, 그 신뢰가 임계값 이상 쌓였는가. */
function unsimTrustedMagunAAfterBreakthrough(state: StoryState): boolean {
  return (
    state.facts.ch6_breakthrough === "unsim" &&
    (state.relationships.magun_a?.kang_unsim?.trust ?? 0) >= 60
  );
}

export const chapter07: ChapterScript = {
  id: "chapter07_ensemble",
  title: "7장 전원 교차 남겨진 기록",
  pointOfView: "ensemble",
  firstSceneId: "ch7_s01",
  scenes: {
    ch7_s01: {
      id: "ch7_s01",
      lines: [
        { text: "사고 사흘 뒤 오전 9시." },
        { text: "에피는 교장실 회의 탁자에 놓인 의자를 세었다." },
        { text: "이난 앞에는 공동 진술서 양식이 놓였다." },
        { text: "우주는 백팩을 품에 안고 가장 구석진 자리에 앉았다." },
        { text: "화영의 왼쪽 어깨에는 보호대가 남아 있었다." },
        { text: "운심은 붕대 감은 손을 탁자 아래로 내렸고, 마근아는 몸에 찬 시계의 알림을 전부 껐다." },
        { text: "에피가 마지막 의자에 앉자 여섯 자리가 찼다." },
        { text: "토스케의 오른쪽 단안경에 초록색 글자가 흘렀다." },
        { text: "탁자 위로 봉인된 기록 여덟 건의 제목이 펼쳐졌다." },
        { speaker: "toske", text: "우주가 대조한 자료는 내가 봉인한 원본과 일치한다." },
        { speaker: "toske", text: "마근아의 보고서 세 건은 사고 전에 등록됐고, 셋 모두 담당 계통에서 멈췄다." },
        { text: "토스케가 손가락으로 화면 하나를 내렸다." },
        { text: "보고서 아래에 순찰 로그와 의료 연락 기록이 붙었다." },
        { speaker: "toske", text: "기록은 누가 언제 움직였는지 증명한다." },
        { speaker: "toske", text: "왜 같은 경고가 누구에게는 단속으로 들렸는지까지 답해주지는 못한단다." },
        { text: "마근아가 조사 진술서를 탁자 가운데로 보냈다." },
        { text: "`본인은 경고가 이해되었는지, 보고가 처리되었는지 확인하지 않았습니다.`" },
        { text: "운심은 문장을 끝까지 읽고 휴대폰을 꺼냈다." },
        { text: "사고 방송 파일은 교장실 조사망에 연결되지 않은 상태였다." },
        { speaker: "inan", text: "남은 건 두 개야." },
        { speaker: "inan", text: "조사에 뭘 낼지." },
        { speaker: "inan", text: "학생들에게 뭘 말할지." },
        { speaker: "toske", text: "순서를 바꾸지는 말자꾸나." },
        { speaker: "toske", text: "먼저 조사 기록부터 완성하자." },
      ],
      next: "ch7_s02",
    },

    ch7_s02: {
      id: "ch7_s02",
      lines: [
        { text: "우주는 백팩 안쪽의 지퍼를 열었다." },
        { text: "단탈리온이 달라붙은 저장장치가 손바닥 위로 나왔다." },
        { text: "화면에는 사고 방송 원본과 같은 길이, 같은 생성 시각을 가진 사본이 표시됐다." },
        // 2장 원본 선택 반영 — 셋 중 실제 경로 하나만 보인다.
        {
          text: "운심의 휴대폰에서는 찾을 수 없는 파일이었다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kang_unsim",
          text: "그거…… 남아 있었어?",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "자동 백업.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "네 폰에서 지워진 건 네 사본 하나.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          text: "우주는 저장장치의 생성 시각과 해시값을 띄웠다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "삭제 기록도 같이 낼 수 있어.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          text: "운심이 자기 손가락의 반창고 끝을 눌렀다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          text: "휴대폰 화면에는 그날 밤의 삭제 시각이 떠 있었다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kang_unsim",
          text: "그것도 내 기록이네.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },

        {
          text: "운심이 휴대폰에서 사고 방송 파일을 열었다.",
          condition: (state) => state.facts.ch2_stream_action === "undecided",
        },
        {
          text: "우주가 저장장치의 사본을 옆에 띄우자 두 파일의 해시값이 일치했다.",
          condition: (state) => state.facts.ch2_stream_action === "undecided",
        },
        {
          speaker: "kang_unsim",
          text: "사본까지 있었냐.",
          condition: (state) => state.facts.ch2_stream_action === "undecided",
        },
        {
          speaker: "kim_uju",
          text: "원본 하나만 있는 상태가 더 무서워.",
          condition: (state) => state.facts.ch2_stream_action === "undecided",
        },
        {
          text: "운심은 파일 옆의 `미결정` 표시를 지웠다.",
          condition: (state) => state.facts.ch2_stream_action === "undecided",
        },

        {
          text: "운심과 우주가 각자 가진 파일을 동시에 조사망에 올렸다.",
          condition: (state) => state.facts.ch2_stream_action === "confided_uju",
        },
        {
          text: "해시값 두 줄이 같은 숫자로 끝났다.",
          condition: (state) => state.facts.ch2_stream_action === "confided_uju",
        },
        {
          speaker: "kim_uju",
          text: "그 날에 같이 본 파일.",
          condition: (state) => state.facts.ch2_stream_action === "confided_uju",
        },
        {
          speaker: "kim_uju",
          text: "변경 없음.",
          condition: (state) => state.facts.ch2_stream_action === "confided_uju",
        },
        {
          speaker: "kang_unsim",
          text: "이번에도 네가 먼저 말해.",
          condition: (state) => state.facts.ch2_stream_action === "confided_uju",
        },
        { speaker: "kim_uju", text: "왜.", condition: (state) => state.facts.ch2_stream_action === "confided_uju" },
        {
          speaker: "kang_unsim",
          text: "내가 말하면 또 방송 같아질 것 같아서.",
          condition: (state) => state.facts.ch2_stream_action === "confided_uju",
        },

        // 공통 본문
        { text: "사고 방송에는 운심이 마근아의 중단 요구를 비웃은 말, 계속 올라간 반응 수, 능력 출력 경보가 함께 남아 있었다." },
        { text: "공개된 짧은 편집본에는 들어 있지 않은 구간이었다." },
        { text: "이난이 증거 제출 목록의 마지막 칸을 열었다." },
        { text: "`사고 방송 원본 및 보존 사본.`" },
      ],
      choices: [
        {
          id: "ch7_d1_submit_all",
          label: "사고 방송 원본을 포함한 모든 자료를 공식 조사에 제출한다",
          next: "ch7_s02_submit",
          setFacts: { ch7_evidence_submission: "full" },
          updateEvidence: { id: "original_accident_stream", patch: { submittedToInquiry: true } },
        },
        {
          id: "ch7_d2_withhold_some",
          label: "사고 방송 원본을 빼고 제출한다",
          next: "ch7_s02_withhold",
          setFacts: { ch7_evidence_submission: "withheld", ch7_ending_skeleton: "blame_shift" },
        },
      ],
    },

    ch7_s02_submit: {
      id: "ch7_s02_submit",
      lines: [
        { text: "운심이 자기 휴대폰을 이난 쪽으로 밀었다." },
        { speaker: "kang_unsim", text: "내가 올릴게." },
        {
          text: "운심의 화면에는 올릴 파일이 없었다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          text: "우주가 저장장치를 내밀자 운심은 자료 제공 동의란에 자기 이름을 입력했다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kang_unsim",
          text: "복구한 척 쓰지 마.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kang_unsim",
          text: "우주가 갖고 있던 사본이라고 써.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "이미 그렇게 적었어.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          text: "운심은 파일 선택 창에서 자기 원본을 지정했다.",
          condition: (state) => state.facts.ch2_stream_action !== "self_delete",
        },
        {
          text: "우주의 사본은 무결성 대조 자료로 연결됐다.",
          condition: (state) => state.facts.ch2_stream_action !== "self_delete",
        },
        { text: "전송 막대가 끝까지 찼다." },
        { text: "토스케의 단안경에 흰 커서가 나타나 파일의 인증값을 읽었다." },
        { speaker: "toske", text: "수신했다." },
        { speaker: "toske", text: "개인 자료를 내놓는 일이 책임의 전부는 아니다." },
        { speaker: "toske", text: "그래도 이제 조사 기록에서 빠진 시간은 없구나." },
        { text: "운심은 전송 완료 화면을 닫고 휴대폰을 탁자 위에 두었다." },
      ],
      next: "ch7_s03",
    },

    ch7_s02_withhold: {
      id: "ch7_s02_withhold",
      lines: [
        { text: "이난은 `사고 방송 원본 및 보존 사본`의 체크를 해제했다." },
        { text: "제출 건수가 여덟 건에서 일곱 건으로 줄었다." },
        { speaker: "effie_minos", text: "이거 없이도 사고 원인은 나오잖아요." },
        { speaker: "effie_minos", text: "출력 기록도 있고…… 지도부까지 없앨 필요는 없잖아." },
        { text: "화영은 제출 목록을 읽었다." },
        { text: "마근아의 시계 하나가 9시 20분을 알렸다." },
        { speaker: "kang_unsim", text: "그냥 보내." },
        { speaker: "kang_unsim", text: "있는 것만." },
        { text: "이난이 제출 버튼을 눌렀다." },
        { text: "우주의 저장장치는 조사망 밖에 남았다." },
        { text: "마근아가 화면에서 눈을 떼지 않은 채 말했다." },
        { speaker: "magun_a", text: "이것도 같은 방식입니다." },
        { speaker: "effie_minos", text: "뭐가요." },
        { speaker: "magun_a", text: "필요한 걸 뺐는데 서류는 정상적으로 접수됩니다." },
        { speaker: "magun_a", text: "처리 상태만 보면 아무 문제도 없어 보입니다." },
        { text: "에피가 접었던 팔짱을 풀었다." },
        { speaker: "effie_minos", text: "그럼 다 잃자는 거예요?" },
        { speaker: "effie_minos", text: "저 하나 때문에 다섯 명 다요?" },
        { speaker: "magun_a", text: "그렇게 말한 적 없습니다." },
        { speaker: "effie_minos", text: "말 안 해도 그렇게 들려요." },
        { text: "이난은 제출 확인 화면을 닫지 않은 채 두 사람을 번갈아 보았다." },
        { text: "토스케의 단안경에 접수 완료 표시가 떴다." },
        { text: "개인 소유 기록의 존재를 알리는 항목은 비어 있었다." },
        { speaker: "toske", text: "제출된 자료는 이대로 봉인하마." },
        { text: "우주는 저장장치를 백팩 안쪽에 넣고 지퍼 손잡이를 두 번 맞물렸다." },
      ],
      next: "ch7_s04_withheld",
    },

    ch7_s03: {
      id: "ch7_s03",
      lines: [
        { text: "토스케가 공식 조사 접수창을 닫았다." },
        { text: "탁자 위에는 학생 공지 초안이 새로 열렸다." },
        { speaker: "toske", text: "교장실에 낸 자료와 학생들에게 공개할 자료는 목적이 다르다." },
        { speaker: "toske", text: "감추지 않되, 피해 학생의 정보가 다시 구경거리가 되게 해서도 안 된다." },
        { text: "우주가 공지 초안을 세 탭으로 나눴다." },
        { text: "첫 번째에는 사고 시각표와 보고서 원문, 행정 처리 경로, 방송 중 발언의 전사본이 들어갔다." },
        { text: "피해 학생의 이름과 의료 기록은 가림 처리됐다." },
        { text: "두 번째에는 교장실이 인증한 사실 요약과 책임 판정만 남았다." },
        { text: "피해 학생의 이동 경로와 구조 과정은 공개 목록에서 빠졌다." },
        { text: "세 번째에는 특별 생활 지도부 다섯 명이 각자 책임을 적는 공동 성명서가 놓였다." },
        { text: "교장실의 행정 실패 보고서는 별도 문서로 연결됐다." },
      ],
      choices: [
        {
          id: "ch7_e1_full_disclosure",
          label: "책임과 행정 실패를 검증 자료와 함께 전면 공개한다",
          next: "ch7_s03_full",
          setFacts: { ch7_ending_skeleton: "full_disclosure" },
        },
        {
          id: "ch7_e2_selective_disclosure",
          label: "조사에는 전부 남기고 대중에게는 피해 학생 관련 세부 정보를 덜어낸다",
          next: "ch7_s03_selective",
          setFacts: { ch7_ending_skeleton: "selective_disclosure" },
        },
        {
          id: "ch7_e3_shared_responsibility",
          label: "지도부 공동 성명과 교장실 책임 보고를 함께 공개한다",
          next: "ch7_s03_shared",
          setFacts: { ch7_ending_skeleton: "shared_responsibility" },
        },
      ],
    },

    ch7_s03_full: {
      id: "ch7_s03_full",
      lines: [
        { text: "운심은 방송 전사본에서 자기 이름을 가리는 선택을 해제했다." },
        { text: "마근아도 보고서 작성자 표시를 공개 상태로 돌렸다." },
        { speaker: "kang_unsim", text: "행정만 까고 내 말은 자르면 또 편집본이잖아." },
        { speaker: "magun_a", text: "제 경고문도 원문 그대로 공개하십시오." },
        { speaker: "magun_a", text: "전달에 실패한 문장까지 포함해야 합니다." },
        { text: "토스케는 시설 보고서의 처리 담당란이 비어 있는 화면에 교장 직인을 붙였다." },
        { speaker: "toske", text: "학교의 빈칸도 내 이름으로 내보내마." },
        { text: "우주는 공개 범위 표시를 `검증 자료 포함`으로 바꿨다." },
      ],
      next: "ch7_s04_submitted",
    },

    ch7_s03_selective: {
      id: "ch7_s03_selective",
      lines: [
        { text: "화영이 구조 시각표 아래의 피해 학생 이동 경로를 가리켰다." },
        { speaker: "hwayoung", text: "책임을 밝히는 데 이 아이가 어느 층에서 누구 곁에 있었는지까지 필요하오?" },
        { speaker: "inan", text: "조사 기록에는 필요해." },
        { speaker: "inan", text: "학생 공지에는 없어도 돼." },
        { text: "우주는 의료 연락 기록의 시간만 남기고 위치, 상태, 구조 인력의 개별 기록을 비공개로 돌렸다." },
        { text: "보고서의 방치 경로와 운심·히쿠도의 행위, 마근아의 경고 방식은 사실 요약에 유지됐다." },
        { speaker: "toske", text: "덜 공개하는 대상이 책임이어서는 안 된다." },
        { speaker: "toske", text: "이 기준이면 승인하마." },
      ],
      next: "ch7_s04_submitted",
    },

    ch7_s03_shared: {
      id: "ch7_s03_shared",
      lines: [
        { text: "이난이 빈 공동 성명서를 탁자 가운데로 옮겼다." },
        { speaker: "inan", text: "사실 요약은 교장실 이름으로." },
        { speaker: "inan", text: "우리가 놓친 건 우리 이름으로 내자." },
        { text: "운심이 첫 줄을 읽었다." },
        { text: "`특별 생활 지도부는 반복된 경고의 차이를 알아보지 못했고, 구성원의 위험 행동을 중단시키지 못했습니다.`" },
        { speaker: "kang_unsim", text: "너무 단체전처럼 쓰면 내 방송이 묻혀." },
        { text: "운심은 문장 아래에 자기 항목을 추가했다." },
        { text: "`강운심은 방송을 중단할 수 있었으나 중단하지 않았습니다.`" },
        { text: "화영, 에피, 우주가 각자 입력 칸을 열었다." },
        { text: "이난은 마지막 칸에 부장 직책을 적었다." },
        { speaker: "toske", text: "교장실의 행정 실패 보고도 같은 시각에 공개하마." },
        { speaker: "toske", text: "아이들만 줄 세워 사과시키는 꼴은 만들지 않겠다." },
      ],
      next: "ch7_s04_submitted",
    },

    ch7_s04_submitted: {
      id: "ch7_s04_submitted",
      lines: [
        { text: "이난은 공동 진술서에 `특별 생활 지도부`라고 적은 뒤, 그 아래에 다섯 개의 작성자 칸을 만들었다." },
        { speaker: "inan", text: "부장이라고 끝에만 서 있으면 편해." },
        { speaker: "inan", text: "그래서 앞에 쓸게." },
        { text: "첫 번째 칸에 이난의 이름이 들어갔다." },
        { speaker: "inan", text: "경고가 자주 왔다는 이유로 이번 것도 같은 온도라고 봤어." },
        { speaker: "inan", text: "확인하러 가지 않았고." },
        // 1장 화영 반응 삽입
        {
          text: "화영이 마근아의 현장 사진을 탁자 가운데 놓았다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "소인은 그날 무엇을 찍었는지 묻기 전에 종이와 사진부터 탓했소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "본 것을 말한답시고, 보지 못한 부분까지 판결했소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "화영은 자기 이름 옆에 `현장 판단`이라고 적었다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "성급했소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "이 말로 마근아공이 소인을 용서할 의무는 없소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },

        {
          text: "화영이 의료 연락 시각과 사진 촬영 시각을 나란히 적었다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          speaker: "hwayoung",
          text: "소인은 입을 다문 채 마근아공의 행동을 이미 정해버렸소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          speaker: "hwayoung",
          text: "그날 물었어야 했소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },

        {
          text: "화영이 구조 활동 기록 아래에 자기 이름을 적었다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          speaker: "hwayoung",
          text: "피해 학생에게서 눈을 떼지 않은 것은 후회하지 않소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          speaker: "hwayoung",
          text: "그 뒤에도 마근아공에게 묻지 않은 일은 소인의 몫이오.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },

        // 6장 마근아 선택 삽입
        {
          text: "마근아는 화영에게 먼저 보여준 진술서를 전원 열람 상태로 바꿨다.",
          condition: (state) => state.facts.ch6_breakthrough === "hwayoung",
        },
        {
          speaker: "magun_a",
          text: "나는 정확한 위험을 알고 있었습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "hwayoung",
        },
        {
          speaker: "magun_a",
          text: "같은 문장을 반복하면 전달도 강해진다고 생각했고, 상대가 무엇을 이해했는지는 확인하지 않았습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "hwayoung",
        },
        {
          text: "운심이 `나는`에서 시선을 멈췄다.",
          condition: (state) => state.facts.ch6_breakthrough === "hwayoung",
        },
        {
          text: "마근아는 문장을 고치지 않고 자기 이름을 입력했다.",
          condition: (state) => state.facts.ch6_breakthrough === "hwayoung",
        },

        {
          text: "마근아는 운심과 나눈 말을 공동 진술서에 옮겼다.",
          condition: (state) => state.facts.ch6_breakthrough === "unsim",
        },
        {
          speaker: "magun_a",
          text: "나는 강운심에게 다르게 설명하면 지는 것처럼 생각했습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "unsim",
        },
        {
          speaker: "magun_a",
          text: "위험을 아는 사람이 택할 태도가 아니었습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "unsim",
        },
        {
          text: "운심은 맞은편에서 마근아의 문장이 끝날 때까지 휴대폰을 탁자에 둔 채 들었다.",
          condition: (state) => state.facts.ch6_breakthrough === "unsim",
        },

        {
          text: "마근아는 그날 일정에 적어둔 `기록을 직접 읽을 것`을 확인했다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          text: "안경을 고쳐 쓰자 톱니 모양 동공이 한 번 헛돌았다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          speaker: "magun_a",
          text: "본인은 필요한 경고를…….",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          text: "마근아가 처음 두 글자를 지웠다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          speaker: "magun_a",
          text: "나는 위험을 알고 있었습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          speaker: "magun_a",
          text: "보고했고, 순찰했고, 경고했습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          speaker: "magun_a",
          text: "그 말을 이해했는지 묻지 않았습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          speaker: "magun_a",
          text: "보고서를 누가 처리하는지도 확인하지 않았습니다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },
        {
          text: "마근아는 전원이 듣는 자리에서 자기 이름을 입력했다.",
          condition: (state) => state.facts.ch6_breakthrough === "none_yet",
        },

        // 공통 합류
        { text: "토스케가 세 보고서의 인수 경로를 한 화면에 모았다." },
        { text: "시설관리팀의 일반 대기열, 담당자가 없는 공동 검토함, 인사 이동 중 멈춘 긴급 문서가 표시됐다." },
        { speaker: "toske", text: "학교는 세 번 받은 경고에 책임자를 한 번도 붙이지 않았다." },
        { speaker: "toske", text: "나는 이 학교의 교장이면서 시스템 관리자다." },
        { speaker: "toske", text: "분류가 끝났다는 표시를 보고 사람이 맡았는지 묻지 않은 책임은 내게도 있다." },
        { text: "토스케는 행정 실패 보고서의 책임자 칸에 자기 이름을 넣었다." },
        { text: "운심은 공동 진술서의 두 번째 작성자 칸을 열었다." },
        { speaker: "kang_unsim", text: "난 위험한 줄 몰랐다고만 쓰면 거짓말이야." },
        { speaker: "kang_unsim", text: "뜨거워지는 건 알았고, 저 규정 토끼 앞에서 끄기 싫었어." },
        { text: "운심이 마근아를 보았다." },
        { speaker: "kang_unsim", text: "경고를 개같이 한 건 쟤 몫." },
        { speaker: "kang_unsim", text: "듣기 싫다고 넘긴 건 내 몫." },
        { text: "마근아는 운심이 말한 표현 그대로 공동 진술서에 옮겼다." },
        { text: "운심은 그 아래에 자기 이름을 입력했다." },
        { text: "우주는 방송 원본과 시스템 로그를 읽기 전용 묶음으로 만들었다." },
        { text: "수정 권한은 제거하고 열람 기록만 남겼다." },
        { speaker: "kim_uju", text: "나중에 누가 또 요약본만 들고 오면…… 원본부터 대조할게." },
        { text: "이난은 다섯 번째 칸까지 채워진 것을 확인하고 문서 제목을 바꿨다." },
        { text: "`특별 생활 지도부 공동 책임 진술서.`" },
      ],
      next: "ch7_s05",
    },

    ch7_s04_withheld: {
      id: "ch7_s04_withheld",
      lines: [
        { text: "이난이 제출 확인서를 공동 화면에 띄웠다." },
        { text: "`사고 방송 원본` 칸만 비어 있었다." },
        { speaker: "inan", text: "지금이라도 추가 제출할 수 있어." },
        { speaker: "kang_unsim", text: "끝냈잖아." },
        { text: "운심은 휴대폰을 주머니에 넣었다." },
        { text: "우주도 백팩을 닫았지만, 안쪽 저장장치의 전원등은 천 사이로 비쳤다." },
        { text: "교장실이 확인할 수 있는 자료에는 화력 상승 수치와 붕괴 시각이 남았다." },
        { text: "마근아가 중단을 요구한 말과 운심이 거부한 말은 빠졌다." },
        { text: "이난은 공동 책임 진술서에서 방송 원본 관련 문단을 삭제했다." },
        { text: "문서 제목은 `특별 생활 지도부 운영 개선안`으로 바뀌었다." },
        { text: "에피가 다섯 개의 작성자 칸을 접어 화면 아래로 내렸다." },
        { speaker: "effie_minos", text: "이러면…… 일단 방은 남겠네요." },
        { text: "화영은 비어 있는 작성자 칸을 닫았다." },
        { text: "마근아는 9시 40분을 알리는 시계를 껐다." },
      ],
      next: "ch7_s05",
    },

    ch7_s05: {
      id: "ch7_s05",
      lines: [
        { text: "같은 날 오전 10시 12분, 방송실." },
        { text: "나희는 홀로그램 창 열두 개를 양손으로 나눠 넘겼다." },
        { text: "가운데에는 선도부 제출함에 꽂혀 있던 문서철과 같은 제목이 떠 있었다." },
        { text: "`개별 사안: 세이야 히쿠도.`" },
        { text: "시스템 상단의 판정권자는 `제갈 나희`, 토스케의 계정은 `이해충돌로 열람 제외` 상태였다." },
        { text: "나희가 분산 감시 기록의 시각표를 펼쳤다." },
        { text: "히쿠도의 장비 반입, 사전 경고, 사고 당일 능력 사용이 서로 다른 화면에 붙었다." },
        { speaker: "jegal_nahui", text: "세 줄 요약." },
        { speaker: "jegal_nahui", text: "무단 반입." },
        { speaker: "jegal_nahui", text: "경고 후 강행." },
        { speaker: "jegal_nahui", text: "출력 통제 실패." },
        { text: "나희는 `최종 판정`을 눌렀다가 바로 이전 화면으로 돌아갔다." },
        { speaker: "jegal_nahui", text: "아, 본인 소명 전." },
        { speaker: "jegal_nahui", text: "Too fast." },
        { text: "문서 상태를 `당사자 소명 대기`로 옮겼다." },
        { text: "판정 내용은 빈칸으로 남겨두고, 토스케의 접근 차단 기록까지 함께 저장했다." },
      ],
      next: (state) => (state.facts.ch7_evidence_submission === "full" ? "ch7_s06" : "ch7_s07_blame_shift"),
    },

    // 진입 조건: ch7_evidence_submission === "full" (ch7_s05의 next가 그 경우에만 여기로 보낸다)
    ch7_s06: {
      id: "ch7_s06",
      lines: [
        { text: "그 뒤 사흘 동안, 다섯 사람은 각자 맡은 진술과 후속 조치를 처리했다." },
        { text: "지도부실 활동 정지 안내문은 그대로 붙어 있었다." },
        // 운심과 마근아 후일담
        {
          text: "운심은 새 제한구역 안내문 초안을 마근아에게 보냈다.",
          condition: unsimTrustedMagunAAfterBreakthrough,
        },
        {
          text: "`난간 손상. 불 쓰면 진짜 무너짐. 들어가지 마.`",
          condition: unsimTrustedMagunAAfterBreakthrough,
        },
        {
          speaker: "magun_a",
          text: "표현은 비공식적이지만 위험과 결과가 명확합니다.",
          condition: unsimTrustedMagunAAfterBreakthrough,
        },
        {
          speaker: "kang_unsim",
          text: "한 줄 요약 합격 도장 찍어줘 그럼",
          condition: unsimTrustedMagunAAfterBreakthrough,
        },
        {
          text: "마근아는 문서 하단에 선도부 직인을 넣었다.",
          condition: unsimTrustedMagunAAfterBreakthrough,
        },
        {
          text: "운심은 자기 계정 홍보 문구를 덜어내고 안내문만 공유했다.",
          condition: unsimTrustedMagunAAfterBreakthrough,
        },

        {
          text: "마근아가 작성한 새 안내문에는 규정 번호보다 위험 사유가 먼저 적혔다.",
          condition: (state) => !unsimTrustedMagunAAfterBreakthrough(state),
        },
        {
          text: "`난간 손상으로 추락 위험이 있습니다. 출입하지 마십시오.`",
          condition: (state) => !unsimTrustedMagunAAfterBreakthrough(state),
        },
        {
          text: "운심은 공개 게시물 대신 마근아의 개인 대화창으로 답했다.",
          condition: (state) => !unsimTrustedMagunAAfterBreakthrough(state),
        },
        {
          text: "`이제야 사람 말 같네.`",
          condition: (state) => !unsimTrustedMagunAAfterBreakthrough(state),
        },
        {
          text: "마근아는 답장 대신 안내문에서 중복된 규정 번호 하나를 지웠다.",
          condition: (state) => !unsimTrustedMagunAAfterBreakthrough(state),
        },

        // 화영과 마근아 후일담
        {
          text: "화영과 마근아는 남쪽 연결계단의 새 통제선을 함께 점검했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "화영이 고정 고리를 잡아당기자 마근아는 장력 수치를 기록했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "그날 소인이 먼저 판결했소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "magun_a",
          text: "저는 설명할 수 있는 시간을 사용하지 않았습니다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "둘 다 기록해두시오.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "다음에는 둘 다 하지 않게.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "마근아는 점검표 아래에 화영의 문장을 그대로 추가했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },

        {
          text: "화영이 새 통제선의 고리를 잡아당겼다.",
          condition: (state) =>
            state.facts.ch1_hwayoung_magun_a_reaction === "silent" ||
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          text: "마근아는 규정 번호를 읽기 전에 고정 지점과 추락 위험부터 설명했다.",
          condition: (state) =>
            state.facts.ch1_hwayoung_magun_a_reaction === "silent" ||
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          speaker: "hwayoung",
          text: "이번에는 알아들었소.",
          condition: (state) =>
            state.facts.ch1_hwayoung_magun_a_reaction === "silent" ||
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          text: "마근아는 점검표의 `전달 확인` 칸에 화영의 답을 기록했다.",
          condition: (state) =>
            state.facts.ch1_hwayoung_magun_a_reaction === "silent" ||
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },

        // 이난의 책임 인식
        { text: "이난은 공동 진술서의 구성원 이름을 직책보다 위에 배치했다." },
        { text: "자기 항목에는 `반복 경고의 중요도 확인 실패`라고 적었다." },
        {
          text: "이난은 문서 작성자 칸에 우주의 이름을 공동 검증자로 추가했다.",
          condition: (state) => state.facts.ch4_info_path === "direct_to_uju",
        },
        {
          speaker: "kim_uju",
          text: "난 자료만 뽑았는데.",
          condition: (state) => state.facts.ch4_info_path === "direct_to_uju",
        },
        {
          speaker: "inan",
          text: "자료를 어디에 보낼지도 골랐어.",
          condition: (state) => state.facts.ch4_info_path === "direct_to_uju",
        },
        {
          text: "우주는 자기 이름을 지우는 대신 글자 크기만 한 단계 줄였다.",
          condition: (state) => state.facts.ch4_info_path === "direct_to_uju",
        },

        // 우주의 기록 보존
        {
          text: "우주는 사고 방송 사본에 교장실 봉인값을 붙인 뒤 운심에게 열람 권한을 보냈다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "네가 지운 기록도 같이 보존됨",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kang_unsim",
          text: "삭제 버튼 누른 것까지 평생 박제냐",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "응.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "나도 백업 숨긴 거 같이 남음",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },
        {
          text: "운심은 그 권한으로 인증 사본을 내려받았다.",
          condition: (state) => state.facts.ch2_stream_action === "self_delete",
        },

        {
          text: "우주는 두 사본을 같은 봉인 묶음에 넣었다.",
          condition: (state) => state.facts.ch2_stream_action !== "self_delete",
        },
        {
          text: "파일명 뒤에 붙어 있던 `최종`, `진짜최종`을 지우고 생성 시각으로 정렬했다.",
          condition: (state) => state.facts.ch2_stream_action !== "self_delete",
        },
        {
          speaker: "kim_uju",
          text: "이제 누가 편집해도 원본 위치는 안 바뀜.",
          condition: (state) => state.facts.ch2_stream_action !== "self_delete",
        },
        {
          text: "단탈리온이 저장 완료 표시를 초록색 꼬리로 가리켰다.",
          condition: (state) => state.facts.ch2_stream_action !== "self_delete",
        },

        // 에피와 특별 생활 지도부
        {
          text: "운심이 교장실 추가 진술을 하러 나갈 때 에피가 문 앞까지 따라갔다.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },
        {
          speaker: "effie_minos",
          text: "그때는 네 편부터 들었는데…… 오늘은 네가 들고 가는 것까지 볼게.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },
        {
          text: "운심은 에피의 후드 끝을 한 번 당기고 복도로 나갔다.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },

        {
          text: "화영은 시설 점검으로, 운심은 추가 진술로 향했다.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          text: "에피가 두 사람 사이의 빈자리를 보자 화영이 점검표 한 장을 건넸다.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          speaker: "hwayoung",
          text: "가운데를 지키는 일은 모두를 의자에 붙들어두는 일이 아니오.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          text: "에피는 점검표를 접지 않고 지도부실 책상 위에 두었다.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },

        {
          text: "마근아가 선도부 진술서를 들고 나가기 전에 에피 쪽으로 몸을 돌렸다.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "magun_a",
          text: "상관 있다고 했던 답은 지금도 유효합니다.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "magun_a",
          text: "활동 정지와 관계없이.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "effie_minos",
          text: "그럼 갔다 와요.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "effie_minos",
          text: "이번엔 답 확인했으니까.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },

        {
          text: "에피는 정리해둔 지도부실에서 혼자 기다렸다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "네 개의 대화창에는 각자의 도착 예정 시각이 올라왔다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        { text: "`시설 점검 끝나고 감.`", condition: (state) => state.facts.ch3_choice === "silent_tidy" },
        { text: "`추가 진술 끝나면 갈게.`", condition: (state) => state.facts.ch3_choice === "silent_tidy" },
        { text: "`로그 봉인 중. 늦음.`", condition: (state) => state.facts.ch3_choice === "silent_tidy" },
        {
          text: "`선도부 문서 제출 후 방문하겠습니다.`",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "에피는 네 메시지에 하나씩 읽음 표시를 남겼다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },

        // 카오의 저장 모티프 콜백
        { text: "각자 책임질 일을 들고 지도부실을 나설 때, 카오가 에피의 주머니 위로 머리를 내밀었다." },
        { text: "에피의 육각형 동공이 좁아지기 전에 카오의 부리를 손가락으로 밀어 넣었다." },
        { speaker: "effie_minos", text: "오늘 건 먹지 마." },
        { speaker: "effie_minos", text: "돌아오면 그때 보면 되니까." },
        { text: "카오가 주머니 안에서 에피의 손가락을 한 번 쪼았다." },
        { text: "에피는 열린 문을 그대로 두고 자기 차례의 진술서를 집었다." },
      ],
      next: (state) => {
        switch (state.facts.ch7_ending_skeleton) {
          case "full_disclosure":
            return "ch7_s07_full_disclosure";
          case "selective_disclosure":
            return "ch7_s07_selective_disclosure";
          case "shared_responsibility":
            return "ch7_s07_shared_responsibility";
          default:
            return "ch7_s07_blame_shift";
        }
      },
    },

    ch7_s07_full_disclosure: {
      id: "ch7_s07_full_disclosure",
      lines: [
        { text: "사고 일주일 뒤 오전 8시, 교내 사건기록부 게시 버튼 앞에 다섯 사람이 모였다." },
        { text: "이난이 커서를 게시 버튼 위에 올린 채 움직이지 않았다." },
        { speaker: "inan", text: "마지막으로 뺄 사람 있으면 지금 말해." },
        { text: "아무도 대답하지 않았다." },
        { speaker: "kang_unsim", text: "뺄 거였으면 처음부터 원본을 냈겠어?" },
        { text: "이난이 버튼을 눌렀다." },
        { text: "`남쪽 연결계단 사망 사고: 조사 자료 공개본.`" },
        { text: "첫 줄에는 피해 학생 한 명이 사망했다는 사실이 적혔다." },
        { text: "이름과 의료 정보는 가려졌고, 그 아래로 사전 보고서와 행정 처리 경로, 방송 전사본, 관계자 진술이 작성자 이름과 함께 이어졌다." },
        { text: "운심의 휴대폰에 알림이 몰리기 시작했다." },
        { text: "사탄이 그 소리에 맞춰 한 번 크게 부풀었다가, 평소 크기로 가라앉았다." },
        { text: "운심은 댓글 창을 열지 않고 사건기록부 링크만 자기 계정 상단에 고정했다." },
        { speaker: "kang_unsim", text: "봐라, 사탄." },
        { speaker: "kang_unsim", text: "이번엔 내가 먼저 껐어." },
        { text: "마근아는 공개된 경고문 원문 옆에 새 안전 안내 양식을 붙였다." },
        { text: "규정 번호보다 위험 사유가 먼저 오는 양식이었다." },
        { text: "토스케의 행정 실패 보고서에는 교장 직인이 찍혀 있었다." },
        { text: "특별 생활 지도부에는 활동 정지 유지 결정이 내려졌다." },
        { text: "재심 날짜와 시설 안전 점검 일정도 함께 공지됐다." },
        { speaker: "hwayoung", text: "이름을 걸었으니, 재심에도 이름으로 나가야 하지 않겠소." },
        { text: "이난은 지도부실 출석부 대신 후속 조치표를 문에 붙였다." },
        { text: "다섯 사람은 각자 맡은 칸에 귀환 예정 시각을 적었다." },
        { text: "우주는 자기 칸에 시각 대신 물음표를 적었다가, 지우고 시각을 채워 넣었다." },
        { text: "에피가 마지막으로 자기 시각을 적고 펜 뚜껑을 닫았다." },
        { text: "카오가 에피의 손등 위로 부리를 얹었다." },
        { text: "에피는 이번엔 손을 치우지 않았다." },
        { text: "ENDING · 전면 공개: 이름을 남기는 사람들" },
      ],
    },

    ch7_s07_selective_disclosure: {
      id: "ch7_s07_selective_disclosure",
      lines: [
        { text: "사고 일주일 뒤 오전 8시, 게시 전 마지막 검토가 지도부실에서 열렸다." },
        { text: "화영이 피해 학생의 이동 경로가 적힌 항목을 가리켰다." },
        { speaker: "hwayoung", text: "이 줄은 아직도 마음에 걸리오." },
        { speaker: "hwayoung", text: "지워도 될지 한 번 더 봐주시오." },
        { text: "우주가 그 항목을 비공개 처리 목록으로 옮기고, 대신 `교장실 조사 원본에 보존`이라는 인증값을 옆에 달았다." },
        { speaker: "kim_uju", text: "못 보게 잠근 거야." },
        { speaker: "kim_uju", text: "열쇠는 남겨뒀어." },
        { text: "교내 사건기록부에 조사 결과 요약이 게시됐다." },
        { text: "`남쪽 연결계단 사망 사고: 공개 범위 제한본.`" },
        { text: "피해 학생의 이름, 이동 경로, 의료 기록은 공개본에서 제외됐다." },
        { text: "사전 보고가 방치된 과정과 방송·능력 출력의 책임, 마근아의 경고 전달 실패는 항목별로 남았다." },
        { text: "운심이 댓글 입력창에 `숨긴 거 없음`이라고 썼다가 지웠다." },
        { speaker: "kang_unsim", text: "이 말, 거짓말은 아닌데 정확하지도 않네." },
        { text: "운심은 대신 공개 범위 기준과 조사 원본 보존 번호를 연결한 게시물을 올렸다." },
        { speaker: "kang_unsim", text: "안 보여주는 정보가 왜 빠졌는지는 여기." },
        { speaker: "kang_unsim", text: "책임은 안 가렸어." },
        { text: "라파엘이 이난의 어깨 위에서 조용히 서리를 걷었다." },
        { text: "이난은 그제야 자신이 검토 내내 숨을 얕게 쉬고 있었다는 걸 알아챘다." },
        { text: "지도부실 문에는 활동 정지 안내와 재심 일정이 나란히 붙었다." },
        { text: "화영은 두 종이가 떨어지지 않도록 모서리에 새 테이프를 눌러 붙였다." },
        { speaker: "hwayoung", text: "이 정도면, 그 아이를 두 번 구경거리로 만들지는 않은 것 같소." },
        { text: "ENDING · 선택적 공개: 가려야 할 이름" },
      ],
    },

    ch7_s07_shared_responsibility: {
      id: "ch7_s07_shared_responsibility",
      lines: [
        { text: "사고 일주일 뒤 오전 8시, 특별 생활 지도부 공동 성명과 교장실 행정 실패 보고가 같은 시각에 게시됐다." },
        { text: "공동 성명의 첫 줄에는 이난, 강운심, 화영, 에피 미노스, 김우주의 이름이 각자 한 칸씩 적혔다." },
        { text: "운심의 방송 책임과 화영의 현장 판단이 각자 쓴 문장으로 이어졌다." },
        { text: "에피, 이난, 우주도 사고 전후 자신이 택한 행동과 놓친 일을 자기 이름 아래 적었다." },
        { text: "마근아의 별도 진술과 교장실의 보고서 방치 경로는 관련 문서로 연결됐다." },
        { text: "게시 직후, 지도부실 단말기에 해체 심사 출석 통지가 동시에 떴다." },
        { speaker: "inan", text: "해체 심사는 그대로래." },
        { speaker: "kim_uju", text: "사과문 올렸다고 즉시 복구되는 시스템은 아니니까." },
        { speaker: "kang_unsim", text: "그건 정상 작동이네." },
        { text: "웃는 사람은 없었다." },
        { text: "반박하는 사람도 없었다." },
        { text: "사탄이 낮은 불씨 상태로 운심의 머리 위에 얹혀 있었다." },
        { text: "이난이 `전원 출석`을 누르자 각자의 단말기에 같은 일정이 등록됐다." },
        { speaker: "hwayoung", text: "다섯이 같이 적었으니, 다섯이 같이 앉으면 되오." },
        { text: "에피는 참석자 목록에서 다섯 이름을 확인했다." },
        { text: "카오가 목록 화면에 비친 자기 그림자를 쪼았다." },
        { speaker: "effie_minos", text: "그거 화면이야, 진짜 아니고." },
        { text: "웃음이 나오려던 것도 사실이었다." },
        { text: "에피는 웃지 않은 채로 화면을 껐다." },
        { text: "ENDING · 공동 책임 인정: 따로 적은 한 문장" },
      ],
    },

    ch7_s07_blame_shift: {
      id: "ch7_s07_blame_shift",
      lines: [
        { text: "D+7 오전 8시, 교장실 조사 결과가 게시됐다." },
        { text: "공개본은 시설 손상과 허가받지 않은 퍼포먼스, 예측 범위를 벗어난 능력 출력까지 적고 사고 경위를 닫았다." },
        { text: "발언 인용란에는 방송 원본 대신 출력 수치표만 들어갔다." },
        { text: "다섯 사람의 휴대폰이 동시에 울렸다." },
        { text: "지도부실에 있던 건 에피뿐이었다." },
        { text: "나머지 넷은 알림을 보고 하나둘 문을 밀고 들어왔다." },
        { text: "운심이 공지를 소리 내어 읽었다." },
        { speaker: "kang_unsim", text: "특별 생활 지도부는 운영 개선을 조건으로 해체 심사를 면했다." },
        { text: "운심이 휴대폰을 책상에 내리쳤다." },
        { text: "화면이 옆으로 미끄러지며 마근아의 시계 하나를 바닥으로 떨어뜨렸다." },
        { speaker: "kang_unsim", text: "우리 다섯 이름은 어디 있어?" },
        { speaker: "kang_unsim", text: "찾아줄 사람?" },
        { text: "에피가 의자를 뒤로 밀며 일어섰다." },
        { text: "다리가 바닥을 긁는 소리가 방을 갈랐다." },
        { speaker: "effie_minos", text: "방이라도 남아야 나중에 뭐든 하죠." },
        { speaker: "kang_unsim", text: "나중에 뭘 해." },
        { speaker: "kang_unsim", text: "걔는 이제 없는데." },
        { speaker: "effie_minos", text: "내가 그거 몰라서 빼자고 했겠어요?" },
        { speaker: "kang_unsim", text: "몰랐으면 좋겠다, 진짜." },
        { text: "운심의 머리 위에서 사탄이 순간적으로 부풀었다가, 그대로 사그라들며 잿빛으로 꺼졌다." },
        { speaker: "kang_unsim", text: "그리고 너." },
        { text: "운심이 마근아를 돌아봤다." },
        { speaker: "kang_unsim", text: "넌 처음부터 다 내라고 했지." },
        { speaker: "kang_unsim", text: "그래서 지금 그 말 하고 싶어서 죽겠지?" },
        { speaker: "magun_a", text: "아닙니다." },
        { speaker: "magun_a", text: "그때도 제 말은 그렇게 들렸을 겁니다." },
        { speaker: "kang_unsim", text: "지금 그거 사과야, 자랑이야?" },
        { text: "마근아는 대답하지 못했다." },
        { text: "손목시계를 눌렀지만 어느 것도 울리지 않았다." },
        { speaker: "hwayoung", text: "그만 좀 해!" },
        { text: "화영은 그 말 위에 흐트러진 격식을 도로 여몄다." },
        { speaker: "hwayoung", text: "그만들, 하시오." },
        { text: "화영도 방금 튀어나온 말을 들은 얼굴이었다." },
        { text: "화영이 두 사람 사이로 몸을 밀어 넣었다." },
        { text: "목소리 앞부분이 아직 방 안에 걸려 있었다." },
        { text: "화영도 그걸 들은 얼굴로, 다음 말은 천천히 골라 다시 이었다." },
        { speaker: "hwayoung", text: "서로 물어뜯는다고 그 아이가 돌아오는 것도 아니오." },
        { speaker: "kang_unsim", text: "화영 언니는 좋겠다." },
        { speaker: "kang_unsim", text: "그렇게 남 일처럼 말할 수 있어서." },
        { speaker: "hwayoung", text: "소인도 이 결말이 싫소." },
        { speaker: "hwayoung", text: "허나 그날 소인은 이 자리에서 아무도 막지 않았소." },
        { speaker: "hwayoung", text: "그러니 지금 서로를 물어뜯는 게 누구인지 따질 자격, 소인에게도 없소." },
        { text: "화영의 어깨 위에서 우리엘의 청동 팔이 팽팽하게 당겨졌다." },
        { text: "이난이 근무표를 접었다." },
        { text: "접는 소리가 필요 이상으로 컸다." },
        { speaker: "inan", text: "이 결정은 못 뒤집어." },
        { speaker: "inan", text: "제출 목록은 이미 봉인됐어." },
        { speaker: "effie_minos", text: "그렇게 말하면 편하겠다, 이난은." },
        { speaker: "inan", text: "편한 거 아니야." },
        { speaker: "inan", text: "그냥 뒤집을 방법이 없다는 거야." },
        { text: "라파엘의 서리가 근무표 접힌 자리를 따라 번지며 종이를 조금 뒤틀었다." },
        { text: "우주가 노트북을 소리 나게 덮었다." },
        { speaker: "kim_uju", text: "나 먼저 갈게." },
        { speaker: "kang_unsim", text: "어디를." },
        { speaker: "kim_uju", text: "몰라. 여기 말고." },
        { text: "우주는 백팩을 채 메지 못한 채 문을 열어젖혔다." },
        { text: "손잡이가 벽에 부딪혀 튕겨 나왔다." },
        { text: "지퍼 틈으로 단탈리온의 꼬리만 나와 있었고, 그 색이 옅어지고 있었다." },
        { text: "문이 닫힌 뒤에도 아무도 그 소리를 따라잡지 못했다." },
        { text: "특별 생활 지도부는 운영 개선을 조건으로 해체 심사를 면했다." },
        { text: "다섯 사람의 이름 중 어느 것도 그 조건문 안에는 없었다." },
        { text: "살아남은 건 부서였다." },
        { text: "화영은 지도부 명의의 현장 점검 요청을 개인 명의로 다시 냈다." },
        { text: "이난이 만든 근무표의 확인 인원은 0명으로 남았다." },
        { text: "우주는 사고 방송 사본을 개인 보존함으로 옮기고, 접근 권한 목록에서 지도부 공동 계정을 뺀 뒤 자기 이름만 남겼다." },
        { text: "지도부실에는 에피만 남았다." },
        { text: "활동 정지 안내문은 떼어져 있었지만, 의자 네 개는 아까 밀려난 자리 그대로 놓여 있었다." },
        { text: "카오가 주머니 밖으로 머리를 내밀었다." },
        { text: "에피의 조리개 동공이 좁아지기 전에 손바닥으로 카오의 눈을 덮었다." },
        { speaker: "effie_minos", text: "이건 갖지 마." },
        { text: "에피는 빈 출석부에 자기 이름을 적지 않고 지도부실 문을 닫았다." },
        { text: "의자 네 개는 그대로 있었다." },
        { text: "ENDING · 책임 전가 및 관계 붕괴: 남은 부서" },
      ],
    },
  },
};
