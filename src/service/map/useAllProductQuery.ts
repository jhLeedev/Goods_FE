import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ISearchData } from '../../mocks/data/searchData';

export const useAllProductQuery = () => {
  const { data, isLoading } = useQuery<ISearchData[]>({
    queryKey: ['allProduct'],
    queryFn: async () => (await axios.get(`/api/goods/all`)).data,
  });

  return { data, isLoading };
};
