// for-of-array-methods.ts
// 示範傳統 for 迴圈、for...of 迴圈和陣列方法在 TypeScript 型別推斷上的差異。
// 範例 1: 數字陣列
const numbers = [1, 2, 3, 4, 5];
console.log('\n--- 傳統 for 迴圈 (Type Inference with Primitive Types) ---');
// 傳統 for 迴圈：
// TypeScript 能夠推斷出 numbers[i] 的型別為 number。
// 但在複雜情況下，可能需要手動檢查索引範圍或進行型別斷言。
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]; // TypeScript 推斷: num: number
    console.log(`Index: ${i}, Value: ${num}, Type: ${typeof num}`);
    // 故意製造一個型別錯誤來演示：
    // const invalidNum: string = numbers[i]; // 錯誤: Type 'number' is not assignable to type 'string'.
}
console.log('\n--- for...of 迴圈 (Type Inference with Primitive Types) ---');
// for...of 迴圈：
// TypeScript 能夠直接且精確地推斷出迭代變數 (num) 的型別為陣列元素的型別 (number)。
// 語法更簡潔，且自動處理迭代，減少錯誤。
for (const num of numbers) {
    // TypeScript 推斷: num: number
    console.log(`Value: ${num}, Type: ${typeof num}`);
    // 故意製造一個型別錯誤來演示：
    // const invalidNum: string = num; // 錯誤: Type 'number' is not assignable to type 'string'.
}
console.log('\n--- 陣列方法 (map, filter) (Type Inference with Primitive Types) ---');
// 陣列方法 (如 map, filter)：
// 這些高階函數在處理陣列時，TypeScript 能夠非常精確地推斷出回呼函數參數和返回值的型別，
// 以及最終新陣列的型別。這使得程式碼更具型別安全性且易於理解。
// map 方法：將每個數字乘以 2
const doubledNumbers = numbers.map((num) => {
    // TypeScript 推斷: num: number
    return num * 2;
});
// TypeScript 推斷: doubledNumbers: number[]
console.log('Doubled numbers:', doubledNumbers, ', Inferred Type:', typeof doubledNumbers, ', Element Type:', typeof doubledNumbers[0]);
// filter 方法：篩選出偶數
const evenNumbers = numbers.filter((num) => {
    // TypeScript 推斷: num: number
    return num % 2 === 0;
});
// TypeScript 推斷: evenNumbers: number[]
console.log('Even numbers:', evenNumbers, ', Inferred Type:', typeof evenNumbers, ', Element Type:', typeof evenNumbers[0]);
const users = [
    { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Charlie', isActive: true },
];
console.log('\n--- 傳統 for 迴圈 (Type Inference with Object Types) ---');
for (let i = 0; i < users.length; i++) {
    const user = users[i]; // TypeScript 推斷: user: User
    console.log(`User ID: ${user.id}, Name: ${user.name}`);
    // 故意製造一個型別錯誤來演示：
    // user.age = 30; // 錯誤: Property 'age' does not exist on type 'User'.
}
console.log('\n--- for...of 迴圈 (Type Inference with Object Types) ---');
for (const user of users) {
    // TypeScript 推斷: user: User
    console.log(`User ID: ${user.id}, Name: ${user.name}`);
    // 故意製造一個型別錯誤來演示：
    // user.email = 'test@example.com'; // 錯誤: Property 'email' does not exist on type 'User'.
}
console.log('\n--- 陣列方�� (map, filter, find) (Type Inference with Object Types) ---');
// 陣列方法在處理物件陣列時，其型別推斷能力尤為突出，能確保鏈式操作的型別安全。
// filter 方法：篩選出活躍用戶
const activeUsers = users.filter(user => {
    // TypeScript 推斷: user: User
    return user.isActive;
});
// TypeScript 推斷: activeUsers: User[]
console.log('Active Users:', activeUsers);
// map 方法：提取用戶名稱
const userNames = users.map(user => {
    // TypeScript 推斷: user: User
    return user.name;
});
// TypeScript 推斷: userNames: string[]
console.log('User Names:', userNames);
// find 方法：查找特定 ID 的用戶
const userWithId2 = users.find(user => {
    // TypeScript 推斷: user: User
    return user.id === 2;
});
// TypeScript 推斷: userWithId2: User | undefined
console.log('User with ID 2:', userWithId2);
// 鏈式操作的型別安全性：
// TypeScript 能夠在整個鏈式操作中保持型別資訊，確保每一步的輸出型別都與下一步的輸入型別兼容。
const activeUserNames = users
    .filter(user => user.isActive) // TypeScript 推斷: filter 返回 User[]
    .map(user => user.name); // TypeScript 推斷: map 返回 string[]
// TypeScript 推斷: activeUserNames: string[]
console.log('Active User Names (chained):', activeUserNames);
// 故意製造一個型別錯誤來演示鏈式操作的型別檢查：
// const invalidChained: number[] = users
//   .filter(user => user.isActive)
//   .map(user => user.name); // 錯誤: Type 'string[]' is not assignable to type 'number[]'.
// --- 新增範例：陣列轉換的型別推斷比較 ---
console.log('\n--- 陣列轉換的型別推斷比較 ---');
const numbersToStrings = [10, 20, 30];
// 傳統 for 迴圈進行轉換：
// 需要手動宣告結果陣列的型別，否則 TypeScript 會推斷為 any[] 或 (string | number)[] 等較寬鬆的型別。
const stringsFromForLoop = []; // 必須明確指定型別
for (let i = 0; i < numbersToStrings.length; i++) {
    const num = numbersToStrings[i]; // TypeScript 推斷: num: number
    stringsFromForLoop.push(String(num)); // TypeScript 檢查 push 的元素型別
}
console.log('Strings from for loop:', stringsFromForLoop, ', Inferred Type:', typeof stringsFromForLoop, ', Element Type:', typeof stringsFromForLoop[0]);
// 故意製造一個型別錯誤來演示：
// stringsFromForLoop.push(123); // 錯誤: Argument of type 'number' is not assignable to parameter of type 'string'.
// 使用 map 方法進行轉換：
// TypeScript 能夠自動且精確地推斷出結果陣列的型別。
const stringsFromMap = numbersToStrings.map(num => {
    // TypeScript 推斷: num: number
    return String(num); // 返回 string
});
// TypeScript 推斷: stringsFromMap: string[] (自動推斷)
console.log('Strings from map:', stringsFromMap, ', Inferred Type:', typeof stringsFromMap, ', Element Type:', typeof stringsFromMap[0]);
// 故意製造一個型別錯誤來演示：
// const invalidStringsFromMap: number[] = numbersToStrings.map(num => String(num)); // 錯誤: Type 'string[]' is not assignable to type 'number[]'.
// --- 總結 (更新) ---
// 透過這些範例，可以看到 for...of 迴圈和陣列方法在 TypeScript 中提供了更優越的型別推斷能力。
// 特別是對於物件陣列和鏈式操作，以及陣列轉換的場景，它們能夠自動推斷出複雜的型別，
// 減少手動型別註解的需求，並在編譯時捕捉潛在的型別錯誤，從而提高程式碼的可靠性和開發效率。
// 傳統 for 迴圈雖然在某些簡單遍歷場景下仍可使用，但在需要轉換或複雜操作時，
// 其在型別推斷的自動化和程式碼簡潔性方面明顯不如陣列方法。
