import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useSendCodeMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (code: string) => (await axios.post('/auth/kakao', { code })).data,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    },
    onError: (e) => console.log(e),
  });
  return mutate;
};
