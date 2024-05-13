import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useProfileQuery = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => (await axios.get('/member/profile')).data,
  });

  return { isLoading, data };
};

export const useProfileDataQuery = () => {
  const { data: profile, isLoading: profileLoading } = useProfileQuery();
  const { data: badge, isLoading: badgeLoading } = useQuery({
    queryKey: ['badge'],
    queryFn: async () => (await axios.get('/member/badge')).data,
  });

  return { profile, badge, isLoading: profileLoading || badgeLoading };
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
