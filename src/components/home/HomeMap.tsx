import { useState } from 'react';
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
import { IMyLocation } from '../../types/interface';
import ProductMarkers from './ProductMarkers';
import { useSetRecoilState } from 'recoil';
import { homeListState, searchResultState } from '../../store/atom';
import { Link } from 'react-router-dom';

export default function HomeMap() {
  const setSearchList = useSetRecoilState(searchResultState);
  const setHomeList = useSetRecoilState(homeListState);

  const [state, setState] = useState<IMyLocation>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const handleResetSearch = () => {
    setSearchList([]);
    setHomeList([]);
  };

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        className='relative w-full h-full'
        level={3} // 지도의 확대 레벨
        // ref={mapRef as LegacyRef<kakao.maps.Map>}
      >
        {/* 현재 내 위치  */}
        <MyLocationMarker state={state} setState={setState} />
        {/* 모든 상품 위치 */}
        <ProductMarkers />
        <ZoomControl position='RIGHT' />
      </Map>
      <button
        onClick={handleResetSearch}
        className='absolute z-40 top-[340px] right-1 btn btn-primary text-white btn-sm md:btn-md'
      >
        검색 초기화
      </button>
      <Link to='/posts/new'>
        <button className='absolute z-40 p-3 text-white transition-colors duration-200 bg-black rounded-full bottom-5 right-5 md:p-4 md:bottom-8 md:right-8 hover:bg-neutral-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
      </Link>
    </>
  );
}
