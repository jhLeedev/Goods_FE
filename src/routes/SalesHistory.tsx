import CardListPage from '../components/common/CardListPage';
import { useSalesHistoryQuery } from '../service/mypage/useSalseHistoryQuery';

export default function SalesHistory() {
  const { data, isLoading } = useSalesHistoryQuery();
  if (isLoading) return <h1>loading...</h1>;
  return <CardListPage data={data!} title='판매 내역' />;
}
