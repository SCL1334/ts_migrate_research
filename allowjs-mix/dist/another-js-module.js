"use strict";
// src/another-js-module.js
// 這個 JavaScript 模組將展示如何導入並使用一個 TypeScript 模組。
// 當 tsc 編譯時，它會先處理 ts-module.ts，產生對應的 .js 檔案在 dist/src/ 中。
// 因此，在執行時期，這個 require 會正確地找到編譯後的 JavaScript 檔案。
const { toUpperCase, displayUserProfile } = require('./ts-module');
/**
 * 建立一個格式化的歡迎訊息。
 * 這個函式會呼叫從 ts-module.ts 導入的 toUpperCase 函式。
 * @param {string} name - 使用者的名字。
 * @returns {string} 大寫的歡迎訊息。
 */
function createWelcomeMessage(name) {
    const upperCaseName = toUpperCase(name); // 呼叫來自 TypeScript 模組的函式
    return `WELCOME, ${upperCaseName}!`;
}
/**
 * 建立一個用戶摘要。
 * 這個函式會呼叫從 ts-module.ts 導入的 displayUserProfile 函式。
 * @returns {string} 用戶摘要。
 */
function createUserSummary() {
    /** @type {import('./ts-module').UserProfile} */
    const profile = {
        username: 'js-user',
        email: 'js@example.com',
    };
    return displayUserProfile(profile); // 呼叫來自 TypeScript 模組的函式
}
module.exports = {
    createWelcomeMessage,
    createUserSummary,
};
