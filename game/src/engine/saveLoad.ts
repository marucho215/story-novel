// 브라우저 localStorage에 저장/불러오기. 세이브 슬롯 UI는 미정(§15)이라
// 지금은 슬롯 하나만 쓰는 가장 단순한 형태로 둔다.

import type { GameSave } from "../types/story";

const SAVE_KEY = "story-novel-save-v1";

export function saveGame(save: GameSave): void {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

/**
 * JSON.parse는 형태를 보장하지 않는다. `{}`처럼 구조가 다른 값도 파싱은 되지만,
 * 그걸 그대로 GameSave로 믿으면 나중에 save.progress.chapterId 같은 곳에서
 * 화면이 통째로 죽는다. 그래서 실제로 써야 하는 필드가 다 있는지 여기서 확인한다.
 */
function isGameSave(value: unknown): value is GameSave {
  if (typeof value !== "object" || value === null) return false;
  const save = value as Record<string, unknown>;

  const progress = save.progress as Record<string, unknown> | undefined;
  if (typeof progress !== "object" || progress === null) return false;
  if (typeof progress.chapterId !== "string" || typeof progress.sceneId !== "string") return false;

  const story = save.story as Record<string, unknown> | undefined;
  if (typeof story !== "object" || story === null) return false;
  if (typeof story.facts !== "object" || story.facts === null) return false;
  if (typeof story.evidence !== "object" || story.evidence === null) return false;
  if (typeof story.relationships !== "object" || story.relationships === null) return false;
  if (!Array.isArray(story.history)) return false;

  return true;
}

export function loadGame(): GameSave | null {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // 저장 파일 자체가 깨져 있으면 새로 시작하는 편이 낫다.
    return null;
  }

  return isGameSave(parsed) ? parsed : null;
}

export function clearSave(): void {
  localStorage.removeItem(SAVE_KEY);
}
