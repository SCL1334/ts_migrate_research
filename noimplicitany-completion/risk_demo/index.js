// 假設在 tsconfig.json 中設定 "noImplicitAny": false
// 函式 processInput 的參數 input 沒有型別定義，
// TypeScript 會隱含地將其視為 'any' 型別。
function processInput1(input) {
    // 我們假設 input 是一個字串，並呼叫 toUpperCase() 方法。
    console.log('Input processed:', input.toUpperCase());
}
console.log("--- Risk Demo (模擬 noImplicitAny: false) ---");
// 第一次呼叫，傳入字串，正常執行。
console.log("1. 呼叫 processInput('hello world')...");
processInput1("hello world");
// 第二次呼叫，我們故意傳入一個數字。
// 在編譯時期，因為 input 是 'any' 型別，TypeScript 不會對此提出警告。
// 但在執行時期，數字沒有 toUpperCase() 方法，這將會導致 TypeError。
console.log("\n2. 呼叫 processInput(123)...");
try {
    processInput1(123);
}
catch (e) {
    console.error("❌ 執行時發生錯誤:", e.message);
}
console.log("\n結論：");
console.log("在 'noImplicitAny: false' 的設定下，編譯器放行了這個潛在的執行時錯誤。");
console.log("這給人一種虛假的安全感，以為程式碼沒有問題，但風險依然存在。");
