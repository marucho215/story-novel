// MASTER_DESIGN.md §2, §8에 등장하는 인물들의 id ↔ 표시 이름 대응표.
// id는 chapters/*.md 파일명과 대사 태그를 참고해서 정했다.

export interface Character {
  id: string;
  displayName: string;
}

export const CHARACTERS: Character[] = [
  { id: "hwayoung", displayName: "화영" },
  { id: "kang_unsim", displayName: "강운심" },
  { id: "effie_minos", displayName: "에피 미노스" },
  { id: "inan", displayName: "이난" },
  { id: "kim_uju", displayName: "김우주" },
  { id: "magun_a", displayName: "마근아" },
  { id: "hikudo", displayName: "세이야 히쿠도" },
  { id: "toske", displayName: "세이야 토스케" },
  { id: "jegal_nahui", displayName: "제갈 나희" },
];

export const CHARACTER_IDS = CHARACTERS.map((c) => c.id);

export function displayNameOf(id: string): string {
  return CHARACTERS.find((c) => c.id === id)?.displayName ?? id;
}
