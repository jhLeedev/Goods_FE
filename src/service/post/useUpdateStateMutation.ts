import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateStateMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ goods_id, state }: { goods_id: string; state: string }) =>
      (await axios.put(`/goods/${goods_id}/state`, { state })).data,
  });

  return mutate;
};
