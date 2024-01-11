import axios from './index';
import { UserDetailsProps } from '@/assets/types';

export const apiPostSignup = (params: UserDetailsProps) => {
  return axios.post('/api/v1/user/signup', params);
};
