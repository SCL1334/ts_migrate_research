// 使用 ES6 的 class 語法來定義物件的藍圖，取代傳統的原型傳承模式。
// class 語法更具可讀性，且與 TypeScript 的類別定義方式一致。

// 步驟 1: 定義 Animal 建構函式
function Animal(name) {
  // 實例屬性：每個實例都有自己的 name
  this.name = name;
  console.log(`傳統原型: Animal ${this.name} created.`);
}

// 步驟 2: 將共享方法添加到 Animal 的原型上
// 這些方法將被所有 Animal 實例共享
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

// 測試 Animal
const animal = new Animal('Leo');
animal.speak(); // 輸出: Leo makes a noise.

// 步驟 3: 定義 Dog 建構函式
function Dog(name, breed) {
  // 繼承 Animal 的屬性
  // 呼叫 Animal 建構函式，並將當前的 this (Dog 的實例) 綁定給它
  Animal.call(this, name); // 等同於 class 中的 super(name);
  this.breed = breed; // Dog 自己的屬性
  console.log(`傳統原型: Dog ${this.name} (${this.breed}) created.`);
}

// 步驟 4: 繼承 Animal 的方法 (核心步驟)
// 讓 Dog 的原型物件繼承自 Animal 的原型物件
// Object.create() 建立一個新物件，並將其原型指向 Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// 修正建構函式指標
// 因為上一步驟 Dog.prototype 被重新賦值了，constructor 會指向 Animal
// 所以需要手動將其指回 Dog
Dog.prototype.constructor = Dog;

// 步驟 5: 為 Dog 添加自己的方法 (覆寫或新增)
Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

Dog.prototype.fetch = function() {
  console.log(`${this.name} fetches the ball!`);
};

// --- 測試繼承 ---
console.log('--- 傳統原型繼承範例 ---');
const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // 輸出: Buddy barks. (Dog 自己的 speak 方法)
dog.fetch(); // 輸出: Buddy fetches the ball!

// 驗證原型鏈
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog('Buddy');
// dog.speak();
