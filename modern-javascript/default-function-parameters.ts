// 使用預設函式參數 (Default Function Parameters) 來為函式參數提供預設值。
// 這使得函式簽名更清晰，並減少了在函式體內部檢查參數是否為 undefined 的冗餘程式碼。

function calculateTotalPriceTraditional(price, quantity) {
  // 冗餘檢查：手動檢查 quantity 是否為 undefined 或 falsy 值
  // 如果 quantity 沒有提供 (undefined)，或者為 null, 0 等，我們想讓它變成 1
  // 這種寫法可能會讓 0 也被當成 1，需要更嚴謹的檢查如 quantity === undefined ? 1 : quantity
  quantity = quantity || 1; // 簡化寫法，但也可能會有副作用（如 quantity 傳入 0 時也會變成 1）

  // 更嚴謹的檢查方式：
  // if (quantity === undefined) {
  //   quantity = 1;
  // }
  // 或是使用 typeof
  // if (typeof quantity === 'undefined') {
  //   quantity = 1;
  // }

  console.log(`傳統方式：計算價格 ${price} * 數量 ${quantity}`);
  return price * quantity;
}

console.log("--- 傳統函式參數檢查範例 ---");
console.log(
  "單價 100，無數量參數:",
  calculateTotalPriceTraditional(100, undefined)
); // quantity 會是 1
console.log("單價 100，數量 5:", calculateTotalPriceTraditional(100, 5)); // quantity 會是 5
console.log(
  "單價 100，數量 0 (副作用):",
  calculateTotalPriceTraditional(100, 0)
); // 這裡會是 100 * 1，因為 0 被 || 運算子轉成了 false
console.log("\n");

function calculateTotalPriceWithDefaults(price, quantity = 1) {
  // 無需任何額外檢查！如果 quantity 沒有提供或為 undefined，它將自動是 1。
  // 如果 quantity 傳入 0，它會被視為有效值 0。
  console.log(`預設參數：計算價格 ${price} * 數量 ${quantity}`);
  return price * quantity;
}

console.log("--- 預設函式參數範例 ---");
console.log("單價 100，無數量參數:", calculateTotalPriceWithDefaults(100)); // quantity 會是 1
console.log("單價 100，數量 5:", calculateTotalPriceWithDefaults(100, 5)); // quantity 會是 5
console.log("單價 100，數量 0:", calculateTotalPriceWithDefaults(100, 0)); // 這裡會是 100 * 0，正確為 0
console.log("\n");
