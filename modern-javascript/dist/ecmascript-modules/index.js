"use strict";
// index.ts - 模組範例的入口檔案
// 這個檔案將統一執行 ECMAScript 模組和 CommonJS 模組的範例，
// 並透過 TypeScript 的型別系統來展示它們的特性和優勢。
Object.defineProperty(exports, "__esModule", { value: true });
// --- ECMAScript 模組 (ESM) 範例 ---
// ESM 是現代 JavaScript 推薦的模組化方式，使用 `import` 和 `export` 關鍵字。
// 優勢：
// 1. 靜態分析：模組的依賴關係在編譯時就確定，有助於工具鏈（如 TypeScript、Webpack）進行優化（如 Tree Shaking）。
// 2. 更好的型別檢查：TypeScript 可以對 ESM 模組進行更徹底的靜態型別檢查，因為它知道模組的匯入和匯出結構。
// 3. 語法簡潔：`import` 和 `export` 語法更直觀。
// 4. 瀏覽器原生支援：現代瀏覽器原生支援 ESM。
const es_modules_example_1 = require("./es-modules-example");
console.log('\n--- Running ES Modules Example (TypeScript with Static Analysis) ---');
console.log((0, es_modules_example_1.greetESM)('TypeScript World'));
console.log(es_modules_example_1.esmConstant);
// 演示 TypeScript 的靜態型別檢查：
// 如果您嘗試傳入錯誤的型別，TypeScript 會在編譯時報錯，而不是等到運行時。
// 例如，取消註解下面這行，然後執行 `npm run build`，您會看到型別錯誤：
// greetESM(123); // Argument of type 'number' is not assignable to parameter of type 'string'.
// --- CommonJS 模組範例 ---
// CommonJS 是 Node.js 環境中廣泛使用的模組化方式，使用 `require` 和 `module.exports`。
// 優勢：
// 1. 動態載入：模組在運行時載入，可以在條件語句中動態引入。
// 2. Node.js 生態系統：Node.js 中有大量的 CommonJS 模組。
// 3. 簡單直接：語法相對簡單。
// 注意：在 TypeScript 中，CommonJS 模組也可以被型別檢查，但由於其動態性，
// 某些運行時行為可能無法在編譯時完全捕捉。
const commonjsModule = require('./commonjs-example');
console.log('\n--- Running CommonJS Modules Example (TypeScript with Dynamic Loading) ---');
console.log(commonjsModule.greetCommonJS('Node.js Environment'));
console.log(commonjsModule.commonjsConstant);
// 演示 TypeScript 的型別檢查：
commonjsModule.greetCommonJS(true);
// --- 總結 ---
// 遷移到 TypeScript 時，優先使用 ECMAScript 模組 (ESM) 可以最大化 TypeScript 的靜態分析優勢，
// 提高程式碼的可維護性和可靠性。然而，在過渡期間，CommonJS 模組仍然是與現有 Node.js 程式碼庫
// 互動的重要方式。TypeScript 能夠同時支援這兩種模組系統，為您提供靈活的遷移路徑。
