import { useSuspenseQueries } from '@tanstack/react-query';
import { getBadgeInfo, getProfileInfo } from '../../store/api';

export default function Profile() {
  const [{ data: profile }, { data: badge }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['profile'],
        queryFn: getProfileInfo,
      },
      {
        queryKey: ['badge'],
        queryFn: getBadgeInfo,
      },
    ],
  });

  return (
    <div className='w-full max-w-md h-36 mx-auto md:flex-auto md:m-0'>
      <div className='card card-side h-full pb-8 md:pb-0'>
        <div className='avatar'>
          <div className='w-28 rounded-xl mr-4 md:w-36 md:mr-8'>
            <img src={profile.profile_image} alt='profile_image' />
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-around'>
          <div className='flex items-center'>
            <h2 className='card-title mr-2'>{profile.username}</h2>
            <div className='rating rating-sm'>
              {[...Array(Math.floor(profile.star))].map((i) => (
                <svg
                  key={i}
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='rgb(251 146 60)'
                  className='bi bi-star-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                </svg>
              ))}
              {[...Array(5 - Math.floor(profile.star))].map((i) => (
                <svg
                  key={i}
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='rgb(254 233 216)'
                  className='bi bi-star-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                </svg>
              ))}
            </div>
          </div>
          <div className='card-actions justify-end'>
            {badge.badge === 'sell' && (
              <div className='badge badge-secondary badge-outline md:badge-lg'>판매왕</div>
            )}
            {badge.badge === 'manner' && (
              <div className='badge badge-primary badge-outline md:badge-lg'>매너왕</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
