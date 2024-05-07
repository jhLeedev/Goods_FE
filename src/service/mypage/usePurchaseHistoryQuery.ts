import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IPurchaseHistoryData } from '../../types/interface';

export const usePurchaseHistoryQuery = () => {
  const { data, isLoading } = useQuery<IPurchaseHistoryData[]>({
    queryKey: ['purchaseHistory'],
    queryFn: async () => {
      try {
        return (await axios.get(`/api/goods/purchase`)).data;
      } catch (e) {
        console.log(e);
      }
    },
  });

  return { data, isLoading };
};
