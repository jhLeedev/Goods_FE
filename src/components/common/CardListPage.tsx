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
    <div className='px-3 py-5 '>
      <h1 className='text-2xl font-bold'>{title}</h1>

      <ul className='flex flex-col items-center justify-center mt-5 gap-y-3'>
        {data.map((item) => (
          <CardListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
