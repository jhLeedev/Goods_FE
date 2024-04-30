import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoRedirection() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = new URL(window.location.toString()).searchParams.get('code');
      // 1. 서버에 코드 전달
      const { accessToken } = (await axios.post('/auth/kakao', { code })).data;
      // 2. 토큰 받아서 저장하고 홈으로 이동
      localStorage.setItem('accessToken', accessToken);

      if (localStorage.getItem('accessToken')) navigate('/');
    })();
  }, [navigate]);
  return (
    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-screen border gap-x-5'>
      <span className='loading loading-spinner loading-lg' />
      <h1 className='text-lg font-bold md:text-2xl'>로그인 중 입니다...</h1>
    </div>
  );
}
