import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useConfirmEmailAuth = (closeModal: () => void, setDisableModal: () => void) => {
  const { mutate } = useMutation({
    mutationFn: async (payload: { email: string; code: number }) =>
      (await axios.post(`/api/api/email/verification/check`, payload)).data,
    onSuccess: (data) => {
      // eslint-disable-next-line no-alert
      alert(data ? '인증 완료' : '일치하지 않습니다');
      if (data) {
        closeModal();
        setDisableModal();
      }
    },
  });
  return mutate;
};
