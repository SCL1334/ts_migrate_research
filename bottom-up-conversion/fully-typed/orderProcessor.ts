import { getProductsByIds } from './database';

export const processOrder = (productIds: string[]): number => {
  console.log('Processing order...');
  const products = getProductsByIds(productIds);

  // This is safe because getProductsByIds always returns an array.
  // If the array is empty, reduce will return the initial value of 0.
  const total = products.reduce((sum, product) => sum + product.price, 0);

  console.log('Order total:', total);
  return total;
};
