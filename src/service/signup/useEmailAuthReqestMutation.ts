import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useEmailAuthRequestMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (email: string) =>
      (await axios.post('/api/api/email/verification', { email })).data,
    onSuccess: (data) => console.log(data),
  });
  return mutate;
};
