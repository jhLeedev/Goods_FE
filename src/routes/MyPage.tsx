import { useRef, useState } from 'react';
import Profile from '../components/common/Profile';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { useMutation } from '@tanstack/react-query';
import { putResignUser } from '../store/api';

export default function MyPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [password, setPassword] = useState<string>('');

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: putResignUser,
  });

  const handleResign = () => {
    mutate({ password: `${password}` });
    if (isSuccess) {
      dialogRef.current?.close();
    }
  };

  return (
    <>
      <div className='h-20 px-3 py-3 flex md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h2 className='text-center my-12 text-2xl font-bold md:text-3xl'>마이페이지</h2>
        <div className='flex flex-col md:flex-row md:items-end'>
          <Profile />
          <Link
            to='/mypage/update'
            className='btn btn-lg w-full max-w-md mx-auto btn-neutral no-animation md:flex-none md:btn md:btn-neutral md:w-28 md:mr-0'
          >
            프로필 수정
          </Link>
        </div>
        <div className='w-full max-w-md mx-auto border-t-2 mt-8 md:max-w-5xl md:flex md:flex-row-reverse'>
          <div className='h-40 my-8 px-10 py-5 flex flex-col border border-neutral md:max-w-80 md:mr-0'>
            <div className='mb-10 flex flex-auto justify-between items-center'>
              <p className='text-xl font-bold'>포인트</p>
              {/* 사용자 포인트 받아오기 */}
              <p className='text-xl font-bold'>500P</p>
            </div>
            <div className='flex flex-none justify-between'>
              <a href='/#' role='button' className='btn btn-primary w-32 mr-2 shrink md:w-40'>
                충전
              </a>
              <a href='/#' role='button' className='btn btn-primary w-32 ml-2 shrink md:w-40'>
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
                <p className='mr-4'>구매 내역</p>
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
                  <p className='py-4 text-center'>회원 탈퇴</p>
                  {isError ? (
                    <p className='py-4 text-center font-normal text-lg text-red-700'>
                      비밀번호를 다시 입력해주세요.
                    </p>
                  ) : (
                    <p className='py-4 text-center font-normal text-lg'>비밀번호를 입력하세요.</p>
                  )}
                  <div className='modal-action justify-center mt-0'>
                    <form method='dialog'>
                      <label
                        htmlFor='password'
                        className='w-full max-w-lg mb-8 input input-bordered flex md:max-w-5xl'
                      >
                        <input
                          id='password'
                          type='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder='비밀번호'
                          className='grow'
                        />
                      </label>
                      <div className='flex w-full mb-4 justify-around'>
                        <button
                          type='button'
                          onClick={handleResign}
                          className={`btn w-32 mr-2 shrink md:w-40 btn-accent ${
                            password ? '' : ' btn-disabled'
                          }`}
                        >
                          탈퇴
                        </button>
                        <button
                          onClick={() => setPassword('')}
                          className='btn w-32 ml-2 shrink md:w-40 btn-neutral'
                        >
                          취소
                        </button>
                      </div>
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
