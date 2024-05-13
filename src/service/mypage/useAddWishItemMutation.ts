import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAddWishItemMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (goodsId: number) =>
      (await axios.post(`/api/goods/likes`, { goods_id: goodsId })).data,
  });

  return mutate;
};
