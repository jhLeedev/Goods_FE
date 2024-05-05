import { LegacyRef, useRef, useState } from 'react';
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
import { IMyLocation } from '../../types/interface';
import ProductMarkers from './ProductMarkers';

export default function HomeMap() {
  const mapRef = useRef<kakao.maps.Map>();

  const [state, setState] = useState<IMyLocation>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  return (
    <Map // 지도를 표시할 Container
      center={state.center}
      className='w-full h-full'
      level={3} // 지도의 확대 레벨
      ref={mapRef as LegacyRef<kakao.maps.Map>}
    >
      {/* 현재 내 위치  */}
      <MyLocationMarker state={state} setState={setState} />
      {/* 모든 상품 위치 */}
      <ProductMarkers />
      <ZoomControl position='RIGHT' />
    </Map>
  );
}
