import { getProductsByIds } from "./database";

export const processOrder = (productIds: string[]): number => {
  console.log("Processing order...");
  const products = getProductsByIds(productIds);

  // THIS LINE WILL CRASH!
  // The compiler thinks `products` is always an array based on the .d.ts file.
  // But when `database.js` returns null, calling .reduce on null throws a TypeError.
  const total = products.reduce((sum, product) => sum + product.price, 0);

  console.log("Order total:", total);
  return total;
};
