// chapters/CHAPTER_01_HWAYOUNG.md 를 엔진이 읽을 수 있는 구조로 옮긴 것.
//
// 지금은 CH1-S01 ~ CH1-S03(선택지 CH1-A 포함)까지만 옮겨서 "파이프라인이 실제로
// 동작하는지"를 보여주는 프로토타입이다. 나머지 씬(S04~S08, 사후 기록)은
// 같은 패턴으로 이어서 옮기면 된다. 선택지의 관계 효과는 대본에 적힌
// "제작 메모"와 ALL_CHAPTERS_SCENES_AND_CHOICES.md의 JSON 예시를 그대로 따랐다.
//
// 화면은 한 번에 한 줄만 보여주고 클릭할 때마다 다음 줄로 넘어가는 방식이라(App.tsx 참고),
// 원문에서 한 문단·한 대사에 여러 문장이 묶여 있어도 여기서는 문장 단위로 잘라서
// 각각을 별도의 Line으로 둔다. 문장을 합치거나 새로 쓰지 않고, 끊는 위치만 바꿨다.

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
        { text: "남쪽 연결계단에서 박수가 터졌다." },
        { text: "한 번으로 끝나지 않았다." },
        { text: "학생 여럿이 같은 박자로 발을 구르고, 그 사이를 휴대폰 알림음이 쉴 새 없이 찔렀다." },
        { text: "화영은 복도 표지판을 올려다보았다." },
        { text: "`남쪽 연결계단 출입 제한` 아래에 학생들이 손으로 덧붙인 화살표가 붙어 있었다." },
        { text: "`오늘 공연 여기`." },
        { text: "화영은 가죽 장갑의 손목을 잡아당겼다." },
        { speaker: "hwayoung", text: "허가받은 공연이면 저리 수상하게 안내하지는 않았겠지." },
        { text: "환호성이 한 층 더 커졌다." },
        { speaker: "hwayoung", text: "또 변고가 났소." },
        { text: "화영은 남쪽 복도로 뛰었다." },
        { text: "방화복의 반사띠가 창으로 들어온 햇빛을 짧게 끊어냈다." },
      ],
      next: "ch1_s02",
    },

    ch1_s02: {
      id: "ch1_s02",
      lines: [
        { text: "연결계단 입구에는 사람 등이 겹겹이 보였다." },
        { text: "난간에 둘러놓은 노란 제한 띠는 한쪽이 뜯긴 채 바닥을 쓸고 있었다." },
        { text: "학생들은 그 위를 밟고 안쪽으로 들어갔다." },
        { text: "중간 층계참이 무대였다." },
        { text: "히쿠도는 한쪽만 묶인 망토를 펼치고 섰다." },
        { text: "어깨 위의 작은 오브가 학생들의 휴대폰 카메라마다 흰 점을 찍었다." },
        { speaker: "hikudo", text: "눈을 감아도 상관없어." },
        { speaker: "hikudo", text: "내 천재성은 망막을 거치지 않고 뇌에 직접 도착하니까." },
        { text: "운심은 히쿠도보다 두 계단 위에 서 있었다." },
        { text: "휴대폰 화면에 떠오르는 댓글이 붉은 머리카락과 뺨을 빠르게 훑었다." },
        { speaker: "kang_unsim", text: "지금 들어온 애들 주목." },
        { speaker: "kang_unsim", text: "학교가 또 '위험' 두 글자로 계단 하나를 통째로 막았거든?" },
        { speaker: "kang_unsim", text: "그래서 진짜 위험한지 직접 봅니다." },
        { speaker: "kang_unsim", text: "현장 검증 콘텐츠, 개같이 시작." },
        { text: "화영이 사람 사이로 어깨를 밀어 넣었다." },
        { speaker: "hwayoung", text: "운심공." },
        { speaker: "hwayoung", text: "현장 검증이 아니라 현행범 중계로 보이오만." },
        { speaker: "kang_unsim", text: "오, 우리 공식 방패 왔다." },
        { speaker: "kang_unsim", text: "화영아, 손 흔들어." },
        { speaker: "kang_unsim", text: "지금 반응 좋아." },
        { speaker: "hwayoung", text: "싫소." },
        { text: "화영은 렌즈를 손바닥으로 가렸다." },
        { text: "채팅창이 더 빨리 올라갔다." },
        { speaker: "kang_unsim", text: "가리지 마." },
        { speaker: "kang_unsim", text: "시청자 이탈한다." },
        { speaker: "hwayoung", text: "사람부터 빼시오." },
        { speaker: "hwayoung", text: "이곳은 좁소." },
        { speaker: "kang_unsim", text: "본방 시작 삼십 초 남았어." },
        { speaker: "kang_unsim", text: "클라이맥스 끝나면 알아서 빠져." },
      ],
      next: "ch1_s03",
    },

    ch1_s03: {
      id: "ch1_s03",
      lines: [
        { text: "바퀴가 바닥을 긁는 소리가 환호를 둘로 갈랐다." },
        { text: "마근아의 세그웨이가 학생들 사이를 곧게 가르며 들어왔다." },
        { text: "마근아는 먼저 뜯긴 제한 띠를 확인했다." },
        { text: "다음으로 난간 앞에 선 학생 수를 셌다." },
        { text: "마지막에 운심을 보았다." },
        { speaker: "magun_a", text: "제한구역 무단 집결입니다." },
        { speaker: "magun_a", text: "즉시 해산하십시오." },
        { speaker: "kang_unsim", text: "등장 타이밍 봐." },
        { speaker: "kang_unsim", text: "알림 설정했냐?" },
        { speaker: "magun_a", text: "방송을 종료하십시오." },
        { speaker: "magun_a", text: "해당 구역에서는 허가되지 않은 능력 사용과 촬영이 금지되어 있습니다." },
        { speaker: "kang_unsim", text: "또 그 말이네." },
        { speaker: "kang_unsim", text: "여긴 위험합니다, 저긴 규정 위반입니다." },
        { speaker: "kang_unsim", text: "너는 레퍼토리 업데이트가 안 돼?" },
        { speaker: "magun_a", text: "현재 시각 15시 30분 18초입니다." },
        { speaker: "magun_a", text: "15시 31분까지 방송을 종료하고 학생들을 이동시키십시오." },
        { speaker: "kang_unsim", text: "일 분 주면 겁먹을 줄 알았어?" },
        { speaker: "kang_unsim", text: "얘들아, 우리 규정 토끼한테 인사해." },
        { text: "화영은 둘 사이의 거리를 보았다." },
        { text: "마근아의 세그웨이 앞바퀴와 운심의 운동화 끝이 손 하나 들어갈 만큼 떨어져 있었다." },
      ],
      choices: [
        {
          id: "ch1_a1_mediate",
          label: "둘 사이에 선다",
          next: "ch1_s03_a1",
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
          next: "ch1_s03_a2",
        },
        {
          id: "ch1_a3_root_cause",
          label: "히쿠도의 무대를 끊는다",
          next: "ch1_s03_a3",
          effects: [{ from: "hwayoung", to: "hikudo", stat: "guard", amount: 5 }],
        },
      ],
    },

    // 선택지별 조건부 본문 (대본의 "조건부 본문 A1/A2/A3"). 셋 다 ch1_s03_common으로 합류한다.
    ch1_s03_a1: {
      id: "ch1_s03_a1",
      lines: [
        { text: "화영은 세그웨이 앞바퀴를 한 손으로 밀고 운심의 어깨를 다른 손으로 밀었다." },
        { text: "둘 사이에 자기 몸 하나가 들어갈 자리를 만들었다." },
        { speaker: "hwayoung", text: "두 공 모두 그만하시오." },
        { speaker: "hwayoung", text: "다투려면 사람부터 내보내고 다투시오." },
        { speaker: "kang_unsim", text: "화영아, 카메라 가리잖아." },
        { speaker: "magun_a", text: "화영, 통제에 협조하려면 우선 이동 경로를 비우십시오." },
        { speaker: "hwayoung", text: "이 와중에도 둘이 소인부터 치우려 드는구려." },
        { text: "운심은 화영의 어깨 너머로 휴대폰을 높이 들었다." },
        { text: "마근아는 세그웨이를 반 발 뒤로 뺐지만 시선은 운심의 화면에서 떠나지 않았다." },
      ],
      next: "ch1_s03_common",
    },

    ch1_s03_a2: {
      id: "ch1_s03_a2",
      lines: [
        { text: "화영은 둘을 지나쳐 군중 쪽으로 돌아섰다." },
        { speaker: "hwayoung", text: "앞줄부터 세 계단 물러나시오." },
        { speaker: "hwayoung", text: "출구를 막지 마시오." },
        { text: "학생 하나가 화면을 보느라 듣지 못했다." },
        { text: "화영은 그 학생의 휴대폰을 내리지 않고 팔꿈치만 받쳐 방향을 돌렸다." },
        { speaker: "hwayoung", text: "방송은 걸으면서도 볼 수 있소." },
        { speaker: "hwayoung", text: "떨어지고 나서는 못 보오." },
        { text: "앞줄 몇 명이 투덜거리며 뒤로 움직였다." },
        { text: "그 빈자리를 계단 아래에서 올라온 학생들이 다시 채웠다." },
        { text: "화영은 난간 옆의 좁은 통로부터 비웠다." },
        { text: "등 뒤에서 운심과 마근아의 말이 겹쳤다." },
        { text: "어느 쪽이 먼저 목소리를 높였는지는 듣지 못했다." },
      ],
      next: "ch1_s03_common",
    },

    ch1_s03_a3: {
      id: "ch1_s03_a3",
      lines: [
        { text: "화영은 운심과 마근아를 지나 중간 층계참으로 올라갔다." },
        { speaker: "hwayoung", text: "히쿠도공." },
        { speaker: "hwayoung", text: "불을 붙인 자보다 장작을 쌓은 자부터 치우겠소." },
        { speaker: "hwayoung", text: "내려오시오." },
        { text: "히쿠도는 화영을 향해 두 팔을 벌렸다." },
        { text: "망토의 한쪽 끈이 풀려 발밑으로 흘렀다." },
        { speaker: "hikudo", text: "화영, 넌 운이 좋군. 역사적인 첫 시연을 가장 가까이서 볼 자리를 얻었어." },
        { speaker: "hwayoung", text: "내려오시오." },
        { speaker: "hikudo", text: "명령은 조명이 꺼진 다음에 받아주지." },
        { text: "화영이 팔을 뻗자 손에 잡힌 것은 망토뿐이었다." },
        { text: "한쪽만 묶여 있던 끈이 풀리며 망토가 통째로 벗겨졌다." },
        { text: "히쿠도는 셔츠의 잘못 끼운 단추를 드러낸 채 두 계단 위로 물러났다." },
        { text: "앞줄 학생들이 웃으며 휴대폰을 들이밀었다." },
        { text: "화영이 망토를 내려놓고 다시 올라가려는 사이, 학생 셋이 히쿠도와 화영 사이를 메웠다." },
      ],
      next: "ch1_s03_common",
    },

    // 세 선택지 모두 결국 여기서 다시 합류한다 (대본의 "공통 합류" 절).
    // 실제로 어떤 조건부 본문을 거쳐왔는지는 history를 보면 알 수 있으므로,
    // 이후 씬에서 history를 조건으로 대사를 갈라 쓸 수 있다.
    ch1_s03_common: {
      id: "ch1_s03_common",
      lines: [
        { text: "운심의 휴대폰에서 짧은 효과음이 연달아 울렸다." },
        { text: "화면을 채운 숫자가 자릿수를 바꾸자 머리 위의 흰 새가 날개를 펼쳤다." },
        { text: "(계속되는 내용은 CH1-S04 전조부터 이어서 옮기면 된다.)" },
      ],
    },
  },
};
