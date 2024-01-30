import axios from 'axios';

const instance = axios.create();
instance.defaults.timeout = 25 * 1000;

// 請求攔截
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// 回應攔截
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const Error = error;
    Error.msg = error.message.includes('timeout') ? '請求超時' : '服務失敗';
    return Promise.reject(Error);
  },
);

export default instance;

export * from './user';
