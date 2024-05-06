import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useSendReviewMutation = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ goodsId, star }: { goodsId: number; star: number }) => {
      return (await axios.post(`api/trade/goods/${goodsId}/star`, { star })).data;
    },
  });
  return mutate;
};
