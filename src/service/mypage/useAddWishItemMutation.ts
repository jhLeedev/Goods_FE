import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const token = localStorage.getItem('accessToken');

export const useAddWishItemMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async (goodsId: number) =>
      (
        await axios.post(
          `/api/api/goods/likes`,
          { goods_id: goodsId },
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
