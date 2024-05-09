import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IWishHistoryData } from '../../types/interface';

export const useWishHistoryQuery = () => {
  const { isLoading, data } = useQuery<IWishHistoryData[]>({
    queryKey: ['wishHistory'],
    queryFn: async () => (await axios.get('/api/goods/likes')).data,
  });
  return { data, isLoading };
};
