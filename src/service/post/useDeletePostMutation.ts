import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('accessToken');

export const useDeletePostMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (goodsId: string) =>
      (
        await axios.delete(`/api/api/goods/${goodsId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data,
    onSuccess: () => {
      navigate(-1);
    },
  });

  return mutate;
};
