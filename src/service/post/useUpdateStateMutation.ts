import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const token = localStorage.getItem('accessToken');

export const useUpdateStateMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ goods_id, state }: { goods_id: string; state: string }) =>
      (
        await axios.put(
          `/api/api/goods/${goods_id}/state`,
          { state },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
      ).data,
  });

  return mutate;
};
