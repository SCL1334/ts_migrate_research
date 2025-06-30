// 優先使用箭頭函式 (Arrow Functions) 取代傳統的函式表達式 (Function Expressions)。
// 箭頭函式語法更簡潔，並且沒有自己的 `this` 綁定，這解決了傳統函式中 `this` 上下文的常見問題。


const add = (a, b) => a + b;
console.log('Arrow function add(2, 3):', add(2, 3));

class MyClassProblematic {
  constructor() {
    this.value = 10;
    console.log('MyClassProblematic instance created. Value:', this.value);

    // 這裡的問題是：
    // 當 setTimeout 的回呼函式執行時，它是一個獨立的函式呼叫。
    // 它的 `this` 不再是 MyClassProblematic 的實例，
    // 而是變成全域物件 (window) 或 undefined (在嚴格模式下)。
    setTimeout(function() {
      console.log('Inside setTimeout (problematic traditional function): this.value =', this.value);
    }, 100);
  }
}

new MyClassProblematic();

class MyClass {
  constructor() {
    this.value = 20;
    console.log('MyClass instance created. Value:', this.value);
    setTimeout(() => {
      console.log('Inside setTimeout (arrow function): this.value =', this.value); // 箭頭函式保留了外部的 this
    }, 200);
  }
}

new MyClass();

