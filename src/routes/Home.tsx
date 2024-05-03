import HomeMap from '../components/home/HomeMap';

export default function Home() {
  return (
    <div className='absolute top-0 left-0 flex flex-col w-full h-full pt-20'>
      <div className='flex items-center justify-center px-5 py-2 gap-x-5'>
        <select className='w-full max-w-xs select select-bordered'>
          <option disabled>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className='w-full max-w-xs select select-bordered'>
          <option disabled>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className='w-full max-w-xs select select-bordered'>
          <option disabled>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className='flex flex-col h-full md:flex-row-reverse'>
        <HomeMap />
        <ul className='overflow-y-auto border h-96 md:h-full md:w-48 lg:w-60 bg-neutral-400'>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
}
