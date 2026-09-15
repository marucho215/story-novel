import type { Choice } from "../../types/script";

export function ChoiceList({
  choices,
  onChoose,
}: {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}) {
  // 선택지는 항상 직접 클릭해서 고르게 한다. 버튼은 기본적으로 엔터/스페이스에도
  // 반응하는데, 대사 넘기기용 전역 키보드 리스너(App.tsx)와 겹쳐 오조작이 나기 쉬워서
  // 여기서 그 기본 동작 자체를 막는다.
  function blockKeyboardActivation(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
    }
  }

  return (
    <div className="choice-list" aria-label="선택지">
      {choices.map((choice) => (
        <button
          key={choice.id}
          className="choice-button"
          onClick={() => onChoose(choice)}
          onKeyDown={blockKeyboardActivation}
        >
          <span className="choice-button__mark" aria-hidden="true">
            ›
          </span>
          <span>{choice.label}</span>
        </button>
      ))}
    </div>
  );
}
