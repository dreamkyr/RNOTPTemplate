import axios from 'axios';
import {getAuthToken} from '../services/localStorageService';

axios.defaults.baseURL = 'http://192.168.0.41:5000/optdemo';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
