// commonjs-example.ts
// 這是 CommonJS 模組的範例。
// CommonJS 是 Node.js 環境中廣泛使用的模組化方式，使用 `require` 和 `module.exports`。
// 它是動態的，模組在運行時加載。

function greetCommonJS(name: string): string {
  return `Hello from CommonJS, ${name}!`;
}

const commonjsConstant: string = "This is a CommonJS constant.";

module.exports = {
  greetCommonJS,
  commonjsConstant
};

// 為了演示，我們在這裡直接執行一個簡單的輸出。
console.log(greetCommonJS('Node.js'));
console.log(commonjsConstant);

// 演示型別檢查：如果嘗試傳入錯誤的型別，TypeScript 會報錯。
// commonjsModule.greetCommonJS(true); // 嘗試取消註解此行，TypeScript 會報錯：Argument of type 'boolean' is not assignable to parameter of type 'string'.

// 添加一個空的 export 語句，讓 TypeScript 將此檔案視為模組，以便 import * as 可以正確推斷型別
export {};
