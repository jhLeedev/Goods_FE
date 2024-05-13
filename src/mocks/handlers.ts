import { http, HttpResponse } from 'msw';
import { IGoodsData, IProfileData, IWishHistoryData } from '../types/interface';
import { positions } from './data/positionData';
import { purchaseHistoryData } from './data/purchaseHistoryData';
import { salesHistoryData } from './data/salesHistoryData';
import { searchData } from './data/searchData';
// import { wishHistoryData } from './data/wishHistoryData';

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
  http.post('/api/goods/:goodsId/likes', async ({ request }) => {
    // 임시
    const req = await request.json();
    wishHistoryData.push(req as IWishHistoryData);
    return HttpResponse.json(wishHistoryData);
  }),
  http.put('/goods/:goodsId', async ({ request }) => {
    const req = await request.formData();
    return HttpResponse.formData(req);
  }),
  http.get('/api/goods/all', () => HttpResponse.json(searchData)), // 임시
  http.get('/api/goods/search', ({ request }) => {
    const queryParams = new URL(request.url);
    const keyword = queryParams.searchParams.get('word');
    if (!keyword) return new HttpResponse(null, { status: 404 });
    const res = searchData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()),
    );
    return HttpResponse.json(res);
  }),
  http.post('/search', async ({ request }) => {
    // 임시
    const { word } = (await request.json()) as { word: string };
    const res = searchData.filter((item) =>
      item.name.toLowerCase().includes(String(word).toLowerCase()),
    );
    return HttpResponse.json(res);
  }),
];
