import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import PointCalc from '../components/common/PointCalc';
import { useState } from 'react';

export default function Payment() {
  const [password, setPassword] = useState<number>();

  return (
    <>
      <div className='flex h-20 px-3 py-3 md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='flex flex-col items-center w-full px-5 md:mx-auto md:max-w-5xl'>
        <h1 className='my-12 text-2xl font-bold text-center md:text-3xl'>결제하기</h1>
        <div className='flex justify-start w-full max-w-lg md:max-w-5xl'>
          <img
            className='object-cover w-24 h-24 mr-4 rounded-xl'
            src='https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'
            alt='img'
          />
          <div className='flex flex-col justify-around w-full'>
            <p>상품 이름</p>
            <p className='text-xl font-bold'>500원</p>
          </div>
        </div>
        <div className='w-full max-w-lg mt-6'>
          <h2 className='my-4 text-lg'>* 간편결제 비밀번호를 입력해주세요</h2>
          <label
            htmlFor='passwordInput'
            className='flex flex-row-reverse items-center w-full max-w-lg gap-2 font-bold input input-bordered md:max-w-5xl'
          >
            <input
              id='passwordInput'
              type='password'
              value={password || ''}
              onChange={(e) => setPassword(Number(e.target.value))}
              placeholder='간편결제 비밀번호'
              className='grow'
            />
          </label>
        </div>
        <PointCalc type='payment' password={password} />
      </div>
    </>
  );
}
