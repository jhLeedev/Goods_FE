import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IChatHistoryData } from '../../types/interface';

export const useChatHistoryQuery = (roomId: string) => {
  const { data, isLoading } = useQuery<IChatHistoryData>({
    queryKey: ['chatHistory', `${roomId}`],
    queryFn: async () => (await axios.get(`/api/chat/${roomId}`)).data,
  });
  return { data, isLoading };
};
