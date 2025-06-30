// no-strict-in-typescript.ts
// 這個檔案將解釋為什麼在 TypeScript 中通常不需要手動添加 'use strict';。
// TypeScript 編譯器會根據您的配置自動處理嚴格模式。

// --- 1. 模組化的程式碼 (推薦方式) ---
// 任何包含 `import` 或 `export` 語句的 TypeScript 檔案都會被視為一個模組。
// 當 TypeScript 編譯器將模組編譯成 JavaScript 時，它會自動在生成的 JavaScript 檔案頂部添加 'use strict';。
// 這意味著您不需要手動在 .ts 檔案中寫入它。

// 範例：這是一個模組，因為它有 export 語句。
export function add(a: number, b: number): number {
  // 在這裡，即使沒有 'use strict';，編譯後的 JS 檔案也會有嚴格模式。
  // 嘗試在嚴格模式下不允許的操作，TypeScript 會在編譯時報錯。
  // 例如，嘗試修改一個不可寫的屬性 (在嚴格模式下會拋出 TypeError)：
  // const obj = {};
  // Object.defineProperty(obj, 'x', { value: 10, writable: false });
  // obj.x = 20; // 嘗試取消註���此行，TypeScript 會報錯：Cannot assign to 'x' because it is a read-only property.

  return a + b;
}

console.log('Module function add(3, 4):', add(3, 4));

// --- 2. 非模組化的程式碼 (較少見於現代 TypeScript 專案) ---
// 如果一個 .ts 檔案不包含任何 `import` 或 `export` 語句，它會被視為一個全局腳本。
// 在這種情況下，TypeScript 是否在生成的 JavaScript 檔案中添加 'use strict';
// 取決於您的 `tsconfig.json` 中的 `compilerOptions.target` 設定。
// 如果 `target` 設定為 ES5 或更高版本，TypeScript 通常會自動添加。

// 範例：這是一個非模組化的函數 (假設此檔案沒有 import/export)
function subtract(a: number, b: number): number {
  // 在這裡，如果 target 是 ES5+，編譯後的 JS 檔案也會有嚴格模式。
  // 嘗試在嚴格模式下不允許的操作 (例如，在非嚴格模式下會創建全局變數，但在嚴格模式下會報錯)：
  // undeclaredVariable = 10; // 嘗試取消註解此行，TypeScript 會報錯：Cannot find name 'undeclaredVariable'.
  // 這也證明了 TypeScript 的型別檢查已經提供了更強的保護，即使沒有 'use strict';。
  return a - b;
}

console.log('Non-module function subtract(10, 5):', subtract(10, 5));

// --- 總結 ---
// 由於 TypeScript 編譯器會自動處理嚴格模式，並且其強大的型別系統已經在編譯時捕捉了許多
// 嚴格模式旨在防止的錯誤，因此在 TypeScript 程式碼中手動添加 'use strict'; 通常是多餘的。
// 專注於編寫型別安全的程式碼，讓 TypeScript 處理底層的 JavaScript 嚴格模式細節。