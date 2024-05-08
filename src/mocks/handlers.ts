import { http, HttpResponse } from 'msw';
import { IProfileData, IWishHistoryData } from '../types/interface';
import { positions } from './data/positionData';
import { purchaseHistoryData } from './data/purchaseHistoryData';
import { salesHistoryData } from './data/salesHistoryData';
// import { wishHistoryData } from './data/wishHistoryData';

/* profile mock data */
export const profileData: IProfileData = {
  username: '홍길동',
  phoneNumber: '010-1234-5678',
  profile_image: 'www.google.com',
  star: 3.0,
};
const badgeData = {
  badge: 'sell',
};
const tokenData = { accessToken: 'accessaccessaccess', refreshToken: 'refreshrefreshrefresh' };

let wishHistoryData: IWishHistoryData[] = [
  {
    seller_name: '유니티',
    goods_name: 'Z Flip5',
    price: 1000000,
    goods_thumbnail:
      'https://images.samsung.com/kdp/goods/2023/08/03/98f31ad5-b606-4b93-8ed0-5a78af443e7d.png?$PD_GALLERY_L_PNG$',
    goods_status: '예약중',
    uploadBefore: '2시간 전',
    detail_location: 'loc',
    id: 1,
  },
  {
    seller_name: '유니티',
    goods_name: 'Galaxy Book',
    price: 1000000,
    goods_thumbnail:
      'https://image-us.samsung.com/SamsungUS/home/computing/galaxy-books/052820/NT930QCGI_001_Front-Open_QLED_Blue-Gallery-1600x1200.jpg?$product-details-jpg$',
    goods_status: '예약중',
    uploadBefore: '2시간 전',
    detail_location: 'loc',
    id: 2,
  },
  {
    seller_name: '유니티',
    goods_name: 'Galaxy S24',
    price: 1000000,
    goods_thumbnail:
      'https://media.wired.com/photos/65a6c0643d4e31ae36fab6d9/master/pass/Gear-Samsung-Galaxy-S24-Series-SOURCE-Julian-Chokkattu.jpg',
    goods_status: '예약중',
    uploadBefore: '2시간 전',
    detail_location: 'loc',
    id: 3,
  },
];

export const handlers = [
  http.get('/profile', () => {
    return HttpResponse.json(profileData);
  }),
  http.get('/member/badge', () => {
    return HttpResponse.json(badgeData);
  }),
  http.post('/auth/kakao', () => {
    return HttpResponse.json(tokenData);
  }),
  http.post('/auth/email', () => HttpResponse.json(1234)),
  http.put('/member', async ({ request }) => {
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
  http.get('/api/goods/sales', () => HttpResponse.json(salesHistoryData)),
  http.get('/api/goods/likes', () => HttpResponse.json(wishHistoryData)),
  http.delete('/api/goods/:goodsId/likes', ({ params }) => {
    wishHistoryData = wishHistoryData.filter((item) => item.id !== Number(params.goodsId));
    return HttpResponse.json(wishHistoryData);
  }),
  http.post('/api/goods/:goodsId/likes', async ({ request }) => {
    // 임시
    const req = await request.json();
    wishHistoryData.push(req as IWishHistoryData);
    return HttpResponse.json(wishHistoryData);
  }),
];
