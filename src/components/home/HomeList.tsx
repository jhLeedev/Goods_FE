import { useRecoilValue } from 'recoil';
import { homeListState } from '../../store/atom';

export default function HomeList() {
  const products = useRecoilValue(homeListState);
  return (
    <ul className='overflow-y-auto border h-96 md:h-full md:w-48 lg:w-60 bg-rgba(255,255,255,.7)'>
      {products.map((product) => (
        <li className='p-3 text-sm border' key={`_${product.lng + product.lat}`}>
          lat: {product.lat}
          <br /> lng : {product.lng}
        </li>
      ))}
    </ul>
  );
}
