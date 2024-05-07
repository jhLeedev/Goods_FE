import { IPurchaseHistoryData } from '../../types/interface';
import CardListItem from './CardListItem';

export default function CardListPage({
  data,
  title,
}: {
  data: IPurchaseHistoryData[];
  title: string;
}) {
  return (
    <div className='flex items-center justify-center px-3 py-5'>
      <ul className='flex flex-col items-center justify-center w-full md:w-[500px] mt-5  gap-y-3'>
        <h1 className='mr-auto text-2xl font-bold md:text-3xl '>{title}</h1>
        {data.map((item) => (
          <CardListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
