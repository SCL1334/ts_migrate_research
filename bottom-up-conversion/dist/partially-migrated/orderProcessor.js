"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOrder = void 0;
const database_1 = require("./database");
const processOrder = (productIds) => {
    console.log('Processing order...');
    const products = (0, database_1.getProductsByIds)(productIds);
    // THIS LINE WILL CRASH!
    // The compiler thinks `products` is always an array based on the .d.ts file.
    // But when `database.js` returns null, calling .reduce on null throws a TypeError.
    const total = products.reduce((sum, product) => sum + product.price, 0);
    console.log('Order total:', total);
    return total;
};
exports.processOrder = processOrder;
