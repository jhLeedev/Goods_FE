import { useEffect, Dispatch, SetStateAction } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { IMyLocation } from '../../types/interface';

export default function MyLocationMarker({
  state,
  setState,
}: {
  state: IMyLocation;
  setState: Dispatch<SetStateAction<IMyLocation>>;
}) {
  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        () => {
          setState((prev) => ({
            ...prev,
            errMsg: '위치정보 거부',
            isLoading: false,
            center: {
              lat: 37.5696765,
              lng: 126.976502,
            },
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, [setState]);
  return (
    <div>
      {!state.isLoading && (
        <MapMarker position={state.center}>
          <div style={{ padding: '5px', color: '#000' }}>{state.errMsg ?? '여기에 계신가요?!'}</div>
        </MapMarker>
      )}
    </div>
  );
}
