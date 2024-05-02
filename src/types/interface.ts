export type FormValueTypes = {
  email: string;
  password: string;
  confirmPassword: string;
  nickName: string;
  phoneNumber: number;
  paymentPassword: number;
};

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IMyLocation {
  center: ILocation;
  errMsg: null | string;
  isLoading: boolean;
}
