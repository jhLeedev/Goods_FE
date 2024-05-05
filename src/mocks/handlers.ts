import { http, HttpResponse } from 'msw';
import { IProfileData } from '../types/interface';
import { positions } from './positionData';

export interface ITestData {
  id: number;
  content: string;
}

const testData: ITestData[] = [];

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

export const handlers = [
  http.get('/test', () => HttpResponse.json(testData)),
  http.post('/test', async ({ request }) => {
    const req = await request.json();
    testData.push(req as ITestData);
    console.log(testData);
    return HttpResponse.json(testData);
  }),
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
];
