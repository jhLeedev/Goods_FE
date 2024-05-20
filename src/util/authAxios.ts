/* eslint-disable no-param-reassign */
import axios, { AxiosError } from 'axios';

const client = axios.create({ baseURL: '/api' });

client.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (res) => {
    if (res.status === 404) {
      window.location.href = 'http://localhost:5173/notFound'; // 배포 후 => 배포주소/notFound
    }
    return res;
  },
  async (err) => {
    if (err instanceof AxiosError) {
      if (err.response?.status === 401) {
        // refresh
        // error.config.headers = {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${accessToken}`,
        //   };
        //   const response = await axios.request(error.config);
        //   return response;
      }
    }
    return Promise.reject(err);
  },
);
export default client;
