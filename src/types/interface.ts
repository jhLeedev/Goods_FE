export type FormValueTypes = {
  email: string;
  password: string;
  confirmPassword: string;
  nickName: string;
  phoneNumber: number;
  paymentPassword: number;
};

/* profile mock interface */
export interface IProfileData {
  username: string;
  phoneNumber: string;
  profile_image: string;
  star: number;
}

/* profile update mock interface */
export interface IProfileUpdate {
  username: string;
  curPassword: string;
  newPassword: string;
  confirmPassword: string;
  phoneNumber: string;
  profileImageUrl?: string;
  profileImage?: File;
}

export interface IMapLocation {
  lat: number;
  lng: number;
}

export interface IMyLocation {
  center: IMapLocation;
  errMsg: null | string;
  isLoading: boolean;
}

export interface IPointCalc {
  type: string;
  bank?: string;
  account?: number;
  password?: number;
}

export interface ISalesHistoryData {
  goods_name: string;
  price: number;
  goods_thumbnail: string;
  goods_status: string;
  soldBefore: string;
  id: number;
}
export interface IPurchaseHistoryData extends ISalesHistoryData {
  seller_name: string;
}

export interface IRatingModal {
  onCloseModal: () => void;
  onComplete: () => void;
  id: number;
}

export interface IWishHistoryData {
  seller_name: string;
  goods_name: string;
  price: number;
  goods_thumbnail: string;
  goods_status: string;
  uploadBefore: string;
  detail_location: string;
  id: number;
}

export interface ICardListItemProps {
  id: number;
  img: string;
  name: string;
  soldBefore: string;
  uploadBefore: string;
  status: string;
  price: number;
}

export interface IPostCreate {
  goods_name: string;
  price: string;
  description: string;
  goods_images: File[];
  lat: number;
  lng: number;
  detail_location: string;
}
