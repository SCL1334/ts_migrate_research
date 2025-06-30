// src/js-module.js (無 JSDoc 版本)
// 這個檔案是一個純 JavaScript 模組，我們故意移除了 JSDoc 註解。
// 當 TypeScript 處理這個檔案時，它會將所有匯出的函式和參數推斷為 `any` 型別。
// 這模擬了在遷移過程中，遇到沒有型別定義的舊有 JavaScript 程式碼的常見情況。

function multiply(a, b) {
  return a * b;
}

function getFullName(user) {
  return user.firstName  + user.lastName;
}

module.exports = {
  multiply,
  getFullName,
};