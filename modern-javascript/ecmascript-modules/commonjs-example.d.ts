// commonjs-example.d.ts
// 這是 CommonJS 模組 './commonjs-example.ts' 的型別宣告檔案。
// 它明確定義了該模組的匯出結構，以便 TypeScript 能夠進行嚴格的型別檢查。

declare module "./commonjs-example" {
  interface ICommonJSModuleExports {
    greetCommonJS: (name: string) => string;
    commonjsConstant: string;
  }
  const _default: ICommonJSModuleExports;
  export = _default;
}
