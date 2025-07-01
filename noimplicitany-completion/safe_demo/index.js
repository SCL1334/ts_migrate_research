// 在 tsconfig.json 中設定 "noImplicitAny": true
// 函式 processInput 的參數 input 現在必須有明確的型別。
// 我們將其定義為 string，確保只有字串可以被傳入。
function processInput2(input) {
    console.log("Input processed:", input.toUpperCase());
}
console.log("--- Safe Demo (啟用 noImplicitAny: true) ---");
// 第一次呼叫，傳入字串，正常執行。
console.log("呼叫 processInput('hello world')...");
processInput2("hello world");
// 第二次呼叫，我們試圖傳入一個數字。
// 在編譯時期，TypeScript 就會發現型別不符並報錯。
// 錯誤訊息：Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("\n試圖呼叫 processInput(123)...");
// processInput2(123); // 這行程式碼將無法通過編譯
// 結論：
// 在 'noImplicitAny: true' 的設定下，編譯器在開發階段就強制我們處理了型別問題。
// 這避免了在執行時期才出現的錯誤，大大提高了程式碼的可靠性。
// 這證明了，唯有啟用 noImplicitAny，TypeScript 的型別遷移才算真正完成。
