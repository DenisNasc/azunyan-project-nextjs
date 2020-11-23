import axios, {AxiosRequestConfig} from 'axios';

const createAxiosInstance = (headers: AxiosRequestConfig['headers'] = {}) => {
  const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers,
  };

  return axios.create(config);
};

export default createAxiosInstance;
