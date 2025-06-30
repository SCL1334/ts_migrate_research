// let-const-over-var.js
// 優先使用 `let` 和 `const` 來宣告變數，取代 `var`。
// `let` 提供了區塊作用域，避免了 `var` 的變數提升 (hoisting) 問題。
// `const` 用於宣告常數，一旦賦值後不能再重新賦值，有助於程式碼的穩定性。

function example() {
  if (true) {
    let x = 10; // 區塊作用域
    const Y = 20; // 常數，不可重新賦值
    console.log('let/const example:', x, Y);
  }
  // console.log(x); // 這裡會報錯，x 不可見
}
example();
