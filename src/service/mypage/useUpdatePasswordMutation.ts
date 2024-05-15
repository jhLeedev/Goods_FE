import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdatePasswordMutation = (type: string) => {
  const { mutate, isError } = useMutation({
    mutationFn: async ({
      curPassword,
      newPassword,
    }: {
      curPassword: string;
      newPassword: string;
    }) =>
      (
        await axios.put(`/member/${type}`, {
          cur_password: curPassword,
          new_password: newPassword,
        })
      ).data,
  });

  return { mutate, isError };
};
