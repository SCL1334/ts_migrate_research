"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByIds = void 0;
// This function correctly returns an empty array if no products are found.
const getProductsByIds = (ids) => {
    const allProducts = [
        { id: 'p1', name: 'Laptop', price: 1200 },
        { id: 'p2', name: 'Mouse', price: 25 },
    ];
    const found = allProducts.filter(p => ids.includes(p.id));
    return found; // Will be [] if no products match, which is safe.
};
exports.getProductsByIds = getProductsByIds;
