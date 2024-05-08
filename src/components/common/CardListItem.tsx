import { useState } from 'react';
import RatingModal from './RatingModal';
import { useMatch } from 'react-router-dom';
import { ICardListItemProps } from '../../types/interface';
import AddWishListButton from './AddWishListButton';

export default function CardListItem({
  id,
  img,
  name,
  soldBefore,
  status,
  price,
  uploadBefore,
}: ICardListItemProps) {
  const [showModal, setShowModal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const purchaseHistoryMatch = useMatch('/purchase-history');
  const wishHistoryMatch = useMatch('/wish-history');

  const handleOpenModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleSubmitComplete = () => setIsSubmit(true);

  return (
    <>
      <li
        key={id}
        className={`flex flex-col w-full transition-all duration-200 scale-95 border rounded-xl gap-y-3 hover:scale-105 ${
          showModal && 'bg-neutral-400'
        }`}
      >
        <div className='flex items-center justify-start p-1 gap-x-5'>
          <img className='w-20 h-24 rounded-xl' src={img} alt='img' />
          <div className='relative flex flex-col w-full p-0 gap-y-2'>
            <span className='text-sm font-bold'>{name}</span>
            <span className='text-xs text-neutral-500'>{soldBefore ?? uploadBefore}</span>
            <div className='flex items-center justify-start text-sm gap-x-2'>
              <div className='flex items-center justify-center p-1 text-xs text-white w-14 bg-neutral-500 rounded-xl'>
                {status}
              </div>
              <span>{price}원</span>
            </div>
            {wishHistoryMatch && <AddWishListButton goodsId={id} />}
          </div>
        </div>
        {purchaseHistoryMatch && (
          <button
            onClick={handleOpenModalClick}
            className='bottom-0 left-0 w-full btn btn-sm btn-active btn-neutral'
            disabled={isSubmit}
          >
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
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
              />
            </svg>
            <span>{isSubmit ? '등록 완료' : '후기 등록'}</span>
          </button>
        )}
      </li>
      {showModal && (
        <RatingModal id={id} onComplete={handleSubmitComplete} onCloseModal={handleCloseModal} />
      )}
    </>
  );
}
