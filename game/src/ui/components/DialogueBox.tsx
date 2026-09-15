import { displayNameOf } from "../../data/characters";
import type { Line } from "../../types/script";

/**
 * 연애 시뮬레이션처럼 한 번에 한 줄만 보여준다. 넘길 수 있을 때(onAdvance가 있을 때)만
 * 상자 전체를 클릭 가능하게 만들고, 다음 줄이 있다는 힌트를 오른쪽 아래에 띄운다.
 * 선택지를 보여줘야 하는 마지막 줄에서는 onAdvance를 넘기지 않아서 클릭해도 반응하지 않는다.
 */
export function DialogueBox({ line, onAdvance }: { line: Line; onAdvance?: () => void }) {
  return (
    <div
      className={onAdvance ? "dialogue-box dialogue-box--advanceable" : "dialogue-box"}
      onClick={onAdvance}
      role={onAdvance ? "button" : undefined}
      tabIndex={onAdvance ? 0 : undefined}
      onKeyDown={(event) => {
        if (onAdvance && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onAdvance();
        }
      }}
    >
      <p className={line.speaker ? "line line--dialogue" : "line line--narration"}>
        {line.speaker && <strong className="speaker">{displayNameOf(line.speaker)}</strong>}
        {line.text}
      </p>
      {onAdvance && <span className="advance-hint">▼ 클릭하여 계속</span>}
    </div>
  );
}
