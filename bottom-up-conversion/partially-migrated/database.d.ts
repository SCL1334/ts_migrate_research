// This declaration file LIES to the TypeScript compiler.
// It claims getProductsByIds will always return a Product array,
// even though the JS implementation can return null.
export interface Product {
  id: string;
  name: string;
  price: number;
}

export function getProductsByIds(ids: string[]): Product[];
