import { useParams } from 'react-router-dom';
import Carousel from '../components/carousel/Carousel';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function PostDetail() {
  const { id } = useParams();

  const isHearted = true;

  const images = [
    'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
    'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
    'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
    'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
  ];

  return (
    <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
      <div className='md:flex'>
        <Carousel images={images} />
        <div className='md:flex md:flex-col md:flex-1'>
          <h1 className='my-4 text-2xl font-bold md:my-8 md:ml-4 md:text-3xl'>상품 이름</h1>
          <h2 className='text-sm text-stone-400 md:text-base md:ml-4 md:flex-1'>1시간 전</h2>
          <div className='fixed bottom-0 left-0 z-50 flex items-center w-full h-20 px-3 py-3 bg-white border md:relative md:border-0 md:p-0'>
            <button className='btn btn-ghost'>
              {isHearted ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 fill-primary stroke-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 stroke-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              )}
            </button>
            <h3 className='text-xl font-bold flex-1'>5,000원</h3>
            <button className='btn btn-primary md:btn-lg'>채팅하기</button>
          </div>
        </div>
      </div>
      <h2 className='min-h-40 py-4 whitespace-pre-wrap md:mt-8 md:pt-8 md:min-h-60 md:border-t'>
        상품설명
      </h2>
      <div className='md:mb-12'>
        <h3 className='mb-4 font-bold'>거래 희망 장소</h3>
        <Map
          center={{
            lat: 37.5696765,
            lng: 126.976502,
          }}
          level={4}
          className='w-full h-48 md:h-64 md:max-w-5xl'
        >
          <MapMarker
            position={{
              lat: 37.5696765,
              lng: 126.976502,
            }}
          />
        </Map>
        <h4 className='mt-4 mb-8'>상세 주소</h4>
      </div>
      <div className='mb-20 md:flex md:flex-col md:items-between md:flex-1 md:h-full'>
        <div className='card card-side h-full pb-4 md:pb-0'>
          <div className='avatar'>
            <div className='w-16 rounded-xl mr-4 md:w-20 md:mr-8'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                alt='profile_image'
              />
            </div>
          </div>
          <div className='w-full flex flex-col items-start justify-around'>
            <p className='card-title mb-2'>닉네임</p>
            <div className='card-actions justify-end'>
              <div className='badge badge-secondary badge-outline md:badge-lg'>판매왕</div>
              <div className='badge badge-primary badge-outline md:badge-lg'>매너왕</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
