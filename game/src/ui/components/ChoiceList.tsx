import type { Choice } from "../../types/script";

export function ChoiceList({
  choices,
  onChoose,
}: {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}) {
  return (
    <div className="choice-list" aria-label="선택지">
      {choices.map((choice) => (
        <button key={choice.id} className="choice-button" onClick={() => onChoose(choice)}>
          <span className="choice-button__mark" aria-hidden="true">
            ›
          </span>
          <span>{choice.label}</span>
        </button>
      ))}
    </div>
  );
}
