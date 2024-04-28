import { atom } from 'recoil';

export const testState = atom({
  key: 'test',
  default: 'ok',
});

export const isLoggedInState = atom({
  // 임시 로그인 상태
  key: 'isLoggedIn',
  default: false,
});
