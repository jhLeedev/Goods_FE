import { Link } from 'react-router-dom';
import PointCalc from '../components/common/PointCalc';
import logo from '../assets/logo.webp';

export default function PointCharge() {
  return (
    <>
      <div className='flex h-20 px-3 py-3 md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='flex flex-col items-center w-full px-5 md:mx-auto md:max-w-5xl'>
        <h1 className='my-12 text-2xl font-bold text-center md:text-3xl'>포인트 충전</h1>
        <PointCalc type='charge' />
      </div>
    </>
  );
}
