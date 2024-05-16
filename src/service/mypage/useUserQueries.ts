import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IProfileData } from '../../types/interface';

export const useProfileQuery = () => {
  const { isLoading, data } = useQuery<IProfileData>({
    queryKey: ['profile'],
    queryFn: async () => (await axios.get('/member/profile')).data,
  });

  return { isLoading, data };
};

export const useSellerProfileQuery = (sellerId: string) => {
  const { isLoading, data } = useQuery<IProfileData>({
    queryKey: ['seller'],
    queryFn: async () => (await axios.get(`/member/${sellerId}/profile`)).data,
  });

  return { isLoading, data };
};

export const useUpdateProfileMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (profile: FormData) =>
      (
        await axios.put('/member/profile', profile, {
          headers: {
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
      (await axios.put('/member/resign', password)).data,
    onSuccess: () => {
      navigate('/');
    },
  });

  return { mutate, isError };
};
