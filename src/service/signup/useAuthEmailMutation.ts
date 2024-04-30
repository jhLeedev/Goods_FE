import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAuthEmailMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (email: string) => (await axios.post('/auth/email', email)).data,
  });
  return mutate;
};
