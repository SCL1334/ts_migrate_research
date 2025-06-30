"use strict";
// src/ts-module.ts
// 這是一個新的 TypeScript 模組，它將被一個 JavaScript 模組使用。
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = toUpperCase;
exports.displayUserProfile = displayUserProfile;
/**
 * 將字串轉換為大寫。
 * @param text - 要轉換的字串。
 * @returns 轉換為大寫的字串。
 */
function toUpperCase(text) {
    return text.toUpperCase();
}
function displayUserProfile(profile) {
    return `User: ${profile.username}, Email: ${profile.email}`;
}
