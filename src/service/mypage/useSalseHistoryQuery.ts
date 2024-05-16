import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ISalesHistoryData } from '../../types/interface';

export const useSalesHistoryQuery = (sellerId: string) => {
  const { data, isLoading } = useQuery<ISalesHistoryData[]>({
    queryKey: ['salesHistory'],
    queryFn: async () => (await axios.get(`/api/goods/sell-list/${sellerId}`)).data,
  });
  return { data, isLoading };
};
