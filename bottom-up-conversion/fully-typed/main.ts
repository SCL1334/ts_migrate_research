import { processOrder } from './orderProcessor';

console.log('--- Running Fully-Typed Example ---');
// Scenario 1: Products are found
processOrder(['p1', 'p2']);

console.log('\n---');

// Scenario 2: No products are found (safe case)
processOrder(['p3', 'p4']);
console.log('--- Fully-Typed Example Finished Successfully ---');
