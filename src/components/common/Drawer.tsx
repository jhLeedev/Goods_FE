export default function Drawer() {
  return (
    <div className='flex items-center justify-end w-8 md:w-16 drawer drawer-end'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor='my-drawer-4' className='drawer-button'>
          {/* 프로필 이미지 */}
          <div className='avatar'>
            <div className='w-6 rounded-full cursor-pointer md:w-8 ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                alt='profile_image'
              />
            </div>
          </div>
        </label>
      </div>
      <div className='drawer-side'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='my-drawer-4' aria-label='close sidebar' className='drawer-overlay' />
        <ul className='w-2/3 min-h-full p-4 font-semibold menu md:w-80 bg-base-200 text-base-content '>
          <h1 className='mb-10 text-xl font-bold md:text-3xl'>닉네임</h1>
          <div className='flex flex-col gap-y-3'>
            <li>
              <a href='/#'>마이페이지</a>
            </li>
            <li>
              <a href='/#'>알림</a>
            </li>
            <li>
              <a href='/#'>관심 목록</a>
            </li>
            <li>
              <a href='/#'>판매 내역</a>
            </li>
            <li>
              <a href='/#'>구매 내역</a>
            </li>
            <li>
              <a href='/#'>로그아웃</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
