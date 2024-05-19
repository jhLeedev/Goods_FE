import { Link } from 'react-router-dom';

export default function GoodsInfo({
  info,
}: {
  info: { image: string; name: string; title: string; price: number };
}) {
  return (
    <div className='flex items-center justify-between my-5'>
      <div className='flex gap-x-2'>
        <img className='w-14 h-14 rounded-xl' src={info.image} alt='goods' />
        <div className='flex flex-col items-start justify-center font-bold gap-y-2'>
          <span>{info.title}</span>
          <span>{info.price}원</span>
        </div>
      </div>
      <Link to='/payment' state={info}>
        <button className='btn btn-active btn-primary btn-sm md:btn-md'>거래 요청</button>
      </Link>
    </div>
  );
}
