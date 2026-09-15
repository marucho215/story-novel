import { displayNameOf } from "../../data/characters";
import type { Relationships } from "../../types/story";

/**
 * 실제 게임 UI가 아니라 엔진이 제대로 계산하는지 눈으로 확인하기 위한 개발용 패널이다.
 * 관계 수치를 플레이어에게 어떻게(혹은 얼마나) 보여줄지는 MASTER_DESIGN §9에서
 * "아직 확정하지 않았다"고 되어 있으므로, 이 컴포넌트는 디버그 전용으로만 쓴다.
 */
export function RelationshipDebugPanel({ relationships }: { relationships: Relationships }) {
  const rows = Object.entries(relationships).flatMap(([from, targets]) =>
    Object.entries(targets)
      .filter(([, edge]) => edge.trust !== 0 || edge.guard !== 0 || edge.debt !== 0)
      .map(([to, edge]) => ({ from, to, ...edge })),
  );

  if (rows.length === 0) {
    return <p className="debug-empty">(아직 변한 관계 없음)</p>;
  }

  return (
    <table className="debug-table">
      <thead>
        <tr>
          <th>from</th>
          <th>to</th>
          <th>trust</th>
          <th>guard</th>
          <th>debt</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={`${row.from}-${row.to}`}>
            <td>{displayNameOf(row.from)}</td>
            <td>{displayNameOf(row.to)}</td>
            <td>{row.trust}</td>
            <td>{row.guard}</td>
            <td>{row.debt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
