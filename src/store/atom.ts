import { atom } from 'recoil';
import { IMapLocation } from '../types/interface';

export const isLoggedInState = atom({
  // 임시 로그인 상태
  key: 'isLoggedIn',
  default: false,
});

export const homeListState = atom<IMapLocation[]>({
  key: 'homeList',
  default: [],
});
