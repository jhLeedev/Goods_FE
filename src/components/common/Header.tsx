import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '../../store/test';
import Drawer from './Drawer';

export default function Header() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 px-3 py-3 bg-white border shadow md:px-7 gap-x-2'>
      <h1>Logo</h1>
      <label
        htmlFor='searchInput'
        className='flex items-center w-1/2 gap-2 md:w-1/3 input rounded-3xl input-bordered input-sm md:input-md'
      >
        <input id='searchInput' type='text' className='grow' placeholder='Search' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-5 h-5 text-black'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
      {isLoggedIn ? (
        <Drawer /> // 사이드바 (로그인 시)
      ) : (
        <button className='btn btn-outline btn-xs md:btn-sm'>로그인</button>
      )}
    </div>
  );
}
