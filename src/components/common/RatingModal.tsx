import React, { useState } from 'react';
import { IRatingModal } from '../../types/interface';
import { useSendReviewMutation } from '../../service/mypage/useSendReviewMutation';

export default function RatingModal({ onCloseModal, onComplete, id }: IRatingModal) {
  const [rating, setRating] = useState<number | null>(null);
  const [rateColor] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const sendReview = useSendReviewMutation();

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) {
      setShowToast(true);
      return;
    }
    sendReview({ goodsId: id, star: rating! });
    onCloseModal();
    onComplete();
  };
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.5)] z-50 flex justify-center items-center px-3'>
      <div className='relative flex flex-col items-center justify-center h-64 text-black bg-white border w-96 p-7 rounded-xl'>
        <button onClick={onCloseModal} className='absolute top-0 right-0 btn btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </button>
        <h1 className='my-5 text-sm md:text-lg'>거래 후기를 남겨주세요.</h1>

        <form onSubmit={handleSubmitReview} className='flex flex-col gap-y-5'>
          <div className='flex items-center justify-center gap-x-2'>
            {[...Array(5)].map((_, index) => {
              const currentRate = index + 1;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div className='relative' key={index}>
                  {' '}
                  <label htmlFor='rate'>
                    <input
                      value={currentRate}
                      onClick={() => setRating(currentRate)}
                      type='radio'
                      id='rate'
                      name='rate'
                      className='absolute opacity-0 size-6 left-1 top-3'
                    />
                    <span
                      className={`text-3xl ${
                        currentRate <= (rateColor || rating!)
                          ? 'text-yellow-300'
                          : 'text-neutral-400'
                      }`}
                    >
                      {' '}
                      &#9733;
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
          <button className='btn btn-active btn-neutral'>후기 등록</button>
        </form>
      </div>
      {showToast && (
        <div className='toast'>
          <div className='relative flex items-center justify-center alert alert-error'>
            <span className='p-1'>별점을 등록 해 주세요.</span>
            <button onClick={() => setShowToast(false)} className='absolute top-1 right-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
