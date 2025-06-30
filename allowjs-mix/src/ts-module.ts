// src/ts-module.ts
// 這是一個新的 TypeScript 模組，它將被一個 JavaScript 模組使用。

/**
 * 將字串轉換為大寫。
 * @param text - 要轉換的字串。
 * @returns 轉換為大寫的字串。
 */
export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

/**
 * 一個使用介面的範例，展示 TypeScript 的型別功能。
 */
export interface UserProfile {
  username: string;
  email: string;
}

export function displayUserProfile(profile: UserProfile): string {
  return `User: ${profile.username}, Email: ${profile.email}`;
}
