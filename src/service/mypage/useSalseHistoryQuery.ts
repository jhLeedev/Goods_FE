import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSalesHistoryQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['salesHistory'],
    queryFn: async () => (await axios.get('/api/goods/sales')).data,
  });
  return { data, isLoading };
};
