export default function Profile() {
  return (
    <div className='w-full max-w-md h-36 mx-auto md:flex-auto md:m-0'>
      <div className='card card-side h-full pb-8 md:pb-0'>
        <div className='avatar'>
          <div className='w-28 rounded-xl mr-4 md:w-36 md:mr-8'>
            <img
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              alt='profile_image'
            />
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-around'>
          <div className='flex items-center'>
            <h2 className='card-title mr-2'>닉네임</h2>
            <div className='rating rating-sm'>
              <input type='radio' name='rating-6' className='mask mask-star-2 bg-orange-400' />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-orange-400'
                checked
              />
              <input type='radio' name='rating-6' className='mask mask-star-2 bg-orange-400' />
              <input type='radio' name='rating-6' className='mask mask-star-2 bg-orange-400' />
              <input type='radio' name='rating-6' className='mask mask-star-2 bg-orange-400' />
            </div>
          </div>
          <div className='card-actions justify-end'>
            <div className='badge badge-secondary badge-outline md:badge-lg'>판매왕</div>
            <div className='badge badge-primary badge-outline md:badge-lg'>매너왕</div>
          </div>
        </div>
      </div>
    </div>
  );
}
