import axios from 'axios';

export const getProfileInfo = () => {
  return axios.get('/profile').then((res) => res.data);
};

export const updateProfileInfo = (profile: FormData) => {
  return axios.put('/member', profile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};