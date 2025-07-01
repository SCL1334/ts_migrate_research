// 使用緊湊的物件常值語法 (shorthand property names) 和解構賦值 (Destructuring Assignment)。
// 這些特性可以讓物件和陣列的操作更簡潔、更具表達力。

// const name = 'Alice';
// const age = 30;

// 緊湊的物件常值
const person = { name, age };
console.log("Concise object literal:", person);

// 物件解構賦值
const { name: personName, age: personAge } = person;
console.log("Object destructuring:", personName, personAge);

// 陣列解構賦值
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log("Array destructuring:", firstColor, secondColor);
