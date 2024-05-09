import { http, HttpResponse } from 'msw';
import { IGoodsData, IProfileData } from '../types/interface';
import { positions } from './positionData';
import { purchaseHistoryData } from './purchaseHistoryData';

/* profile mock data */
export const profileData: IProfileData = {
  username: '홍길동',
  phoneNumber: '010-1234-5678',
  profile_image: 'www.google.com',
  star: 3.5,
};
const badgeData = {
  badge: 'sell',
};
const tokenData = { accessToken: 'accessaccessaccess', refreshToken: 'refreshrefreshrefresh' };

const goodsData: IGoodsData = {
  seller_id: 1,
  profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
  seller_name: '홍길동',
  seller_badge: true,
  manner_badge: false,
  goods_name: '감자 1kg',
  price: 20000,
  description: '선물로 들어왔는데 많아서 내놔요 오늘 배송받았습니다',
  goods_images: [
    'https://health.chosun.com/site/data/img_dir/2023/06/27/2023062702164_0.jpg',
    'https://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg',
    'https://cdn.mkhealth.co.kr/news/photo/202212/61768_65496_2151.jpg',
  ],
  goods_status: '거래 가능',
  like: false,
  uploadedBefore: '2시간 전',
  lat: 37.52633,
  lng: 127.028513,
  detail_location: '압구정역 1번 출구',
};

export const handlers = [
  http.get('/member/profile', () => {
    return HttpResponse.json(profileData);
  }),
  http.get('/member/badge', () => {
    return HttpResponse.json(badgeData);
  }),
  http.post('/auth/kakao', () => {
    return HttpResponse.json(tokenData);
  }),
  http.post('/auth/email', () => HttpResponse.json(1234)),
  http.put('/member/profile', async ({ request }) => {
    const req = await request.formData();
    return HttpResponse.formData(req);
  }),
  http.get(`/location`, () => HttpResponse.json(positions)),
  http.put('/member/resign', async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req);
  }),
  http.get('api/goods/purchase', () => HttpResponse.json(purchaseHistoryData)),
  http.post(`/api/trade/goods/:goodsId/star`, async ({ request }) => {
    const req = await request.json();
    console.log(req);

    return HttpResponse.json(req);
  }),
  http.get('/goods/:goodsId', () => {
    return HttpResponse.json(goodsData);
  }),
  http.put('/goods/:goodsId/state', async ({ request }) => {
    const req = await request.json();
    console.log(req);
    return HttpResponse.json(req);
  }),
];
