import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

export default function ProfileUpdate() {
  return (
    <>
      <div className='h-20 px-3 py-3 flex md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h2 className='text-center my-12 text-2xl font-bold md:text-3xl'>프로필 수정</h2>
      </div>
    </>
  );
}
