import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='mt-20 border'>
      <Outlet />
    </div>
  );
}
