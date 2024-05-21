import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('accessToken');

export const useCreatePostMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (post: FormData) =>
      (
        await axios.post('/api/api/goods/new', post, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
      ).data,
    onSuccess: (res) => {
      navigate(`/posts/${res.id}`);
    },
  });

  return mutate;
};
