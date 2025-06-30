"use strict";
// commonjs-example.ts
// 這是 CommonJS 模組的範例。
// CommonJS 是 Node.js 環境中廣泛使用的模組化方式，使用 `require` 和 `module.exports`。
// 它是動態的，模組在運行時加載。
Object.defineProperty(exports, "__esModule", { value: true });
function greetCommonJS(name) {
    return `Hello from CommonJS, ${name}!`;
}
const commonjsConstant = "This is a CommonJS constant.";
module.exports = {
    greetCommonJS,
    commonjsConstant
};
// 為了演示，我們在這裡直接執行一個簡單的輸出。
console.log(greetCommonJS('Node.js'));
console.log(commonjsConstant);
