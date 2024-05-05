import HomeList from '../components/home/HomeList';
import HomeMap from '../components/home/HomeMap';

export default function Home() {
  return (
    <div className='absolute top-0 left-0 flex flex-col w-full h-full pt-20 overflow-hidden'>
      <div className='flex items-center justify-center px-5 py-2 gap-x-5'>
        <select className='w-full max-w-xs select select-bordered'>
          <option selected>시</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className='w-full max-w-xs select select-bordered'>
          <option selected>구</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className='w-full max-w-xs select select-bordered'>
          <option selected>동</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className='flex flex-col h-full md:flex-row-reverse'>
        <HomeMap />
        <HomeList />
      </div>
    </div>
  );
}
