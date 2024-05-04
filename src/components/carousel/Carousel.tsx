import { useState } from 'react';

export default function Carousel({ images }: { images: string[] }) {
  const [curIndex, setCurIndex] = useState(0);

  const handleImgPrevious = () => {
    if (curIndex > 0) {
      setCurIndex(curIndex - 1);
    }
  };

  const handleImgNext = () => {
    if (curIndex < images.length - 1) {
      setCurIndex(curIndex + 1);
    }
  };

  return (
    <div className='relative w-full h-52 mb-4 md:w-96 md:h-96 md:mb-0 md:mr-8 md:max-w-5xl'>
      <div className='absolute transform -translate-y-1/2 left-5 right-5 top-1/2'>
        {curIndex > 0 && (
          <button onClick={handleImgPrevious} className='btn btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-left'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
              />
            </svg>
          </button>
        )}
        {curIndex < images.length - 1 && (
          <button onClick={handleImgNext} className='absolute top-0 right-0 btn btn-circle'>
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
          </button>
        )}
      </div>
      <img src={images[curIndex]} className='w-full h-full object-cover' alt='carousel' />
    </div>
  );
}
