import { useQuery } from '@tanstack/react-query';
import { IChatRoomListData } from '../../types/interface';
import axios from 'axios';

export const useChatRoomListQuery = () => {
  const { data, isLoading } = useQuery<IChatRoomListData[]>({
    queryKey: ['chatRoomList'],
    queryFn: async () => (await axios.get('/api/chat/room')).data,
  });

  return { data, isLoading };
};
