import CardListPage from '../components/common/CardListPage';
import { useWishHistoryQuery } from '../service/mypage/useWishHistoryQuery';

export default function WishHistory() {
  const { data, isLoading } = useWishHistoryQuery();
  if (isLoading) return <h1>loading...</h1>;
  return <CardListPage data={data!} title='관심 목록' />;
}
