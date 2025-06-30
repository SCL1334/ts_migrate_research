"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByIds = void 0;
// This is the problematic JS file.
// It returns null instead of an empty array when products are not found.
const allProducts = [
    { id: 'p1', name: 'Laptop', price: 1200 },
    { id: 'p2', name: 'Mouse', price: 25 },
];
const getProductsByIds = (ids) => {
    const found = allProducts.filter(p => ids.includes(p.id));
    // If the array is empty, it returns null, which will cause a crash.
    return found.length > 0 ? found : null;
};
exports.getProductsByIds = getProductsByIds;
