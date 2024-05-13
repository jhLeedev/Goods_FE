import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useDeletePostMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (goodsId: string) => (await axios.delete(`/goods/${goodsId}`)).data,
    onSuccess: () => {
      navigate(-1);
    },
  });

  return mutate;
};
