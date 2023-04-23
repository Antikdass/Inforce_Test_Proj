export const productsAdapter = {
  getProducts: (products: any) => {
    return products.products.map((item: any) => ({ ...item, comments: [], weight: '', size: { width: '', height: '' } }));
  },
};
