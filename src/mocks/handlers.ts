import { http, HttpResponse } from 'msw';
import { IProfileData, IWishHistoryData } from '../types/interface';
import { positions } from './data/positionData';
import { purchaseHistoryData } from './data/purchaseHistoryData';
import { salesHistoryData } from './data/salesHistoryData';
import { searchData } from './data/searchData';
import { goodsData } from './data/goodsDetailData';

/* profile mock data */
export const profileData: IProfileData = {
  nick_name: '홍길동',
  phone_number: '010-1234-5678',
  profile_image: '',
  star: 3.5,
};
const badgeData = {
  badge: ['sell'],
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
    uploadedBefore: '2시간 전',
    detail_location: 'loc',
    id: 4,
  },
  {
    seller_name: '유니티',
    goods_name: 'Galaxy Book',
    price: 1000000,
    goods_thumbnail:
      'https://image-us.samsung.com/SamsungUS/home/computing/galaxy-books/052820/NT930QCGI_001_Front-Open_QLED_Blue-Gallery-1600x1200.jpg?$product-details-jpg$',
    goods_status: '예약중',
    uploadedBefore: '2시간 전',
    detail_location: 'loc',
    id: 5,
  },
  {
    seller_name: '유니티',
    goods_name: 'Galaxy S24',
    price: 1000000,
    goods_thumbnail:
      'https://media.wired.com/photos/65a6c0643d4e31ae36fab6d9/master/pass/Gear-Samsung-Galaxy-S24-Series-SOURCE-Julian-Chokkattu.jpg',
    goods_status: '예약중',
    uploadedBefore: '2시간 전',
    detail_location: 'loc',
    id: 6,
  },
];

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
  http.get('/goods/:goodsId', ({ params }) => {
    const { goodsId } = params;
    const item = goodsData.filter((data) => data.goods_id === Number(goodsId));
    return HttpResponse.json(item[0]);
  }),
  http.put('/goods/:goodsId/state', async ({ request }) => {
    const req = await request.json();
    console.log(req);
    return HttpResponse.json(req);
  }),
  http.post('/goods/new', async ({ request }) => {
    const req = await request.formData();
    return HttpResponse.formData(req);
  }),
  http.get('/api/goods/sales', () => HttpResponse.json(salesHistoryData)),
  http.get('/api/goods/likes', () => HttpResponse.json(wishHistoryData)),
  http.delete('/api/goods/:goodsId/likes', ({ params }) => {
    wishHistoryData = wishHistoryData.filter((item) => item.id !== Number(params.goodsId));
    return HttpResponse.json(wishHistoryData);
  }),
  http.post('/api/goods/likes', async ({ request }) => {
    const req = await request.json();
    wishHistoryData.push(req as IWishHistoryData);
    return HttpResponse.json(wishHistoryData);
  }),
  http.put('/goods/:goodsId', async ({ request }) => {
    const req = await request.formData();
    return HttpResponse.formData(req);
  }),
  http.get('/api/goods/all', () => HttpResponse.json(searchData)), // 임시
  http.post('/api/goods/search', async ({ request }) => {
    // 검색
    const { word } = (await request.json()) as { word: string };
    const res = searchData.filter((item) =>
      item.name.toLowerCase().includes(String(word).toLowerCase()),
    );
    return HttpResponse.json(res);
  }),
  http.delete('/goods/:goodsId', ({ params }) => {
    const { goodsId } = params;
    const newSalesHistoryData = salesHistoryData.filter((item) => item.id !== Number(goodsId));
    console.log(newSalesHistoryData);
    return HttpResponse.json(newSalesHistoryData);
  }),
  http.post('/api/member/signup', async ({ request }) => {
    // 회원 가입
    // const req = (await request.json()) as ISignupRequest;
    // const signupResponse: ISignUpResponseData = {
    //   email: req.email,
    //   phone_number: req.phone_number,
    //   profile_img: req.profile_image,
    //   username: req.user_name,
    // };
    // return HttpResponse.json(signupResponse);
    const req = await request.formData();
    return HttpResponse.formData(req);
  }),
  http.post('/api/email/verification', async ({ request }) => {
    // 이메일 인증 요청
    const { email } = (await request.json()) as { email: string };
    return HttpResponse.json(`send to ${email}`);
  }),
  http.post('/api/email/verification/check', async ({ request }) => {
    const req = (await request.json()) as { email: string; code: number };

    return HttpResponse.json(req.code === 123);
  }),
];
