import { Link } from 'react-router-dom';
import PointCalc from '../components/common/PointCalc';
import logo from '../assets/logo.webp';
import { useState } from 'react';

export default function Transfer() {
  const [bank, setBank] = useState<string>('');
  const [account, setAccount] = useState<number>();

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
        <h1 className='my-12 text-2xl font-bold text-center md:text-3xl'>포인트 송금</h1>
        <div className='w-full max-w-lg mt-6'>
          <h2 className='my-4 text-lg'>* 송금받을 계좌를 입력해주세요</h2>
          <label
            htmlFor='bankInput'
            className='flex flex-row-reverse items-center w-full max-w-lg gap-2 font-bold input input-bordered md:max-w-5xl'
          >
            <input
              id='bankInput'
              type='text'
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              placeholder='은행명'
              className='grow'
            />
          </label>
          <label
            htmlFor='accountInput'
            className='flex flex-row-reverse items-center w-full max-w-lg gap-2 mt-4 font-bold input input-bordered md:max-w-5xl'
          >
            <input
              id='accountInput'
              type='number'
              value={account || ''}
              onChange={(e) => setAccount(Number(e.target.value))}
              placeholder='계좌번호'
              className='grow'
            />
          </label>
        </div>
        <PointCalc type='transfer' bank={bank} account={account} />
      </div>
    </>
  );
}
