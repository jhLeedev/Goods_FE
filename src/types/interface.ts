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
