import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <div className='mt-20 border-t'>
        <Outlet />
      </div>
    </>
  );
}
