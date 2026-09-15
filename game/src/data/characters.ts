// MASTER_DESIGN.md §2, §8에 등장하는 인물들의 id ↔ 표시 이름 대응표.
// id는 chapters/*.md 파일명과 대사 태그를 참고해서 정했다.

export interface Character {
  id: string;
  displayName: string;
  icon?: string; // 없으면 아이콘 자리 비움
}

// public/ 폴더 파일은 문자열 경로로 직접 참조하면 Vite가 배포 base 경로(예: GitHub Pages의
// "/story-novel/")를 반영해주지 않는다. import.meta.env.BASE_URL로 그 경로를 붙여서
// 로컬(`/`)과 GitHub Pages 서브 경로 양쪽에서 다 맞게 만든다.
const iconPath = (file: string) => `${import.meta.env.BASE_URL}icons/${file}`;

export const CHARACTERS: Character[] = [
  { id: "hwayoung", displayName: "화영", icon: iconPath("hwayoung.png") },
  { id: "kang_unsim", displayName: "강운심", icon: iconPath("kang-unshim.png") },
  { id: "effie_minos", displayName: "에피 미노스", icon: iconPath("epi-minos.png") },
  { id: "inan", displayName: "이난", icon: iconPath("inan.png") },
  { id: "kim_uju", displayName: "김우주", icon: iconPath("kim-wooju.png") },
  { id: "magun_a", displayName: "마근아", icon: iconPath("mageuna.png") },
  { id: "hikudo", displayName: "세이야 히쿠도" },
  { id: "toske", displayName: "세이야 토스케" },
  { id: "staff", displayName: "교직원" },
  { id: "toume_suashi", displayName: "토우메 스아시" },
  { id: "jegal_nahui", displayName: "제갈 나희" },
];

export const CHARACTER_IDS = CHARACTERS.map((c) => c.id);

export function displayNameOf(id: string): string {
  return CHARACTERS.find((c) => c.id === id)?.displayName ?? id;
}

export function iconOf(id: string): string | undefined {
  return CHARACTERS.find((c) => c.id === id)?.icon;
}
