"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderProcessor_1 = require("./orderProcessor");
console.log('--- Running Fully-Typed Example ---');
// Scenario 1: Products are found
(0, orderProcessor_1.processOrder)(['p1', 'p2']);
console.log('\n---');
// Scenario 2: No products are found (safe case)
(0, orderProcessor_1.processOrder)(['p3', 'p4']);
console.log('--- Fully-Typed Example Finished Successfully ---');
