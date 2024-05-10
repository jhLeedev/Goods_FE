import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdatePostMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ post, goods_id }: { post: FormData; goods_id: string }) =>
      (
        await axios.put(`/goods/${goods_id}`, post, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      ).data,
  });

  return mutate;
};
