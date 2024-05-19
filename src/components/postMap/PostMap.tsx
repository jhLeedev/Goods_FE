import { useEffect, useState } from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { IMapLocation, IMyLocation } from '../../types/interface';
import { useRecoilState } from 'recoil';
import { clickedLocationState } from '../../store/atom';

export default function PostMap({ lat, lng }: { lat: number; lng: number }) {
  const [position, setPosition] = useState<IMapLocation>();
  const [, setClickedLocation] = useRecoilState(clickedLocationState);
  const [state, setState] = useState<IMyLocation>({
    center: {
      lat: lat ?? 37.5696765,
      lng: lng ?? 126.976502,
    },
    errMsg: null,
    isLoading: true,
  });

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

  const handleClickMap = (latlng: kakao.maps.LatLng) => {
    const lat = latlng.getLat();
    const lng = latlng.getLng();
    setPosition({
      lat,
      lng,
    });

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const newAddress = result[0].address;
        setClickedLocation({
          lat,
          lng,
          address: newAddress.address_name,
          center: state.center,
        });
      }
    });
  };

  return (
    <Map
      id='map'
      center={state.center}
      level={4}
      className='w-full h-48 max-w-lg mt-4 md:mt-8 md:h-80 md:max-w-5xl'
      onClick={(_, mouseEvent) => {
        const latlng = mouseEvent.latLng;
        handleClickMap(latlng);
      }}
    >
      <ZoomControl position='RIGHT' />
      <MapMarker position={position ?? state.center} />
    </Map>
  );
}
