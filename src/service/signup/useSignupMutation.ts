import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useSignupMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (payload: FormData) =>
      (
        await axios.post('/api/api/member/signup', payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
      ).data,
    onSuccess: (data) => {
      if (data.email) {
        navigate('/signin');
      }
    },
  });
  return mutate;
};
