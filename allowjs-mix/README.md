# 混合使用 TypeScript 與 JavaScript 專案範例 (進階版)

這個專案展示了一個更真實的場景：在一個逐步從 JavaScript 遷移到 TypeScript 的專案中，不同語言的模組之間如何互相依賴，並特別模擬了當 TypeScript 遇到**沒有型別定義的舊 JS 程式碼**時的情況。

## 專案結構

```
.
├── src
│   ├── another-js-module.js  (JS 模組，有 JSDoc)
│   ├── js-module.js          (純 JS 模組，**無 JSDoc**)
│   ├── main.ts               (專案主入口，TS 格式)
│   └── ts-module.ts          (新的 TS 模組)
├── dist/                     (編譯後輸出的資料夾)
├── package.json
└── tsconfig.json
```

## 核心概念：失去型別保護

這個範例的關鍵在於 `src/js-module.js`。我們**故意移除了它的 JSDoc 註解**。

-   **當有 JSDoc 時**：TypeScript 可以讀取註解，為從 JS 匯入的函式提供準確的型別資訊和檢查。
-   **當沒有 JSDoc 時**：TypeScript 無法推斷��體的型別，因此會將所有來自 `js-module.js` 的匯入（如 `multiply`, `getFullName`）視為 `any` 型別。

`any` 型別會**關閉 TypeScript 的所有型別檢查**，這意味著：
1.  你可以傳入任何型別的參數給這些函式。
2.  你可以用不存在的屬性或方法。
3.  編譯器不會報錯，但這些問題可能會在執行時期導致 `NaN`、`undefined` 或程式崩潰。

`src/main.ts` 中包含了展示這種「失去型別保護」的範例程式碼。

## 如何執行

1.  **安裝 TypeScript** (如果尚未安裝):
    ```bash
    npm install -g typescript
    ```

2.  **編譯專案**:
    執行 `tsc`。注意，即使 `main.ts` 中有明顯的型別錯誤（例如將字串傳給 `multiply`），編譯也會成功，因為 `multiply` 的型別被視為 `any`。
    ```bash
    tsc
    ```

3.  **執行程式**:
    執行編譯後的程式碼，並觀察輸出結果。
    ```bash
    node dist/main.js
    ```
    你會看到 `multiply("7", "8")` 的結果是 `NaN`，而 `getFullName` 對不完整的 user 物件的處理結果是 `Anonymous undefined`。這清楚地顯示了在執行��段才會暴露出來的、因缺乏型別資訊而導致的問題。

這個範例凸顯了為舊有 JavaScript 程式碼補充 JSDoc 或將其遷移到 TypeScript 的重要性，以確保整個專案的型別安全。
