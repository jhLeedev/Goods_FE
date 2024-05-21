import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IGoodsData } from '../../types/interface';

export const useReadPostQuery = (goodsId: string) => {
  const { isLoading, data } = useQuery<IGoodsData>({
    queryKey: ['goodsDetail', goodsId],
    queryFn: async () => (await axios.get(`/api/api/goods/${goodsId}`)).data,
  });

  return { isLoading, data };
};
