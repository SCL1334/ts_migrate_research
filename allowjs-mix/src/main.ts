// 這是專案的主要入口檔案，它將協調並使用來自不同模組（.ts 和 .js）的功能。

// --- 1. 導入舊的 JavaScript 模組 (js-module.js) ---
// 這個 JS 模組現在沒有 JSDoc，因此 TypeScript 會將其內容推斷為 `any` 型別。
import { multiply, getFullName } from "./js-module";

// --- 2. 導入新的 TypeScript 模組 (ts-module.ts) ---
import { toUpperCase, displayUserProfile } from "./ts-module";

// --- 3. 導入另一個 JavaScript 模組 (another-js-module.js) ---
import { createWelcomeMessage, createUserSummary } from "./another-js-module";

// --- 使用 js-module.js 的功能 (無 JSDoc) ---
console.log("\n[來自 js-module.js (無 JSDoc)]");
console.log("  multiply(7, 8) =", multiply(7, 8));

// **失去型別保護的範例**
// 因為 `multiply` 現在是 `any` 型別，TypeScript 不會對參數型別進行檢查。
// 這在編譯時不會報錯，但在執行時可能會導致非預期的行為或錯誤。
console.log('  multiply("7", "8") =', multiply("7", "8")); // 執行結果會是 NaN

const user = { firstName: "Legacy", lastName: "User" };
console.log("  getFullName(user) =", getFullName(user));

// 同樣地，`getFullName` 的參數 `user` 也是 `any`。
// 傳入一個不完整的物件在編譯時也不會報錯，但在執行時會產生 "undefined"。
const incompleteUser = { firstName: "Anonymous" };
const incompleteName = getFullName(incompleteUser);
console.log("  getFullName(incompleteUser) =", incompleteName); // 執行結果會是 "Anonymousundefined"

// --- 使用 ts-module.ts 的功能 (有型別保護) ---
console.log("\n[來自 ts-module.ts]");
console.log('  toUpperCase("hello ts") =', toUpperCase("hello ts"));
// toUpperCase("hello", "ts"); // Expected 1 arguments, but got 2.

const tsProfile = { username: "ts-user", email: "ts@example.com" };
console.log("  displayUserProfile(tsProfile) =", displayUserProfile(tsProfile));

// --- 使用 another-js-module.js 的功能 ---
console.log("\n[來自 another-js-module.js]");
console.log(
  '  createWelcomeMessage("migrator") =',
  createWelcomeMessage("migrator")
);
console.log("  createUserSummary() =", createUserSummary());

/*
當一個 TypeScript 檔案 (.ts) 從一個純 JavaScript 檔案 (.js) 引用了被推斷為 any 的變數、函式參數或回傳值時，
如果沒有進一步的型別約束，那麼這個 any 型別就會在專案的 TypeScript 程式碼中擴散開來。
*/
