import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { IWishHistoryData } from '../../types/interface';

export const useAddWishItemMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ goodsId, item }: { goodsId: number; item: IWishHistoryData }) =>
      (await axios.post(`/api/goods/${goodsId}/likes`, item)).data,
  });

  return mutate;
};
