import { atom } from 'recoil';
import { IMapLocation } from '../types/interface';
import { ISearchData } from '../mocks/data/searchData';

export const isLoggedInState = atom({
  // 임시 로그인 상태
  key: 'isLoggedIn',
  default: false,
});

export const homeListState = atom<IMapLocation[]>({
  key: 'homeList',
  default: [],
});

export const imgFilesState = atom<File[]>({
  key: 'imgFiles',
  default: [],
});

export const imgUrlListState = atom<string[]>({
  key: 'imgUrlList',
  default: [],
});

export const searchResultState = atom<ISearchData[]>({
  key: 'searchlist',
  default: [],
});
