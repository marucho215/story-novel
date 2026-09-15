import { displayNameOf } from "../../data/characters";
import type { Line } from "../../types/script";

/** 현재 씬의 대사/지문을 위에서부터 그대로 보여준다. 한 줄씩 넘기는 연출은 나중 단계다. */
export function DialogueBox({ lines }: { lines: Line[] }) {
  return (
    <div className="dialogue-box">
      {lines.map((line, index) => (
        <p key={index} className={line.speaker ? "line line--dialogue" : "line line--narration"}>
          {line.speaker && <strong className="speaker">{displayNameOf(line.speaker)}</strong>}
          {line.text}
        </p>
      ))}
    </div>
  );
}
