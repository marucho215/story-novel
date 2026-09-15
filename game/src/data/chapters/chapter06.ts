// chapters/CHAPTER_06_MAGUN_A.md 를 엔진이 읽을 수 있는 구조로 옮긴 것.
// 이 장은 조건부 삽입이 겹겹이 쌓인다 (1장 반응, 5장 공개 방식, 3장 에피 선택).
// Line.condition은 임의의 함수라서 "A이면서 B" 같은 조합 조건도 그대로 표현할 수 있다.

import type { ChapterScript } from "../../types/script";

export const chapter06: ChapterScript = {
  id: "chapter06_magun_a",
  title: "6장 마근아 도착 확인",
  pointOfView: "magun_a",
  firstSceneId: "ch6_s01",
  scenes: {
    ch6_s01: {
      id: "ch6_s01",
      lines: [
        { text: "사고 이틀 뒤 오후." },
        { text: "마근아는 조사 진술서의 사고 경위 입력란에 `15:30:18`을 적었다." },
        { text: "오른쪽에는 우주가 검증한 문서 세 건을 띄웠다." },
        { text: "마근아가 기억하는 제출 시각 옆에 서버 등록 시각이 붙었고, 순찰 기록 아래에는 행정 처리 경로가 이어졌다." },
        { text: "마근아는 첫 문장 끝의 마침표를 지우고 사고 당일 시각을 불러왔다." },
        { text: "사고 당일 15시 30분." },
        { text: "세그웨이 앞바퀴가 뜯긴 제한 띠를 밟기 전에 멈췄다." },
        { text: "마근아는 제한 띠의 절단면을 확인하고 난간 앞의 학생을 셌다." },
        { text: "운심의 카메라는 그 뒤에야 시야에 들어왔다." },
        { text: "남쪽 연결계단은 사고 21일 전부터 위험 보고 대상이었다." },
        { text: "`FAC-001`에는 난간 고정부의 부식, `SAF-002`에는 미세 균열, `SAF-003`에는 반복되는 무단 출입을 적었다." },
        { text: "마근아는 세 문서 번호를 제출 순서대로 외우고 있었다." },
        { text: "학교는 아직 공식 출입 금지 승인을 내리지 않았다." },
        { text: "마근아에게는 경고하고 기록할 권한만 있었다." },
        { text: "그래서 승인 전까지 순찰 횟수를 늘리고 제한 띠를 보강했다." },
        { text: "그 제한 띠가 바닥에 있었다." },
        { speaker: "magun_a", text: "제한구역 무단 집결입니다." },
        { speaker: "magun_a", text: "즉시 해산하십시오." },
        { text: "운심이 카메라를 자기 얼굴 가까이 당겼다." },
        { speaker: "kang_unsim", text: "등장 타이밍 봐." },
        { speaker: "kang_unsim", text: "알림 설정했냐?" },
        { speaker: "magun_a", text: "방송을 종료하십시오." },
        { speaker: "magun_a", text: "해당 구역에서는 허가되지 않은 능력 사용과 촬영이 금지되어 있습니다." },
        { speaker: "kang_unsim", text: "또 그 말이네." },
        { speaker: "kang_unsim", text: "여긴 위험합니다, 저긴 규정 위반입니다." },
        { speaker: "kang_unsim", text: "너는 레퍼토리 업데이트가 안 돼?" },
        { text: "마근아는 안경을 올렸다." },
        { text: "손목시계를 확인했다." },
        { text: "운심은 `제한구역`을 그대로 받아 말꼬리를 잡았다." },
        { text: "마근아는 그것으로 청취 확인을 끝냈다." },
        { text: "난간 고정부의 균열과 열 변형 가능성은 운심의 대답 어디에도 없었다." },
        { speaker: "magun_a", text: "현재 시각 15시 30분 18초입니다." },
        { speaker: "magun_a", text: "15시 31분까지 방송을 종료하고 학생들을 이동시키십시오." },
        { text: "마근아는 종료 시각까지 지정했다." },
        { text: "운심은 일 분이라는 숫자에서 위험의 기한보다 자기를 물러서게 하려는 압박을 읽었다." },
        { speaker: "kang_unsim", text: "일 분 주면 겁먹을 줄 알았어?" },
        { speaker: "kang_unsim", text: "얘들아, 우리 규정 토끼한테 인사해." },
        { text: "카메라가 마근아를 향했다." },
        { text: "오른쪽 화면의 댓글 수가 계속 바뀌었다." },
        { text: "마근아는 카메라 너머의 학생들에게 제한구역에서 해산하고 능력 사용을 중지하라고 다시 통보했다." },
        { text: "운심의 대답에는 경고의 이유를 묻는 말이 없었다." },
        { text: "마근아는 방송 종료 거부로 분류하고 다음 경고로 넘어갔다." },
      ],
      next: "ch6_s02",
    },

    ch6_s02: {
      id: "ch6_s02",
      lines: [
        { text: "15시 36분." },
        { text: "운심의 머리 위에서 흰머리오목눈이가 푸른 불길로 커졌다." },
        { text: "마근아는 왼손목의 능력 출력 경보를 확인했다." },
        { text: "허리춤의 시계에는 남쪽 연결계단 순찰 주기가, 조끼 안쪽 회중시계에는 현재 시각이 표시되어 있었다." },
        { text: "능력 출력 경보의 초침이 안전 범위를 넘어갔다." },
        { speaker: "hwayoung", text: "운심공." },
        { speaker: "hwayoung", text: "방송을 끄시오." },
        { speaker: "kang_unsim", text: "괜찮아." },
        { speaker: "kang_unsim", text: "반응 좀 세게 온 거야." },
        { speaker: "hwayoung", text: "소인은 불을 아오." },
        { speaker: "hwayoung", text: "그건 괜찮은 불이 아니오." },
        { text: "경고문 목록에는 능력 출력 초과에 맞춘 별도 문안이 없었다." },
        { text: "마근아는 목록 맨 위의 공통 문구를 읽었다." },
        { speaker: "magun_a", text: "강운심." },
        { speaker: "magun_a", text: "능력 출력을 즉시 중지하십시오." },
        { text: "운심이 웃으며 카메라를 돌렸다." },
        { speaker: "kang_unsim", text: "방금 들었지?" },
        { speaker: "kang_unsim", text: "이제 내 능력도 학교 허가 받고 켜래." },
        { speaker: "magun_a", text: "허가 문제가 아닙니다." },
        { speaker: "magun_a", text: "현재 출력은 안전 기준을 초과했습니다." },
        { text: "능력 출력 경보만 설명하는 문장이었다." },
        { text: "난간 상태는 경고 밖에 남았다." },
        { text: "마근아는 머릿속에서 다음 문장까지 만들었다." },
        { text: "`난간이 손상되어 있습니다. 그 열이 닿으면 붕괴할 수 있습니다.`" },
        { text: "입 밖으로 내기 전에 앞선 경고로 충분하다고 결론냈다." },
        { text: "`안전 기준 초과`라는 표현에도 위험의 크기가 포함된다고 보았다." },
        { text: "운심이 카메라 앞에서 또 과장이라고 받아칠 가능성도 계산했다." },
        { text: "구 별관에서 서로의 방식을 비난한 뒤, 마근아는 운심에게 같은 경고를 두 번 설명하는 일을 양보로 취급하기 시작했다." },
        { text: "그 계산 끝에서, 난간이 무너질 수 있다는 한 문장이 빠졌다." },
        { text: "15시 38분." },
        { text: "히쿠도의 오브가 갈라졌다." },
        { text: "눈동자를 품은 전격이 층계참을 훑었다." },
        { text: "정면을 보고 있던 학생들의 초점이 한꺼번에 늦어졌다." },
        { text: "화영이 벽 쪽으로 붙으라고 외쳤다." },
        { text: "정면을 보던 학생 하나는 두 번째 고함에야 몸을 돌렸다." },
        { text: "히쿠도의 능력 여파가 명령을 알아듣는 속도까지 늦추고 있었다." },
        { text: "난간 도장이 부풀기 시작했다." },
        { text: "마근아는 해산과 출력 중지를 반복했다." },
        { text: "마근아의 목소리만 커졌다." },
        { text: "경고문은 앞서 읽은 것과 같았다." },
        { text: "15시 40분." },
        { text: "첫 번째 고정부가 빠지자 두 번째 고정부가 계단 모서리를 때렸다." },
        { text: "화영이 난간 쪽으로 몸을 던졌다." },
        { text: "마근아는 추락하는 학생보다 먼저 화영의 손이 닿지 못한 것을 보았다." },
        { text: "그 뒤에 학생이 난간 밖으로 사라졌다." },
        { text: "마근아가 진술서에 적은 다음 시각은 `15:40:15`였다." },
        { text: "우주가 검증한 추락 시각과 숫자 하나까지 같았다." },
        { text: "마근아는 사고 경위의 다음 줄에 `15:41:00`을 입력했다." },
      ],
      next: "ch6_s03",
    },

    ch6_s03: {
      id: "ch6_s03",
      lines: [
        { text: "15시 41분." },
        { text: "화영은 아래 층계참에서 피해 학생의 곁을 지켰다." },
        { text: "주변 학생 하나가 화상을 입은 운심에게 다가갔다." },
        { text: "마근아는 위쪽 층계참에 남은 학생과 부서진 난간을 확인한 뒤 보건실을 호출했다." },
        { speaker: "magun_a", text: "추락 사고입니다." },
        { speaker: "magun_a", text: "남쪽 연결계단." },
        { text: "연결된 의료진에게 추락 위치와 접근 경로를 전달했다." },
        { text: "현장 인원 수를 묻는 질문에 아래를 다시 확인했다." },
        { speaker: "magun_a", text: "네." },
        { speaker: "magun_a", text: "남쪽 계단, 한 명." },
        { text: "진술서의 첫 항목에 의료 연락 시각을 넣었다." },
        { text: "15시 41분 10초." },
        { text: "통화를 끝내며 남아 있는 난간과 천장의 균열을 확인했다." },
        { text: "구조 인력이 같은 자리에 올라섰다가 추가로 추락하지 않게 통제 범위를 정해야 했다." },
        { text: "추가 위험 확인에는 통화를 마친 시각을 붙였다." },
        { text: "15시 41분 30초." },
        { text: "빠져나간 고정부와 타버린 제한 띠를 촬영했다." },
        { text: "열이 식고 사람들이 지나가면 사고 직후의 상태가 바뀔 수 있었다." },
        { text: "네 장의 사진에는 구조물과 바닥의 경계선만 담겼다." },
        { text: "현장 사진 네 장이 증거 보존 항목에 연결됐다." },
        { text: "15시 42분." },
        { text: "출입 제한 및 추가 피해 방지 문서를 열었다." },
        { text: "통제선 시작점, 구조 인력 진입로, 남은 난간의 위험 범위를 표시했다." },
        { text: "마지막으로 현장 봉쇄 문서의 발급 시각을 입력했다." },
        { text: "네 항목의 시각은 모두 우주의 검증 결과와 일치했다." },
        { text: "화영에게 그 조치들이 어떻게 보였는지는 어느 기록에도 없었다." },
        // 1장 반응 반영 — 셋 중 실제 일어난 것 하나만 보인다.
        {
          text: "화영은 마근아의 화면을 한 번 보고 피해 학생 쪽으로 돌아섰다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          text: "마근아는 통제 지시 이행란에 체크했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          text: "화영의 시선이 사진과 문서를 거친 일은 기록에서 빠졌다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          text: "화영이 계단을 두 칸 올라왔다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "지금 사람 하나가 떨어졌소.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "그 종이와 사진이 먼저요?",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "마근아의 화면에는 의료 연락 완료 표시와 구조물 사진, 출입 제한 문서가 함께 떠 있었다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "화면을 돌려 보여주는 데에는 몇 초면 충분했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "magun_a",
          text: "추가 붕괴 방지를 위한 긴급 통제 절차입니다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "magun_a",
          text: "구조 인력이 도착할 때까지 아래 층계참에서 이동하지 마십시오.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "마근아가 읽은 것은 화면의 내용이 아니라 절차명이었다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "화영은 `소인에게도 규정만 읽어주는구려`라고 답했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "마근아는 통제 업무를 계속했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "현장 불응 항목은 빈칸으로 두었고, 화영의 말은 어느 칸에도 옮기지 않았다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "화영은 마근아 쪽을 더 보지 않고 구조 인력이 들어올 길을 비웠다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          text: "마근아는 구조 인력 진입로가 확보된 시각을 역할 분담 완료로 기록했다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          text: "그 기록에는 화영이 마근아의 행동을 어떻게 본다는 항목 자체가 없었다.",
          condition: (state) => state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        // 공통 본문
        { text: "15시 45분, 구조 인력이 도착했다." },
        { text: "마근아는 통제선 한쪽을 걷어 구조 인력을 들였다." },
        { text: "화영은 아래 층계참에 남았고 운심은 보건실로 옮겨졌다." },
        { text: "마근아는 봉쇄선을 다시 이었다." },
        { text: "진술서를 쓰던 마근아가 사고 경위 입력창에서 시선을 들었다." },
      ],
      next: "ch6_s04",
    },

    ch6_s04: {
      id: "ch6_s04",
      lines: [
        { text: "마근아가 진술서 입력을 멈추자, 책상 위 시계 여섯 개의 초침이 서로 다른 간격으로 들렸다." },
        { text: "우주의 검증 요약 마지막 줄이 화면 가운데에 떠 있었다." },
        { text: "`제출 후 처리 상태 재확인 기록 없음.`" },
        { text: "마근아는 `FAC-001`의 제출 완료 알림을 열었다." },
        { text: "`정상적으로 등록되었습니다.`" },
        { text: "`SAF-002`에도 같은 문장이 있었다." },
        { text: "`정상적으로 등록되었습니다.`" },
        { text: "`SAF-003`은 우선순위가 달랐지만 결과 문구는 같았다." },
        { text: "`정상적으로 등록되었습니다.`" },
        { text: "마근아는 `등록`을 `전달`로 읽었다." },
        { text: "담당자 지정란이 비어 있었지만 접수 번호가 생겼으니 다음 계통으로 넘어간다고 여겼다." },
        { text: "`긴급` 표기도 처리 순서를 앞당길 것으로 믿었다." },
        { text: "첫 보고서를 낸 날부터 순찰표의 남쪽 계단 칸이 늘었다." },
        { text: "두 번째 보고서에는 운심과 히쿠도에게 보낸 경고 시각이 붙었다." },
        { text: "세 번째 보고서를 내고는 제한 표지를 한 줄 더 둘렀다." },
        { text: "마근아는 늘어난 기록을 경고가 강해진 증거로 셌다." },
        { text: "화면에는 처리 상태 조회 기록이 없었다." },
        { text: "담당자에게 회신을 요구한 기록도 없었다." },
        { text: "마근아는 제출 완료 시각만 세 번 확인했다." },
        { speaker: "magun_a", text: "보고했습니다." },
        { text: "산달폰의 메트로놈들이 같은 박자로 움직였다." },
        { speaker: "magun_a", text: "경고했습니다." },
        { text: "몸에 찬 시계 하나가 정각도 아닌데 울렸다." },
        { text: "마근아는 알림을 끄려다 어느 시계인지 찾지 못했다." },
        { speaker: "magun_a", text: "순찰을 강화했습니다." },
        { text: "세 문장은 그대로 조사 진술서에 옮길 수 있었다." },
        { text: "마근아는 그 아래에 `예방 결과`를 쓰려다 입력란을 비웠다." },
        { text: "마근아는 사고 14일 전의 경고 기록을 열었다." },
        { text: "`제한구역 무단 출입입니다. 규정 위반입니다.`" },
        { text: "운심은 그날도 비웃었다." },
        { text: "마근아는 경고가 전달됐다고 기록했다." },
        { text: "상대가 비웃을 수 있을 만큼 들었으니 전달된 것이라고 생각했다." },
        { speaker: "magun_a", text: "나는 전달했다고 생각했습니다." },
        { text: "책상 위 여섯 시계의 초침이 계속 움직였다." },
        { text: "마근아의 진술서에는 여전히 `본인은`이라는 주어가 적혀 있었다." },
        { text: "마근아는 안경을 벗어 책상에 놓았다." },
        { speaker: "magun_a", text: "전달한 줄 알았어." },
        { text: "산달폰의 메트로놈 하나가 박자를 놓쳤다." },
        { text: "구 별관 사고 때 운심의 실시간 경고를 들은 학생들이 먼저 교실을 빠져나왔다." },
        { text: "허가 없이 열린 송출 때문에 두 반의 동선이 겹쳤지만, 초기 대피 시각은 예상보다 빨랐다." },
        { text: "마근아는 운심의 송출 덕에 초기 대피가 빨라졌다는 평가를 최종 보고서에서 뺐다." },
        { text: "운심도 마근아가 마지막 교실까지 확인한 일은 방송에서 다루지 않았다." },
        { text: "이후 두 사람의 언쟁에는 서로의 실패 사례만 남았다." },
        { text: "남쪽 계단에서도 마근아는 운심에게 인정받지 못할 설명부터 잘라냈다." },
        { text: "함께 잘린 문장이 `난간이 무너질 수 있습니다`였다." },
        { text: "마근아는 조사 진술서의 첫 문장을 지웠다." },
        { text: "`본인은 필요한 경고와 예방 조치를 모두 수행하였습니다.`" },
        { text: "빈칸에 새 문장을 입력했다." },
        { text: "`본인은 경고가 이해되었는지, 보고가 처리되었는지 확인하지 않았습니다.`" },
        { text: "마근아는 수신자 칸을 열어 화영의 이름을 입력했다." },
        { text: "삭제한 뒤에는 운심을 입력했다." },
        { text: "두 번째 이름도 지우자 검색창이 다시 비었다." },
      ],
      next: "ch6_s05",
    },

    ch6_s05: {
      id: "ch6_s05",
      lines: [
        // 5장 선택 반영 — 셋 중 실제 경로 하나만 보인다.
        {
          text: "우주의 검증 요약은 지도부 단체 대화방에 게시됐다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          text: "마근아에게는 교장실 조사망을 통해 작성자 통지가 도착했다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          text: "화영은 그 통지보다 늦게 선도부 사무실로 왔다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          text: "화영은 오른손으로 손잡이를 잡고 들어왔다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          text: "왼쪽 어깨의 보호대가 교복 위로 드러났다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          speaker: "hwayoung",
          text: "우주공의 기록을 읽었소.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          text: "마근아는 의료 연락 기록과 현장 사진을 화영 쪽으로 돌렸다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          speaker: "magun_a",
          text: "의료 연락은 15시 41분에 시작했습니다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          speaker: "magun_a",
          text: "사진 촬영은 15시 41분 30초입니다.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },
        {
          speaker: "hwayoung",
          text: "그 순서를 이제는 아오.",
          condition: (state) => state.facts.ch5_disclosure === "group",
        },

        {
          text: "이난이 확인 항목 세 개를 들고 선도부 사무실로 왔다.",
          condition: (state) => state.facts.ch5_disclosure === "inan_only",
        },
        { text: "`경고 전달 방식.`", condition: (state) => state.facts.ch5_disclosure === "inan_only" },
        { text: "`보고 후 확인 여부.`", condition: (state) => state.facts.ch5_disclosure === "inan_only" },
        { text: "`지도부가 놓친 신호.`", condition: (state) => state.facts.ch5_disclosure === "inan_only" },
        {
          speaker: "inan",
          text: "우주가 확인한 범위만 적었어.",
          condition: (state) => state.facts.ch5_disclosure === "inan_only",
        },
        {
          speaker: "inan",
          text: "진단은 아직 안 붙였고.",
          condition: (state) => state.facts.ch5_disclosure === "inan_only",
        },
        {
          speaker: "magun_a",
          text: "세 항목 모두 제 진술이 필요합니다.",
          condition: (state) => state.facts.ch5_disclosure === "inan_only",
        },
        {
          speaker: "inan",
          text: "그래서 왔어.",
          condition: (state) => state.facts.ch5_disclosure === "inan_only",
        },
        {
          text: "이난은 맞은편 의자를 당겨 앉고 목록의 첫 항목이 마근아 쪽을 향하도록 책상에 놓았다.",
          condition: (state) => state.facts.ch5_disclosure === "inan_only",
        },

        {
          text: "우주가 두고 간 태블릿에는 마지막 질문이 남아 있었다.",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "`제출 후 처리 상태 재확인 기록 없음.`",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "`이것도 맞아요?`",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "마근아는 우주에게 `기록상 사실입니다`라고 답했다.",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "우주는 기록 말고 답하라고 했다.",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "그때 `기록상 사실입니다` 뒤에 숨긴 답을 조사 진술서에 입력해 두었다.",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "`본인은 경고가 이해되었는지, 보고가 처리되었는지 확인하지 않았습니다.`",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          text: "마근아는 우주의 태블릿에 그 문장을 그대로 전송했다.",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          speaker: "kim_uju",
          text: "확인",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },
        {
          speaker: "kim_uju",
          text: "이번엔 사람 말 맞음",
          condition: (state) => state.facts.ch5_disclosure === "confronted_magun_a",
        },

        // 1장 화영 반응 삽입 — group 경로였을 때만, 1장에서 화영이 보였던 반응별로 갈린다.
        {
          text: "화영은 두 사람 사이에 현장 사진을 놓았다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "magun_a",
          text: "당시 귀하의 항의를 부정확한 판단으로 처리했습니다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          speaker: "hwayoung",
          text: "소인의 판단도 전부 정확하지 않았소.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },
        {
          text: "화영은 현장 사진을 마근아 쪽으로 밀어 돌려주었다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "confronted",
        },

        {
          text: "화영은 의료 연락 시각을 손가락으로 짚었다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          speaker: "hwayoung",
          text: "그날 소인이 물었다면 답했겠소?",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          speaker: "magun_a",
          text: "답했을 것입니다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          text: "마근아는 문장을 고쳤다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },
        {
          speaker: "magun_a",
          text: "답했어야 합니다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" && state.facts.ch1_hwayoung_magun_a_reaction === "silent",
        },

        {
          text: "화영과 마근아는 각자 맡았던 조치부터 대조했다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" &&
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          speaker: "hwayoung",
          text: "그날은 서로 등을 보고 일했구려.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" &&
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },
        {
          speaker: "magun_a",
          text: "역할은 나뉘었지만 정보는 나누지 않았습니다.",
          condition: (state) =>
            state.facts.ch5_disclosure === "group" &&
            state.facts.ch1_hwayoung_magun_a_reaction === "focused_on_victim",
        },

        // 3장 에피 선택 삽입 — 공개 방식과 무관하게, 3장에서 에피가 골랐던 선택 하나가 여기 반영된다.
        {
          text: "에피에게서 메시지가 왔다.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },
        {
          speaker: "effie_minos",
          text: "운심에게 이야기할 때 서류부터 내밀지는 마세요.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },
        {
          speaker: "effie_minos",
          text: "들을 때 옆에 누가 있어야 할 것 같으니까.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },
        {
          text: "마근아는 `확인했습니다`를 입력했다가 지웠다.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },
        {
          speaker: "magun_a",
          text: "그렇게 하겠습니다.",
          condition: (state) => state.facts.ch3_choice === "side_unsim",
        },

        {
          text: "화영에게서 회의 참석 요청이 왔다.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          speaker: "hwayoung",
          text: "에피공에게 가운데를 지키겠다고 약속했소.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          speaker: "hwayoung",
          text: "마근아공의 자리도 비워두겠소.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          text: "마근아는 공지에서 회의 시각을 다시 확인했다.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },
        {
          speaker: "magun_a",
          text: "참석하겠습니다.",
          condition: (state) => state.facts.ch3_choice === "ask_hwayoung_mediate",
        },

        {
          text: "에피에게서 짧은 메시지가 왔다.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "effie_minos",
          text: "상관 있다고 했죠.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "effie_minos",
          text: "지금도 그래요?",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          text: "마근아는 입력해 둔 `정상 근무를 위해 필요합니다`를 지우고 답했다.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },
        {
          speaker: "magun_a",
          text: "지금도 상관 있습니다.",
          condition: (state) => state.facts.ch3_choice === "confront_magun_a",
        },

        {
          text: "마근아가 지도부원들에게 보낸 자료 열람 안내에는 네 개의 읽음 표시가 붙었다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "에피의 표시만 없었다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "마근아는 재전송 시각을 예약했다가 취소했다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "에피가 열지 않은 자료를 한 번 더 밀어 넣는 대신 개인 대화창으로 이동했다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "에피의 개인 대화창을 열었다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          speaker: "magun_a",
          text: "자료를 받았습니까.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
        {
          text: "이번에는 답을 기다렸다.",
          condition: (state) => state.facts.ch3_choice === "silent_tidy",
        },
      ],
      next: "ch6_s06",
    },

    ch6_s06: {
      id: "ch6_s06",
      lines: [
        { text: "조사 진술서의 새 문장 끝에서 커서가 깜박였다." },
        { text: "`본인은 경고가 이해되었는지, 보고가 처리되었는지 확인하지 않았습니다.`" },
        { text: "수신자 칸은 비어 있었다." },
        { text: "마근아는 저장 버튼과 연락처 목록을 번갈아 보았다." },
      ],
      choices: [
        {
          id: "ch6_c1_to_hwayoung",
          label: "화영에게 먼저 자기 언어로 말한다",
          next: "ch6_s06_to_hwayoung",
          effects: [
            { from: "magun_a", to: "hwayoung", stat: "trust", amount: 15 },
            { from: "hwayoung", to: "magun_a", stat: "trust", amount: 15 },
          ],
          setFacts: { ch6_breakthrough: "hwayoung" },
        },
        {
          id: "ch6_c2_to_unsim",
          label: "운심에게 먼저 자기 언어로 말한다",
          next: "ch6_s06_to_unsim",
          effects: [
            { from: "magun_a", to: "kang_unsim", stat: "guard", amount: -15 },
            { from: "kang_unsim", to: "magun_a", stat: "trust", amount: 15 },
          ],
          setFacts: { ch6_breakthrough: "unsim" },
        },
        {
          id: "ch6_c3_still_guarded",
          label: "아직 누구에게도 말하지 않고 기록한다",
          next: "ch6_s06_still_guarded",
          setFacts: { ch6_breakthrough: "none_yet" },
        },
      ],
    },

    ch6_s06_to_hwayoung: {
      id: "ch6_s06_to_hwayoung",
      lines: [
        { text: "화영이 선도부 사무실 맞은편 자리에 앉았다." },
        { text: "의료 연락 기록과 현장 사진을 닫았다." },
        { text: "화면에는 진술서의 한 문장만 남았다." },
        { speaker: "magun_a", text: "화영." },
        { speaker: "magun_a", text: "그날 당신이 아래에 있어서 다행이라고 생각했습니다." },
        { text: "화영은 책상 위 시계에서 눈을 떼고 마근아를 보았다." },
        { speaker: "magun_a", text: "피해 학생 곁에 사람이 있었습니다." },
        { speaker: "magun_a", text: "운심을 옮길 사람도 정했습니다." },
        { speaker: "magun_a", text: "그래서 저는 위쪽의 추가 붕괴를 막을 수 있었습니다." },
        { speaker: "magun_a", text: "그 말을 그때 했어야 했습니다." },
        { speaker: "magun_a", text: "당신이 틀렸다고 처리하면서, 내가 설명하지 않은 내용은 계산에서 뺐습니다." },
        { text: "화영이 오른쪽 장갑을 벗어 흉터 난 손바닥이 아래로 가도록 책상에 놓았다." },
        { speaker: "hwayoung", text: "소인은 아직 그날의 일을 전부 다르게 볼 수는 없소." },
        { speaker: "magun_a", text: "요구하지 않습니다." },
        { speaker: "hwayoung", text: "하지만 방금 한 말은 들었소." },
        { text: "마근아는 진술서의 저장 버튼을 눌렀다." },
      ],
      next: "ch6_s07_to_hwayoung",
    },

    ch6_s06_to_unsim: {
      id: "ch6_s06_to_unsim",
      lines: [
        { text: "마근아는 운심에게 선도부 사무실로 와 달라는 메시지를 보냈다." },
        { text: "운심은 양손에 얇은 보호 붕대를 감은 채 들어왔다." },
        { text: "평소 손에 붙어 있던 휴대폰은 교복 주머니를 안쪽에서 네모나게 밀어냈다." },
        { text: "마근아는 보고서 세 장을 내밀었다." },
        { text: "운심은 받지 않았다." },
        { speaker: "kang_unsim", text: "또 읽으라고?" },
        { speaker: "magun_a", text: "아닙니다." },
        { speaker: "magun_a", text: "제가 말하겠습니다." },
        { text: "운심이 보고서 끝을 손가락으로 밀어냈다." },
        { text: "고개가 마근아 쪽으로 들렸다." },
        { speaker: "magun_a", text: "구 별관에서는 귀하의 경고가 학생들을 먼저 움직였습니다." },
        { speaker: "kang_unsim", text: "이 타이밍에 옛날 칭찬 출고?" },
        { speaker: "magun_a", text: "나는 그 사실을 알고도, 이번에는 당신이 알아들을 방식으로 경고하지 않았습니다." },
        { text: "마근아는 `귀하에게`라고 고쳐 말하려다 입을 다물었다." },
        { text: "방금 나온 주어를 그대로 두었다." },
        { speaker: "kang_unsim", text: "그럼 내가 못 알아들어서 그랬다는 거야?" },
        { speaker: "magun_a", text: "아닙니다." },
        { speaker: "magun_a", text: "당신은 방송을 중단할 수 있었습니다." },
        { speaker: "magun_a", text: "나는 위험을 더 분명하게 말할 수 있었습니다." },
        { speaker: "magun_a", text: "둘 다 사실입니다." },
        { text: "운심은 붕대 감긴 손을 주머니에 넣었다가 빈손으로 꺼냈다." },
        { speaker: "kang_unsim", text: "왜 나한테는 맨날 같은 말만 했는데." },
        { speaker: "magun_a", text: "당신에게 다른 말로 설명하면 내가 지는 것처럼 생각했습니다." },
        { text: "운심이 코로 한 번 웃었다." },
        { speaker: "kang_unsim", text: "그거 내 대사잖아." },
        { speaker: "magun_a", text: "알고 있습니다." },
        { text: "운심은 책상 위 `SAF-002`를 자기 쪽으로 당겼다." },
        { text: "벽시계 초침이 한 바퀴를 도는 동안 마근아는 운심의 대답을 기다렸다." },
      ],
      next: "ch6_s07_to_unsim",
    },

    ch6_s06_still_guarded: {
      id: "ch6_s06_still_guarded",
      lines: [
        { text: "조사 진술서에서 `본인은`을 지웠다." },
        { text: "`나는 경고가 이해되었는지, 보고가 처리되었는지 확인하지 않았습니다.`" },
        { text: "문장 끝의 `습니다`까지 선택했지만 삭제 키에서 손을 뗐다." },
        { text: "자신의 잘못을 기록하는 일과 누군가 앞에서 말하는 일은 같은 처리 단계가 아니었다." },
        { text: "마근아는 진술서를 저장했다." },
        { text: "파일 상태가 `초안`에서 `제출 대기`로 바뀌었다." },
        { text: "수신자 칸은 비운 채, 사고 사흘 뒤 열릴 회의 일정에 `직접 설명`이라는 메모를 추가했다." },
      ],
      next: "ch6_s07_still_guarded",
    },

    ch6_s07_to_hwayoung: {
      id: "ch6_s07_to_hwayoung",
      lines: [
        { text: "화영은 장갑을 다시 끼기 전에 책상 위의 진술서를 한 번 읽었다." },
        { speaker: "hwayoung", text: "내일 회의에도 같은 말을 할 수 있겠소?" },
        { speaker: "magun_a", text: "같은 문장으로는 부족합니다." },
        { text: "화영은 장갑 한 짝을 끼고 다른 한 짝을 손에 들었다." },
        { speaker: "hwayoung", text: "그럼 다른 말도 준비하시오." },
        { text: "마근아는 일정표의 다음 날 회의 항목 옆에 `설명`이라고 적었다." },
      ],
    },

    ch6_s07_to_unsim: {
      id: "ch6_s07_to_unsim",
      lines: [
        { text: "운심은 보고서 세 장 가운데 `SAF-002`만 집었다." },
        { text: "자신이 경고받은 날 작성된 문서였다." },
        { speaker: "kang_unsim", text: "이거 가져가도 돼?" },
        { speaker: "magun_a", text: "사본입니다." },
        { speaker: "kang_unsim", text: "허락인지 정보인지 모르겠네." },
        { speaker: "magun_a", text: "가져가십시오." },
        { text: "운심은 문서를 접지 않고 휴대폰과 따로 들었다." },
        { text: "복도로 나가면서도 `SAF-002`의 제목을 읽고 있었다." },
      ],
    },

    ch6_s07_still_guarded: {
      id: "ch6_s07_still_guarded",
      lines: [
        { text: "제출 대기 상태의 진술서에는 수신자가 비어 있었다." },
        { text: "마근아는 자동 전송 설정을 해제하고 다음 날 회의 시작 10분 전 알림을 만들었다." },
        { text: "`이 문서를 제출하시겠습니까?`" },
        { text: "확인 창을 닫은 뒤 일정표의 알림 제목을 입력했다." },
        { text: "`기록을 직접 읽을 것.`" },
      ],
    },
  },
  nextChapterId: "chapter07_ensemble",
};
