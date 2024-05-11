import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ISearchData } from '../../mocks/data/searchData';

export const useSearchResultQuery = (word: string) => {
  const { refetch } = useQuery<ISearchData[]>({
    queryKey: ['searchResult'],
    queryFn: async () => (await axios.get('/api/goods/search', { params: { word } })).data,
    enabled: false,
  });

  return refetch;
};
