import { useQuery } from '@tanstack/react-query';
import { IMyInfo } from '../../types/interface';
import client from '../../util/authAxios';

export const useMyInfoQuery = () => {
  const { data: info, isLoading } = useQuery<IMyInfo>({
    queryKey: ['myInfo'],
    queryFn: async () => (await client.get('/api/member/profile')).data,
  });
  return { info, isLoading };
};
