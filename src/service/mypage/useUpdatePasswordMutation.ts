import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const token = localStorage.getItem('accessToken');

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
        await axios.put(
          `/api/api/member/${type}`,
          {
            cur_password: curPassword,
            new_password: newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
      ).data,
  });

  return { mutate, isError };
};
