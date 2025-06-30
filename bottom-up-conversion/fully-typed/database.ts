export interface Product {
  id: string;
  name: string;
  price: number;
}

// This function correctly returns an empty array if no products are found.
export const getProductsByIds = (ids: string[]): Product[] => {
  const allProducts: Product[] = [
    { id: 'p1', name: 'Laptop', price: 1200 },
    { id: 'p2', name: 'Mouse', price: 25 },
  ];
  const found = allProducts.filter(p => ids.includes(p.id));
  return found; // Will be [] if no products match, which is safe.
};
