import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMapLocation } from '../types/interface';
import logo from '../assets/logo.webp';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

export default function PostEdit() {
  const [result, setResult] = useState<IMapLocation>();
  const [, setFiles] = useState<File[]>([]);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    console.log('form 전송');
  };

  const onUploadBtnClick = () => {
    if (!imageRef.current) {
      return;
    }
    imageRef.current.click();
  };

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFiles([...e.target.files]);
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
        <h2 className='my-12 text-2xl font-bold text-center md:text-3xl'>상품 수정</h2>
        <div className='w-full max-w-lg mx-auto md:max-w-5xl'>
          <div className='flex mb-6 overflow-x-auto'>
            <div className='mr-4 avatar'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
            <div className='mr-4 avatar'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
            <div className='mr-4 avatar'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
            <div className='mr-4 avatar'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
          </div>
          <input
            type='file'
            accept='image/*'
            name='thumbnail'
            ref={imageRef}
            onChange={onUploadImage}
            className='hidden'
            multiple
          />
          <button onClick={onUploadBtnClick} className='mb-6 btn btn-neutral'>
            이미지 업로드
          </button>
        </div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col items-center justify-center w-full mb-10 gap-y-6 md:items-start'
        >
          <label
            htmlFor='priceInput'
            className='flex items-center w-full max-w-lg gap-2 input input-bordered md:max-w-5xl'
          >
            가격
            <input id='priceInput' type='number' className='text-right grow' />
          </label>
          <label
            htmlFor='nameInput'
            className='flex items-center w-full max-w-lg gap-2 input input-bordered md:max-w-5xl'
          >
            상품 이름
            <input id='nameInput' type='text' className='text-right grow' />
          </label>
          <textarea
            placeholder='상세 내용'
            className='w-full max-w-lg textarea textarea-bordered textarea-sm md:max-w-5xl'
          />
          <Map
            id='map'
            center={{
              lat: 37.5696765,
              lng: 126.976502,
            }}
            level={4}
            onDragEnd={(map) => {
              const latlng = map.getCenter();
              setResult({
                lat: latlng.getLat(),
                lng: latlng.getLng(),
              });
            }}
            className='w-full h-48 max-w-lg md:h-64 md:max-w-5xl'
          >
            {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
            <ZoomControl position={'RIGHT'} />
            <MapMarker
              position={{
                lat: result ? result.lat : 37.5696765,
                lng: result ? result.lng : 126.976502,
              }}
            />
          </Map>
          <input
            type='text'
            placeholder='상세 주소 입력'
            className='w-full max-w-lg input input-bordered md:max-w-5xl'
          />
          <button className='w-full max-w-lg btn btn-primary md:max-w-32'>등록하기</button>
        </form>
      </div>
    </>
  );
}
