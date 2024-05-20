import { atom } from 'recoil';
import { IMapLocation } from '../types/interface';
import { ISearchData } from '../mocks/data/searchData';

export const isAuthState = atom({
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

export const imgUrlsToDeleteState = atom<string[]>({
  key: 'imgUrlsToDelete',
  default: [],
});

export const searchResultState = atom<ISearchData[]>({
  key: 'searchlist',
  default: [],
});

export const searchAddrState = atom<string>({
  key: 'searchAddr',
  default: '',
});

export const clickedLocationState = atom({
  key: 'clickedLocation',
  default: {
    lat: 0,
    lng: 0,
    address: '',
    center: {
      lat: 37.5696765,
      lng: 126.976502,
    },
  },
});
