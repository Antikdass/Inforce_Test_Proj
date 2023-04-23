import { APIService } from './axiosInstance';
import { apiConfig } from '../config/apiConfig';

const productsApi = {
  getProducts: () => {
    return APIService.get(`${apiConfig}`).then(({ data }) => data);
  },
  createProduct: (data: any) => {
    return APIService.post(`${apiConfig}/add`, data).then(({ data }) => data);
  },
  deleteProduct: (productId: number) => {
    return APIService.delete(`${apiConfig}/${productId}`).then(({ data }) => data);
  },
  updateProduct: (productId: number, product: any) => {
    return APIService.put(`${apiConfig}/${productId}`, product).then(({ data }) => data);
  },
};

export default productsApi;
