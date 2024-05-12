import Carousel from '../components/carousel/Carousel';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useReadPostQuery } from '../service/post/useReadPostQuery';
import { Link, useParams } from 'react-router-dom';
import { useUpdateStateMutation } from '../service/post/useUpdateStateMutation';
import AddWishListButton from '../components/common/AddWishListButton';

export default function PostDetail() {
  const { id: goodsId } = useParams();
  const { data, isLoading } = useReadPostQuery(goodsId!);

  // const token = localStorage.getItem('accessToken');
  /* 추후 디코딩 로직 추가 */
  const decoded = 1;
  const isAutor = decoded === data?.seller_id;

  const mutate = useUpdateStateMutation();

  const handleState = (state: string) => {
    mutate({
      goods_id: goodsId!,
      state,
    });
  };

  const addComma = (price: number): string => {
    const commaPrice = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return commaPrice;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='w-full max-w-lg px-5 mx-auto mt-5 md:max-w-5xl'>
      <div className='md:flex'>
        <Carousel images={data!.goods_images} />
        <div className='mt-5 md:mt-0 md:flex md:flex-col md:justify-between md:flex-1'>
          <div className='md:flex md:flex-col-reverse md:flex-1 md:pb-4 md:mb-4 md:border-b'>
            <Link
              to={`/shop/${data!.seller_id}`}
              className='h-full pb-4 card card-side md:pb-0 md:h-20'
            >
              <div className='avatar'>
                <div className='w-16 mr-4 rounded-xl md:w-20 md:mr-6'>
                  <img src={data!.profile_img} alt='profile_image' />
                </div>
              </div>
              <div className='flex flex-col items-start justify-around w-full'>
                <p className='mb-2 card-title'>{data!.seller_name}</p>
                <div className='justify-end card-actions'>
                  {data!.seller_badge && (
                    <div className='badge badge-secondary badge-outline md:badge-lg'>판매왕</div>
                  )}
                  {data!.manner_badge && (
                    <div className='badge badge-primary badge-outline md:badge-lg'>매너왕</div>
                  )}
                </div>
              </div>
            </Link>
            <div className='md:flex-1'>
              <h1 className='my-4 text-2xl font-extrabold md:my-8 md:text-3xl'>
                {data!.goods_name}
              </h1>
              <div className='flex items-center justify-between md:flex-1'>
                <h2 className='text-sm text-stone-400 md:text-base'>{data!.uploadedBefore}</h2>
                {isAutor && (
                  <select
                    name='goods-state'
                    onChange={(e) => handleState(e.target.value)}
                    className='w-32 md:w-40 select select-bordered'
                  >
                    <option defaultValue='판매중'>판매중</option>
                    <option value='예약중'>예약중</option>
                    <option value='거래완료'>거래완료</option>
                  </select>
                )}
              </div>
            </div>
          </div>
          <div className='fixed bottom-0 left-0 z-50 flex items-center w-full h-20 px-3 py-3 bg-white border-t md:relative md:border-0 md:p-0'>
            <div className='flex items-center ml-2 mr-4 md:ml-0'>
              <AddWishListButton goodsId={Number(goodsId)} wish={data!.like} />
            </div>
            <h3 className='flex-1 text-xl font-bold'>{addComma(data!.price)}원</h3>
            {isAutor ? (
              <Link to={`/posts/edit/${goodsId}`} className='btn btn-primary md:btn-lg'>
                수정하기
              </Link>
            ) : (
              <button className='btn btn-primary md:btn-lg'>채팅하기</button>
            )}
          </div>
        </div>
      </div>
      <h2 className='py-4 mt-6 whitespace-pre-wrap border-t min-h-44 md:mt-8 md:pt-8 md:min-h-60'>
        {data!.description}
      </h2>
      <div className='pt-4 border-t pb-28 md:pb-4 md:mb-12'>
        <div className='flex items-center mb-4'>
          <h3 className='font-bold md:text-lg'>거래 희망 장소</h3>
          <h4 className='ml-4'>{data!.detail_location}</h4>
        </div>
        <Map
          center={{
            lat: data!.lat,
            lng: data!.lng,
          }}
          level={4}
          className='w-full h-48 md:h-64 md:max-w-5xl'
        >
          <MapMarker
            position={{
              lat: data!.lat,
              lng: data!.lng,
            }}
          />
        </Map>
      </div>
    </div>
  );
}
