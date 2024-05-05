import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useLocationDataQuery } from '../../service/map/useLocationDataQuery';
import { useSetRecoilState } from 'recoil';
import { homeListState } from '../../store/atom';
import { IMapLocation } from '../../types/interface';

export default function ProductMarkers() {
  const { data, isLoading } = useLocationDataQuery();
  const setListState = useSetRecoilState(homeListState);

  const handleClusterClick = (_: kakao.maps.MarkerClusterer, cluster: kakao.maps.Cluster) => {
    const markerList = cluster.getMarkers().map((item) => item.getPosition().getLat().toFixed(10));

    const res = data?.filter((item) => {
      const pos = new kakao.maps.LatLng(item.lat, item.lng).getLat().toFixed(10);
      return markerList.findIndex((item) => item === pos) !== -1;
    });
    setListState(res!);
  };

  const handleMarkerClick = (pos: IMapLocation) => {
    setListState([pos]);
  };

  if (isLoading) return <h1>loading...</h1>;
  return (
    <MarkerClusterer
      averageCenter
      minLevel={2}
      minClusterSize={1}
      disableClickZoom
      onClusterclick={handleClusterClick}
      gridSize={100}
    >
      {data?.map((pos) => (
        <MapMarker
          key={`${pos.lat}-${pos.lng}`}
          position={{
            lat: pos.lat,
            lng: pos.lng,
          }}
          onClick={() => handleMarkerClick(pos)}
        />
      ))}
    </MarkerClusterer>
  );
}
