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

export const putResignUser = (password: { password: string }) => {
  return axios.put('/member/resign', password);
};

export const getBadgeInfo = () => {
  return axios.get('/member/badge').then((res) => res.data);
};
