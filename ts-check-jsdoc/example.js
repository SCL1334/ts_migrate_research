// @ts-check
// 這個檔案將展示如何使用 @ts-check 和 JSDoc 在 JavaScript 檔案中實驗 TypeScript。
// 在 JavaScript 檔案的頂部添加 `// @ts-check` 可以啟用 TypeScript 的型別檢查。
// 結合 JSDoc 註解，可以為 JavaScript 程式碼添加型別資訊，讓 TypeScript 檢查器理解。

console.log('\n--- 使用 @ts-check 和 JSDoc 進行型別檢查 ---');

// 1. 基本型別 (Primitive Types)
/**
 * 將兩個數字相加。
 * @param {number} a - 第一個數字。
 * @param {number} b - 第二個數字。
 * @returns {number} 兩個數字的和。
 */
function add(a, b) {
  return a + b;
}

console.log('add(10, 5):', add(10, 5));
// 演示型別錯誤：嘗試傳入非數字型別
// add(10, "5"); // TypeScript 會在這裡發出警告：Argument of type 'string' is not assignable to parameter of type 'number'.

/**
 * 取得問候語。
 * @param {string} name - 姓名。
 * @returns {string} 問候語。
 */
function greet(name) {
  return `Hello, ${name}!`;
}

console.log('greet("Alice"):', greet("Alice"));
// 演示型別錯誤：嘗試傳入非字串型別
// greet(123); // TypeScript 會在這裡發出警告：Argument of type 'number' is not assignable to parameter of type 'string'.

// 2. 陣列型別 (Array Types)
/**
 * 計算數字陣列的總和。
 * @param {number[]} numbers - 數字陣列。
 * @returns {number} 陣列中所有數字的總和。
 */
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log('sumArray([1, 2, 3]):', sumArray([1, 2, 3]));
// 演示型別錯誤：嘗試傳入包含非數字元素的陣列
// sumArray([1, 'a', 3]); // TypeScript 會在這裡發出警告：Type 'string' is not assignable to type 'number'.

// 3. 物件型別 (Object Types) - 使用 @typedef
/**
 * @typedef {object} User
 * @property {number} id - 用戶 ID。
 * @property {string} name - 用戶姓名。
 * @property {boolean} isActive - 用戶是否活躍。
 */

/**
 * 顯示用戶資訊。
 * @param {User} user - 用戶物件。
 */
function displayUser(user) {
  console.log(`User ID: ${user.id}, Name: ${user.name}, Active: ${user.isActive}`);
}

const user1 = { id: 1, name: 'Bob', isActive: true };
displayUser(user1);

// 演示型別錯誤：缺少必要屬性或屬性型別不符
const user2 = { id: 2, name: 'Charlie' }; // TypeScript 會在這裡發出警告：Property 'isActive' is missing in type '{ id: number; name: string; }' but required in type 'User'.
// displayUser(user2);

// const user3 = { id: 3, name: 'David', isActive: 'yes' }; // TypeScript 會在這裡發出警告：Type 'string' is not assignable to type 'boolean'.
// displayUser(user3);

// 4. 回呼函數型別 (Callback Function Types)
/**
 * @callback MathOperation
 * @param {number} x - 第一個操作數。
 * @param {number} y - 第二個操作數。
 * @returns {number} 操作結果。
 */

/**
 * 執行數學運算。
 * @param {number} num1 - 第一個數字。
 * @param {number} num2 - 第二個數字。
 * @param {MathOperation} operation - 要執行的運算函數。
 * @returns {number} 運算結果。
 */
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

/**
 * @param {number} a
 * @param {number} b
 */
const multiply = (a, b) => a * b;
console.log('calculate(6, 7, multiply):', calculate(6, 7, multiply));

// 演示型別錯誤：回呼函數簽名不符
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
const invalidOperation = (a, b, c) => a + b + c; // TypeScript 會在這裡發出警告：Type '(a: number, b: number, c: number) => number' is not assignable to type 'MathOperation'.
// calculate(1, 2, invalidOperation); // 參數數量不符

// --- 總結 ---
// 透過在 JavaScript 檔案中使用 `// @ts-check` 和 JSDoc 註解，您可以逐步為現有的 JavaScript 程式碼添加型別資訊。
// 這使得 TypeScript 能夠在不將檔案完全轉換為 .ts 的情況下，提供有價值的型別檢查和編輯器支援。
// 這是遷移到 TypeScript 的一個非常實用且低風險的起點。
