import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen '>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-24 h-24 md:w-36 md:h-36'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z'
          />
        </svg>
      </div>

      <div className='flex flex-col items-center justify-center p-3 gap-y-3'>
        <h1 className='text-5xl font-bold md:text-9xl'>404</h1>
        <span className='text-2xl font-semibold md:text-4xl'>Page Not Found</span>
        <button onClick={() => navigate(-1)} className='w-full btn btn-neutral'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
            />
          </svg>
          이전 페이지로
        </button>
      </div>
    </div>
  );
}
