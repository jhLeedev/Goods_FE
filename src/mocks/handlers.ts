import { http, HttpResponse } from 'msw';
import { FormValueTypes, IProfileData } from '../types/interface';

export interface ITestData {
  id: number;
  content: string;
}

const testData: ITestData[] = [];

const memberData: FormValueTypes[] = [];

/* profile mock data */
export const profileData: IProfileData = {
  username: '홍길동',
  phoneNumber: '010-1234-5678',
  profile_image: 'www.google.com',
  sell_badge: true,
  manner_badge: false,
  star: 3.0,
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
  http.post('/auth/kakao', () => {
    return HttpResponse.json(tokenData);
  }),
  http.put('/member', async ({ request }) => {
    const req = await request.json();
    memberData.push(req as FormValueTypes);
    return HttpResponse.json(memberData);
  }),
];
