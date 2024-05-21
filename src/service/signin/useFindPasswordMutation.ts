import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useFindPasswordMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (email: string) => (await axios.post('/api/api/member/find', { email })).data,
    onSuccess: (data) => console.log(data),
  });
  return mutate;
};
