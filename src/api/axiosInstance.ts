import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

type ConfigModel = AxiosRequestConfig;

const instance = axios.create({
  timeout: 20000,
});

interface APIModel {
  get<T = any, R = AxiosResponse<T>>(endpointKey: string, config?: ConfigModel | null): Promise<R>;

  post<T = any, R = AxiosResponse<T>>(endpointKey: string, data?: any, config?: ConfigModel | null): Promise<R>;

  put<T = any, R = AxiosResponse<T>>(endpointKey: string, data?: any, config?: ConfigModel | null): Promise<R>;

  delete<T = any, R = AxiosResponse<T>>(endpointKey: string, config?: ConfigModel | null): Promise<R>;

  patch<T = any, R = AxiosResponse<T>>(endpointKey: string, data?: any, config?: ConfigModel | null): Promise<R>;
}

// ** Main API instance for all requests **
export const APIService: APIModel = {
  get(path, config) {
    return instance.get(path, config || undefined);
  },

  post(path, data, config) {
    return instance.post(path, data, config || undefined);
  },

  put(path, data, config) {
    return instance.put(path, data, config || undefined);
  },

  delete(path, config) {
    return instance.delete(path, config || undefined);
  },

  patch(path, data, config) {
    return instance.patch(path, data, config || undefined);
  },
};
export default instance;
