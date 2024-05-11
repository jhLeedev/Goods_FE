export const kakaoSigninLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_REST_API_KEY
}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

export const MAXFILECOUNT = 10;
