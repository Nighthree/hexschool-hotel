import axios from './index';

export const apiPostUserLogin = (params: LoginInputSchema) => {
  return axios.post('/api/v1/user/login', params);
};

export const apiPostSignup = (params: RegisterInputSchema) => {
  return axios.post('/api/v1/user/signup', params);
};
