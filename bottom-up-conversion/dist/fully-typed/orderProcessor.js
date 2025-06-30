"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOrder = void 0;
const database_1 = require("./database");
const processOrder = (productIds) => {
    console.log('Processing order...');
    const products = (0, database_1.getProductsByIds)(productIds);
    // This is safe because getProductsByIds always returns an array.
    // If the array is empty, reduce will return the initial value of 0.
    const total = products.reduce((sum, product) => sum + product.price, 0);
    console.log('Order total:', total);
    return total;
};
exports.processOrder = processOrder;
