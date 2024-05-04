import { LegacyRef, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
import { IMyLocation } from '../../types/interface';
import ProductMarkers from './ProductMarkers';

export default function HomeMap() {
  const mapRef = useRef<kakao.maps.Map>();

  const onClusterclick = (_: kakao.maps.MarkerClusterer, cluster: kakao.maps.Cluster) => {
    const map = mapRef.current;
    // 현재 지도 레벨에서 1레벨 확대한 레벨
    const level = map!.getLevel() - 1;

    // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
    map!.setLevel(level, { anchor: cluster.getCenter() });
  };
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
      <ProductMarkers onClick={onClusterclick} />
    </Map>
  );
}
