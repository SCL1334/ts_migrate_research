"use strict";
// es-modules-example.ts
// 這是 ECMAScript 模組 (ESM) 的範例。
// ESM 是現代 JavaScript 推薦的模組化方式，使用 `import` 和 `export` 關鍵字。
// 它提供了靜態分析的能力，有助於工具鏈優化和 TypeScript 的型別檢查。
Object.defineProperty(exports, "__esModule", { value: true });
exports.esmConstant = void 0;
exports.greetESM = greetESM;
function greetESM(name) {
    return `Hello from ESM, ${name}!`;
}
exports.esmConstant = "This is an ESM constant.";
// 在實際應用中，這個模組會被其他檔案 import。
// 為了演示，我們在這裡直接執行一個簡單的輸出。
console.log(greetESM('World'));
console.log(exports.esmConstant);
// 演示型別檢查：如果嘗試傳入錯誤的型別，TypeScript 會報錯。
// greetESM(123); // 嘗試取消註解此行，TypeScript 會報錯：Argument of type 'number' is not assignable to parameter of type 'string'.
