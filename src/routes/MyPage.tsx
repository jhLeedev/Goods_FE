import { useRef } from 'react';
import Profile from '../components/common/Profile';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

export default function MyPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div className='flex h-20 px-3 py-3 md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h1 className='my-12 text-2xl font-bold text-center md:text-3xl'>마이페이지</h1>
        <div className='flex flex-col md:flex-row md:items-end'>
          <Profile />
          <Link
            to='/mypage/update'
            className='w-full max-w-md mx-auto btn btn-lg btn-neutral no-animation md:flex-none md:btn md:btn-neutral md:w-28 md:mr-0'
          >
            프로필 수정
          </Link>
        </div>
        <div className='w-full max-w-md mx-auto mt-8 border-t-2 md:max-w-5xl md:flex md:flex-row-reverse'>
          <div className='flex flex-col h-40 px-10 py-5 my-8 border border-neutral md:max-w-80 md:mr-0'>
            <div className='flex items-center justify-between flex-auto mb-10'>
              <p className='text-xl font-bold'>포인트</p>
              {/* 사용자 포인트 받아오기 */}
              <p className='text-xl font-bold'>500P</p>
            </div>
            <div className='flex justify-between flex-none'>
              <Link
                to='/mypage/charge'
                role='button'
                className='w-32 mr-2 btn btn-primary shrink md:w-40'
              >
                충전
              </Link>
              <a href='/#' role='button' className='w-32 ml-2 btn btn-primary shrink md:w-40'>
                송금
              </a>
            </div>
          </div>
          <ul className='w-full min-h-full mt-5 text-xl font-semibold md:ml-0 md:mt-10'>
            <li className='mb-8'>
              <a href='/#' className='flex items-center'>
                <p className='mr-4'>관심 목록</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-chevron-right'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
                  />
                </svg>
              </a>
            </li>
            <li className='my-8'>
              <a href='/#' className='flex items-center'>
                <p className='mr-4'>판매 내역</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-chevron-right'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
                  />
                </svg>
              </a>
            </li>
            <li className='my-8'>
              <a href='/#' className='flex items-center'>
                <Link to='/purchase-history'>
                  <p className='mr-4'>구매 내역</p>
                </Link>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-chevron-right'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
                  />
                </svg>
              </a>
            </li>
            <li className='my-8'>
              <button onClick={showModal}>회원 탈퇴</button>
              <dialog ref={dialogRef} className='modal duration-0'>
                <div className='modal-box'>
                  <p className='py-4 text-center'>정말 탈퇴하시겠습니까?</p>
                  <div className='modal-action'>
                    <form method='dialog' className='flex justify-around w-full'>
                      <button className='w-32 mr-2 btn shrink md:w-40 btn-accent'>탈퇴</button>
                      <button className='w-32 ml-2 btn shrink md:w-40 btn-neutral'>취소</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
