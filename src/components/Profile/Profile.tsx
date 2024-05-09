import { useProfileDataQuery } from '../../service/mypage/useUserQueries';
import Star from './Star';

export default function Profile() {
  const { profile, badge, isLoading } = useProfileDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='w-full max-w-md mx-auto h-36 md:flex-auto md:m-0'>
      <div className='h-full pb-8 card card-side md:pb-0'>
        <div className='avatar'>
          <div className='mr-4 w-28 rounded-xl md:w-36 md:mr-8'>
            <img src={profile.profile_image} alt='profile_image' />
          </div>
        </div>
        <div className='flex flex-col items-start justify-around w-full'>
          <div className='flex items-center'>
            <h2 className='mr-2 card-title'>{profile.username}</h2>
            <Star star={profile.star} />
          </div>
          <div className='justify-end card-actions'>
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
