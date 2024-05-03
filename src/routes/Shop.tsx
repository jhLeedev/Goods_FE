import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.webp';
import Profile from '../components/common/Profile';

export default function Shop() {
  const { id } = useParams();

  /* 페이지네이션과 api 연결 추후에 추가 */

  return (
    <>
      <div className='h-20 px-3 py-3 flex justify-normal md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h1 className='text-center my-12 text-2xl font-bold md:text-3xl'>판매자 프로필</h1>
        <div className='flex flex-col md:flex-row md:items-end'>
          <Profile />
        </div>
      </div>
      <div className='w-full max-w-md mx-auto mt-8 px-5 border-t-2 md:max-w-5xl'>
        <h2 className='my-12 text-xl font-bold md:text-2xl'>판매 목록</h2>

        {/* 판매 물품 카드 1 */}
        <div className='card card-side h-full mb-4 py-4 border-2 md:py-0'>
          <div className='avatar'>
            <div className='w-28 rounded-xl mx-4 md:w-36 md:mr-8 md:ml-0'>
              <img src='/#' alt='profile_image' />
            </div>
          </div>
          <div className='w-full flex flex-col items-start justify-evenly'>
            <h3 className='card-title mr-2'>제목</h3>
            <p className='text-lg text-stone-400'>1주 전</p>
            <div className='flex flex-row items-center'>
              <div className='badge badge-neutral mr-4 md:badge-lg'>거래완료</div>
              <p className='text-xl font-bold'>3,000원</p>
            </div>
          </div>
        </div>
        {/* 판매 물품 카드 2 */}
        <div className='card card-side h-full mb-4 py-4 border-2 md:py-0'>
          <div className='avatar'>
            <div className='w-28 rounded-xl mx-4 md:w-36 md:mr-8 md:ml-0'>
              <img src='/#' alt='profile_image' />
            </div>
          </div>
          <div className='w-full flex flex-col items-start justify-evenly'>
            <h3 className='card-title mr-2'>제목</h3>
            <p className='text-lg text-stone-400'>2주 전</p>
            <div className='flex flex-row items-center'>
              <p className='text-xl font-bold'>12,000원</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
