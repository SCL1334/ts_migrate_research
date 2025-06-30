"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderProcessor_1 = require("./orderProcessor");
console.log('--- Running Partially-Migrated Example ---');
// Scenario 1: Products are found (this will work)
(0, orderProcessor_1.processOrder)(['p1', 'p2']);
console.log('\n---');
// Scenario 2: No products are found (this will crash)
try {
    (0, orderProcessor_1.processOrder)(['p3', 'p4']);
}
catch (error) {
    console.error('CRASH DETECTED:', error.message);
}
console.log('--- Partially-Migrated Example Finished ---');
