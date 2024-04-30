import axios from 'axios';
import { FormValueTypes } from '../types/interface';

export const getProfileInfo = () => {
  return axios.get('/profile').then((res) => res.data);
};

export const updateProfileInfo = (profile: FormValueTypes) => {
  return axios.put('/member', profile);
};
