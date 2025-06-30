// 這個函式沒有明確定義 'data' 的型別
// 在 noImplicitAny: true 的情況下，這裡會報錯
function processDataImplicitAny(data: { name: string }) {
  console.log(data.name.toUpperCase());
}

// 這個物件的型別沒有明確定義
const userDataImplicit = { name: "Alice" };

// 這個物件的型別也沒有明確定義，且屬性名稱與 processDataImplicitAny 預期的不同
const productDataImplicit = { productName: "Laptop" };

console.log("--- risk demo: 執行可能導致隱含 Any 型別的程式碼 ---");

// 這行程式碼在 noImplicitAny: true 時，TypeScript 會因為 data 參數的隱含 any 型別而報錯。
// processDataImplicitAny(userDataImplicit);

// 即使修正了上面的錯誤，這裡也可能導致執行時錯誤，因為 productDataImplicit 沒有 'name' 屬性
// processDataImplicitAny(productDataImplicit);

try {
  // 模擬一個可能拋出錯誤的操作，catch 區塊的 error 參數沒有明確型別
  // 在 noImplicitAny: true 的情況下，這裡會報錯
  throw new Error("這是一個隱含 any 型別的測試錯誤");
} catch (error) {
  // TypeScript 錯誤：Parameter 'error' implicitly has an 'any' type.
  console.error("捕獲到一個未知錯誤:", error.message);
  // 需要進行型別檢查，如下所示：
//   if (error instanceof Error) {
//     console.error("捕獲到已知錯誤 (在 risk demo 中):", error.message);
//   } else {
//     console.error("捕獲到未知錯誤 (在 risk demo 中):", error);
//   }
}

console.log("\n在 noImplicitAny: true 的情況下，risk demo 中的程式碼在編譯時會報錯。");
console.log("你需要為 'processDataImplicitAny' 的 'data' 參數和 'catch' 區塊的 'error' 參數提供明確的型別。");