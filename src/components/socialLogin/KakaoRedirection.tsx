import { useEffect } from 'react';
import { useSendCodeMutation } from '../../service/socialLogin/useSendCodeMutation';

export default function KakaoRedirection() {
  const sendCode = useSendCodeMutation();

  useEffect(() => {
    (async () => {
      const code = new URL(window.location.toString()).searchParams.get('code');

      sendCode(code!);
    })();
  }, [sendCode]);
  return (
    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-screen border gap-x-5'>
      <span className='loading loading-spinner loading-lg' />
      <h1 className='text-lg font-bold md:text-2xl'>로그인 중 입니다...</h1>
    </div>
  );
}
