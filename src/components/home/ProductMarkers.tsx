import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useLocationDataQuery } from '../../service/map/useLocationDataQuery';

export default function ProductMarkers({
  onClick,
}: {
  onClick: (target: kakao.maps.MarkerClusterer, clusterer: kakao.maps.Cluster) => void;
}) {
  const { data, isLoading } = useLocationDataQuery();
  if (isLoading) return <h1>loading...</h1>;
  return (
    <MarkerClusterer averageCenter minLevel={10} disableClickZoom onClusterclick={onClick}>
      {data?.map((pos) => (
        <MapMarker
          key={`${pos.lat}-${pos.lng}`}
          position={{
            lat: pos.lat,
            lng: pos.lng,
          }}
        />
      ))}
    </MarkerClusterer>
  );
}
