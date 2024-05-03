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
  sell_badge: boolean;
  manner_badge: boolean;
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

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IMyLocation {
  center: ILocation;
  errMsg: null | string;
  isLoading: boolean;
}
