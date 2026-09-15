// 브라우저 localStorage에 저장/불러오기. 세이브 슬롯 UI는 미정(§15)이라
// 지금은 슬롯 하나만 쓰는 가장 단순한 형태로 둔다.

import type { GameSave } from "../types/story";

const SAVE_KEY = "story-novel-save-v1";

export function saveGame(save: GameSave): void {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function loadGame(): GameSave | null {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as GameSave;
  } catch {
    // 저장 파일이 깨져 있으면 새로 시작하는 편이 낫다.
    return null;
  }
}

export function clearSave(): void {
  localStorage.removeItem(SAVE_KEY);
}
