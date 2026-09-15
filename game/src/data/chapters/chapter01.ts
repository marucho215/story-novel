// chapters/CHAPTER_01_HWAYOUNG.md 를 엔진이 읽을 수 있는 구조로 옮긴 것.
//
// 지금은 CH1-S01 ~ CH1-S03(선택지 CH1-A 포함)까지만 옮겨서 "파이프라인이 실제로
// 동작하는지"를 보여주는 프로토타입이다. 나머지 씬(S04~S08, 사후 기록)은
// 같은 패턴으로 이어서 옮기면 된다. 선택지의 관계 효과는 대본에 적힌
// "제작 메모"와 ALL_CHAPTERS_SCENES_AND_CHOICES.md의 JSON 예시를 그대로 따랐다.

import type { ChapterScript } from "../../types/script";

export const chapter01: ChapterScript = {
  id: "chapter01_hwayoung",
  title: "1장 화영 — 남쪽 계단, 한 명",
  pointOfView: "hwayoung",
  firstSceneId: "ch1_s01",
  scenes: {
    ch1_s01: {
      id: "ch1_s01",
      lines: [
        { text: "15시 20분." },
        { text: "화영은 계단 두 칸을 한 번에 내려가다가 방향을 틀었다." },
        {
          text: "남쪽 연결계단에서 박수가 터졌다. 한 번으로 끝나지 않았다. 학생 여럿이 같은 박자로 발을 구르고, 그 사이를 휴대폰 알림음이 쉴 새 없이 찔렀다.",
        },
        {
          text: "화영은 복도 표지판을 올려다보았다. `남쪽 연결계단 출입 제한` 아래에 학생들이 손으로 덧붙인 화살표가 붙어 있었다.",
        },
        { text: "`오늘 공연 여기`." },
        { text: "화영은 가죽 장갑의 손목을 잡아당겼다." },
        { speaker: "hwayoung", text: "허가받은 공연이면 저리 수상하게 안내하지는 않았겠지." },
        { text: "환호성이 한 층 더 커졌다." },
        { speaker: "hwayoung", text: "또 변고가 났소." },
        { text: "화영은 남쪽 복도로 뛰었다. 방화복의 반사띠가 창으로 들어온 햇빛을 짧게 끊어냈다." },
      ],
      next: "ch1_s02",
    },

    ch1_s02: {
      id: "ch1_s02",
      lines: [
        {
          text: "연결계단 입구에는 사람 등이 겹겹이 보였다. 난간에 둘러놓은 노란 제한 띠는 한쪽이 뜯긴 채 바닥을 쓸고 있었다. 학생들은 그 위를 밟고 안쪽으로 들어갔다.",
        },
        { text: "중간 층계참이 무대였다." },
        {
          text: "히쿠도는 한쪽만 묶인 망토를 펼치고 섰다. 어깨 위의 작은 오브가 학생들의 휴대폰 카메라마다 흰 점을 찍었다.",
        },
        { speaker: "hikudo", text: "눈을 감아도 상관없어. 내 천재성은 망막을 거치지 않고 뇌에 직접 도착하니까." },
        { text: "운심은 히쿠도보다 두 계단 위에 서 있었다. 휴대폰 화면에 떠오르는 댓글이 붉은 머리카락과 뺨을 빠르게 훑었다." },
        {
          speaker: "kang_unsim",
          text: "지금 들어온 애들 주목. 학교가 또 '위험' 두 글자로 계단 하나를 통째로 막았거든? 그래서 진짜 위험한지 직접 봅니다. 현장 검증 콘텐츠, 개같이 시작.",
        },
        { text: "화영이 사람 사이로 어깨를 밀어 넣었다." },
        { speaker: "hwayoung", text: "운심공. 현장 검증이 아니라 현행범 중계로 보이오만." },
        { speaker: "kang_unsim", text: "오, 우리 공식 방패 왔다. 화영아, 손 흔들어. 지금 반응 좋아." },
        { speaker: "hwayoung", text: "싫소." },
        { text: "화영은 렌즈를 손바닥으로 가렸다. 채팅창이 더 빨리 올라갔다." },
        { speaker: "kang_unsim", text: "가리지 마. 시청자 이탈한다." },
        { speaker: "hwayoung", text: "사람부터 빼시오. 이곳은 좁소." },
        { speaker: "kang_unsim", text: "본방 시작 삼십 초 남았어. 클라이맥스 끝나면 알아서 빠져." },
      ],
      next: "ch1_s03",
    },

    ch1_s03: {
      id: "ch1_s03",
      lines: [
        { text: "바퀴가 바닥을 긁는 소리가 환호를 둘로 갈랐다." },
        { text: "마근아의 세그웨이가 학생들 사이를 곧게 가르며 들어왔다." },
        { text: "마근아는 먼저 뜯긴 제한 띠를 확인했다. 다음으로 난간 앞에 선 학생 수를 셌다. 마지막에 운심을 보았다." },
        { speaker: "magun_a", text: "제한구역 무단 집결입니다. 즉시 해산하십시오." },
        { speaker: "kang_unsim", text: "등장 타이밍 봐. 알림 설정했냐?" },
        { speaker: "magun_a", text: "방송을 종료하십시오. 해당 구역에서는 허가되지 않은 능력 사용과 촬영이 금지되어 있습니다." },
        { speaker: "kang_unsim", text: "또 그 말이네. 여긴 위험합니다, 저긴 규정 위반입니다. 너는 레퍼토리 업데이트가 안 돼?" },
        { speaker: "magun_a", text: "현재 시각 15시 30분 18초입니다. 15시 31분까지 방송을 종료하고 학생들을 이동시키십시오." },
        { speaker: "kang_unsim", text: "일 분 주면 겁먹을 줄 알았어? 얘들아, 우리 규정 토끼한테 인사해." },
        {
          text: "화영은 둘 사이의 거리를 보았다. 마근아의 세그웨이 앞바퀴와 운심의 운동화 끝이 손 하나 들어갈 만큼 떨어져 있었다.",
        },
      ],
      choices: [
        {
          id: "ch1_a1_mediate",
          label: "둘 사이에 선다",
          next: "ch1_s03_common",
          effects: [
            { from: "hwayoung", to: "magun_a", stat: "trust", amount: 5 },
            { from: "hwayoung", to: "kang_unsim", stat: "guard", amount: 5 },
            { from: "magun_a", to: "hwayoung", stat: "trust", amount: 5 },
            { from: "kang_unsim", to: "hwayoung", stat: "guard", amount: 5 },
          ],
        },
        {
          id: "ch1_a2_crowd_control",
          label: "학생들을 뒤로 물린다",
          next: "ch1_s03_common",
        },
        {
          id: "ch1_a3_root_cause",
          label: "히쿠도의 무대를 끊는다",
          next: "ch1_s03_common",
          effects: [{ from: "hwayoung", to: "hikudo", stat: "guard", amount: 5 }],
        },
      ],
    },

    // 세 선택지 모두 결국 여기서 다시 합류한다 (대본의 "공통 합류" 절).
    // 실제로 어떤 조건부 본문을 거쳐왔는지는 history를 보면 알 수 있으므로,
    // 이후 씬에서 history를 조건으로 대사를 갈라 쓸 수 있다.
    ch1_s03_common: {
      id: "ch1_s03_common",
      lines: [
        { text: "운심의 휴대폰에서 짧은 효과음이 연달아 울렸다. 화면을 채운 숫자가 자릿수를 바꾸자 머리 위의 흰 새가 날개를 펼쳤다." },
        { text: "(계속되는 내용은 CH1-S04 전조부터 이어서 옮기면 된다.)" },
      ],
    },
  },
};
