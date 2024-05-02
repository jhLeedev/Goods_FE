import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { useRef, useState } from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { IMapLocation } from '../types/interface';

export default function PostCreate() {
  const [result, setResult] = useState<IMapLocation>();
  const [files, setFiles] = useState<File[]>([]);
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
      <div className='h-20 px-3 py-3 flex md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h2 className='text-center my-12 text-2xl font-bold md:text-3xl'>상품 등록</h2>
        <div className='w-full max-w-lg mx-auto md:max-w-5xl'>
          <div className='flex mb-6 overflow-x-auto'>
            <div className='avatar mr-4'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
            <div className='avatar mr-4'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
            <div className='avatar mr-4'>
              <div className='w-24 rounded-xl md:w-36'>
                <img src='/#' alt='uploaded_image' />
              </div>
            </div>
            <div className='avatar mr-4'>
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
          <button onClick={onUploadBtnClick} className='btn btn-neutral mb-6'>
            이미지 업로드
          </button>
        </div>
        <form
          onSubmit={onSubmit}
          className='w-full mb-10 flex flex-col items-center justify-center gap-y-6 md:items-start'
        >
          <label className='w-full max-w-lg input input-bordered flex items-center gap-2 md:max-w-5xl'>
            가격
            <input type='number' className='grow text-right' />
          </label>
          <label className='w-full max-w-lg input input-bordered flex items-center gap-2 md:max-w-5xl'>
            상품 이름
            <input type='text' className='grow text-right' />
          </label>
          <textarea
            placeholder='상세 내용'
            className='textarea textarea-bordered textarea-sm w-full max-w-lg md:max-w-5xl'
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
            className='input input-bordered w-full max-w-lg md:max-w-5xl'
          />
          <button className='w-full max-w-lg btn btn-primary md:max-w-32'>등록하기</button>
        </form>
      </div>
    </>
  );
}
