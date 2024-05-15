import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useSignupMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (payload: FormData) => (await axios.post('/api/member/signup', payload)).data,
    onSuccess: (data) => {
      console.log('===signup response===');
      console.log(data);
    },
  });
  return mutate;
};
