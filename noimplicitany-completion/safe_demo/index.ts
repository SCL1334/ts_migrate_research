// 為 'data' 參數定義一個 interface，確保型別安全
interface UserData {
  name: string;
}

// 為 'productData' 也定義一個 interface
interface ProductData {
  productName: string;
}

// 現在 processData 函式只接受符合 UserData interface 的物件
function processDataSafe(data: UserData) {
  console.log(data.name.toUpperCase());
}

const userDataSafe: UserData = { name: "Alice" };
// 這個物件的型別是 ProductData，不符合 processDataSafe 的要求
const productDataSafe: ProductData = { productName: "Laptop" };

console.log("--- safe demo: 執行型別安全的程式碼 ---");

processDataSafe(userDataSafe); // 正常執行

// 下面這行程式碼現在會在編譯時就直接報錯，因為型別不符
// processDataSafe(productDataSafe);
// error TS2345: Argument of type 'ProductData' is not assignable to argument of type 'UserData'.
//   Property 'name' is missing in type 'ProductData' but required in type 'UserData'.

console.log("\n現在，型別錯誤在編譯階段就能被發現，提高了程式碼的穩定性。");

// 修正 catch 區塊中的錯誤，明確指定 error 的型別為 unknown
try {
  // 模擬一個可能拋出錯誤的操作
  throw new Error("這是一個測試錯誤");
} catch (error: unknown) {
  // 對 'error' 進行型別檢查，確保它是 Error 的實例
  if (error instanceof Error) {
    console.error("捕獲到一個已知錯誤 (在 safe demo 中):", error.message);
  } else {
    console.error("捕獲到一個未知錯誤 (在 safe demo 中):", error);
  }
}

console.log("\nsafe demo 中的程式碼在 noImplicitAny: true 的情況下可以正常編譯。");