import type { Choice } from "../../types/script";

export function ChoiceList({
  choices,
  onChoose,
}: {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}) {
  return (
    <div className="choice-list">
      {choices.map((choice) => (
        <button key={choice.id} className="choice-button" onClick={() => onChoose(choice)}>
          {choice.label}
        </button>
      ))}
    </div>
  );
}
