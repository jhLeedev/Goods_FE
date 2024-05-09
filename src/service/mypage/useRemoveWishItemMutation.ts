import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRemoveWishItemMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (goodsId: number) => (await axios.delete(`/api/goods/${goodsId}/likes`)).data,
  });
  return mutate;
};
