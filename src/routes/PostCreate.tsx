import { Children, useEffect, useRef, useState } from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { IMapLocation, IMyLocation, IPostCreate } from '../types/interface';
import { useForm } from 'react-hook-form';
import { useCreatePostMutation } from '../service/post/useCreatePostMutation';

export default function PostCreate() {
  const [files, setFiles] = useState<File[]>([]);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const maxFileCount = 10;
  const [position, setPosition] = useState<IMapLocation>();
  const [state, setState] = useState<IMyLocation>({
    center: {
      lat: 37.5696765,
      lng: 126.976502,
    },
    errMsg: null,
    isLoading: true,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostCreate>();

  /* 지도 현재 위치 나타내기 */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setState((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          isLoading: false,
        }));
      });
    }
  }, []);

  /* 메모리 관리 */
  useEffect(() => {
    return () => {
      if (thumbnails) {
        thumbnails.forEach((thumbnail) => URL.revokeObjectURL(thumbnail));
      }
    };
  }, [thumbnails]);

  /* 데이터 전송 관련 */
  const mutate = useCreatePostMutation();

  const onSubmit = handleSubmit((form: IPostCreate) => {
    if (files.length === 0) {
      // eslint-disable-next-line no-alert
      alert('사진을 업로드해주세요.');
    }
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('goods_images', file);
    });
    formData.append('goods_name', form.goods_name);
    formData.append('price', form.price);
    formData.append('description', form.description);
    formData.append('lat', String(position?.lat ?? state.center.lat));
    formData.append('lng', String(position?.lng ?? state.center.lng));
    formData.append('detail_location', form.detail_location);
    mutate(formData);
  });

  /* 이미지 업로드 버튼 관련 메서드들 */
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
    const remainFileCount = maxFileCount - files.length;
    if (e.target.files.length > remainFileCount) {
      // eslint-disable-next-line no-alert
      return alert(`사진은 최대 ${maxFileCount}개까지 첨부 가능합니다.`);
    }
    const newFiles = Array.from(e.target.files);
    const allFiles = [...files, ...newFiles];
    setFiles(allFiles);

    const urlList = allFiles.map((file) => URL.createObjectURL(file));
    setThumbnails(urlList);
  };

  const handleRemove = (idx: number) => {
    const updatedFiles = files.filter((_, i) => i !== idx);
    const updatedThumbnails = thumbnails.filter((_, i) => i !== idx);
    setFiles(updatedFiles);
    setThumbnails(updatedThumbnails);
  };

  return (
    <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
      <h2 className='my-12 text-2xl font-bold text-center md:text-3xl'>상품 등록</h2>
      <div className='w-full max-w-lg mx-auto md:max-w-5xl md:mt-24'>
        <div className='flex h-32 mb-6 overflow-x-auto md:h-44'>
          {thumbnails.map((url, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={url + idx} className='mr-4 avatar'>
              <div className='relative w-24 h-24 rounded-xl md:w-36 md:h-36'>
                <img src={url} alt='uploaded_image' />
                <button
                  onClick={() => handleRemove(idx)}
                  className='absolute top-1 right-1 btn btn-xs md:btn-sm btn-circle btn-neutral'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 md:w-6 md:h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          {Children.toArray(
            [...Array(maxFileCount - files.length)].map(() => (
              <div className='mr-4 avatar'>
                <div className='w-24 h-24 border-2 rounded-xl md:w-36 md:h-36' />
              </div>
            )),
          )}
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
        <button type='button' onClick={onUploadBtnClick} className='mb-6 btn btn-neutral'>
          이미지 업로드
        </button>
      </div>
      <form
        onSubmit={onSubmit}
        className='flex flex-col items-start w-full max-w-lg mx-auto mb-10 md:max-w-5xl'
      >
        <label
          htmlFor='priceInput'
          className='flex items-center w-full max-w-lg gap-2 font-bold md:mt-8 input input-bordered md:max-w-5xl'
        >
          가격
          <input
            {...register('price', {
              required: { message: '필수항목입니다.', value: true },
            })}
            id='priceInput'
            type='number'
            className='font-normal text-right grow'
          />
          원
        </label>
        {errors?.price && <p className='mt-2 text-red-700'>{errors.price.message}</p>}

        <label
          htmlFor='nameInput'
          className='flex items-center w-full max-w-lg gap-2 mt-4 font-bold md:mt-8 input input-bordered md:max-w-5xl'
        >
          상품명
          <input
            {...register('goods_name', {
              required: { message: '필수항목입니다.', value: true },
            })}
            id='nameInput'
            type='text'
            className='font-normal text-right grow'
          />
        </label>
        {errors?.goods_name && <p className='mt-2 text-red-700'>{errors.goods_name.message}</p>}

        <textarea
          {...register('description', {
            required: { message: '필수항목입니다.', value: true },
          })}
          placeholder='상세 내용'
          className='w-full max-w-lg p-4 mt-4 text-base textarea md:mt-8 textarea-bordered textarea-sm md:max-w-5xl md:min-h-60'
        />
        {errors?.description && <p className='mt-2 text-red-700'>{errors.description.message}</p>}

        <Map
          id='map'
          center={state.center}
          level={4}
          className='w-full h-48 max-w-lg mt-4 md:mt-8 md:h-80 md:max-w-5xl'
          onClick={(_, mouseEvent) => {
            const latlng = mouseEvent.latLng;
            setPosition({
              lat: latlng.getLat(),
              lng: latlng.getLng(),
            });
          }}
        >
          <ZoomControl position='RIGHT' />
          <MapMarker position={position ?? state.center} />
        </Map>
        <input
          {...register('detail_location', {
            required: { message: '필수항목입니다.', value: true },
          })}
          type='text'
          placeholder='상세 주소 입력'
          className='w-full max-w-lg mt-4 md:mt-8 input input-bordered md:max-w-5xl'
        />
        {errors?.detail_location && (
          <p className='mt-2 text-red-700'>{errors.detail_location.message}</p>
        )}

        <button className='w-full max-w-lg mt-4 md:btn-lg md:mt-8 btn btn-primary md:max-w-32'>
          등록하기
        </button>
      </form>
    </div>
  );
}
