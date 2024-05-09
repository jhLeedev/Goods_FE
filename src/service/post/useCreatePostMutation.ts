import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useCreatePostMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (post: FormData) =>
      (
        await axios.post('/goods/new', post, {
          headers: {
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
