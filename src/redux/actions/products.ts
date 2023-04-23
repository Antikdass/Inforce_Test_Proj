import productsApi from '../../api/api';
import { productsAdapter } from '../../apiAdapters/products';
import { FormValuesModel } from '../../components/Forms/TemplateForms/Products';
import { IComments, IProducts } from '../../typings/products';

export enum ActionType {
  SET_PRODUCTS = 'products/SET_PRODUCTS',
  SET_CATEGORIES = 'products/SET_CATEGORIES',
  SET_PRODUCTS_BY_CATEGORY = 'products/SET_PRODUCTS_BY_CATEGORY',
  SET_PRODUCTS_COMMENTS = 'products/SET_PRODUCTS_COMMENTS',
}
export const products = {
  setProducts: (products: IProducts[]) => ({
    type: ActionType.SET_PRODUCTS,
    payload: products,
  }),
  setComments: (comments: IComments[]) => ({
    type: ActionType.SET_PRODUCTS_COMMENTS,
    payload: comments,
  }),

  getProducts: () => async (dispatch: any) => {
    const response = await productsApi.getProducts();
    if (response) {
      dispatch(products.setProducts(productsAdapter.getProducts(response)));
      return response;
    }
  },
  createProduct: (productToCreate: FormValuesModel) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;

    const response = await productsApi.createProduct(productToCreate);
    const updatedComments = productToCreate.comments?.map(item => {
      item.productId = response.id;
      return item;
    });
    if (response) {
      dispatch(products.setProducts([...productsFromStore, { ...productToCreate, id: response.id, comments: updatedComments }]));
      return response;
    }
  },
  deleteProduct: (productId: number) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;
    const updatedProducts = productsFromStore.filter((product: IProducts) => product.id !== productId);
    dispatch(products.setProducts(updatedProducts));
  },

  updateProduct: (productId: number, data: FormValuesModel) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;
    const newProduct = {
      title: data.title,
      brand: data.brand,
      stock: data.stock,
      price: data.price,
      rating: data.rating,
      category: data.category,
      thumbnail: data.thumbnail,
    };
    if (!data.isCreated) {
      const response = await productsApi.updateProduct(productId, newProduct);
      if (response) {
        const updatedProducts = productsFromStore.map((product: IProducts) => (product.id === response.id ? data : product));
        dispatch(products.setProducts(updatedProducts));
      }
    } else {
      const updatedProducts = productsFromStore.map((product: IProducts) => (product.id === data.id ? data : product));
      dispatch(products.setProducts(updatedProducts));
    }
  },
  createComent: (comment: string, productId: number) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;
    const response = productsFromStore.find((item: any) => productId === item.id);
    const newComment = { id: response.comments.length, productId: productId, description: comment, date: new Date() };
    response.comments.push(newComment);
  },
  deleteComment: (commentId: number, productId: number) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;
    const currentProduct = productsFromStore.find((item: any) => productId === item.id);
    const coments = currentProduct.comments.filter((item: any) => commentId !== item.id);
    currentProduct.comments = coments;
    const updatedProducts = productsFromStore.map((product: IProducts) => (product.id === currentProduct.id ? currentProduct : product));
    dispatch(products.setProducts(updatedProducts));
  },
};
