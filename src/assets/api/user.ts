import axios from './index';
import { UsersProps } from '@/assets/types';

export const apiPostSignup = (params: UsersProps) => {
  return axios.post('/api/v1/user/signup', params);
};
