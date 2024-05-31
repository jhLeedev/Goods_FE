import CardListPage from '../components/common/CardListPage';
import { usePurchaseHistoryQuery } from '../service/mypage/usePurchaseHistoryQuery';

export default function PurchaseHistory() {
  const { data, isLoading } = usePurchaseHistoryQuery();

  if (isLoading) return <h1>loading...</h1>;
  return <CardListPage data={data!} title='구매 내역' />;
}
