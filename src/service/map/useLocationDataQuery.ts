import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ILocation } from '../../types/interface';

export const useLocationDataQuery = () => {
  const { data, isLoading } = useQuery<ILocation[]>({
    queryKey: ['locationData'],
    queryFn: async () => (await axios.get(`/location`)).data,
  });

  return { data, isLoading };
};
