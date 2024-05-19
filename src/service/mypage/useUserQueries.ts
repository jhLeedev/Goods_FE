import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IProfileData } from '../../types/interface';

const token = localStorage.getItem('accessToken');

export const useProfileQuery = () => {
  const { isLoading, data } = useQuery<IProfileData>({
    queryKey: ['profile'],
    queryFn: async () =>
      (
        await axios.get('/api/api/member/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data,
  });

  return { isLoading, data };
};

export const useSellerProfileQuery = (sellerId: string) => {
  const { isLoading, data } = useQuery<IProfileData>({
    queryKey: ['seller'],
    queryFn: async () => (await axios.get(`/api/api/member/${sellerId}/profile`)).data,
  });

  return { isLoading, data };
};

export const useUpdateProfileMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (profile: FormData) =>
      (
        await axios.put('/api/api/member/profile', profile, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
      ).data,
    onSuccess: () => {
      navigate('/mypage');
    },
  });

  return mutate;
};

export const useResignMutation = () => {
  const navigate = useNavigate();
  const { mutate, isError } = useMutation({
    mutationFn: async (password: { password: string }) =>
      (
        await axios.put('/api/api/member/resign', password, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data,
    onSuccess: () => {
      navigate('/');
    },
  });

  return { mutate, isError };
};
