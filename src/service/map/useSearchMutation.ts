import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { homeListState, searchResultState } from '../../store/atom';
import { Dispatch, SetStateAction } from 'react';
import { ISearchData } from '../../mocks/data/searchData';

export const useSearchMutation = (callback: Dispatch<SetStateAction<string>>) => {
  const setHomeList = useSetRecoilState(homeListState);
  const setSearchList = useSetRecoilState(searchResultState);
  const { mutate } = useMutation({
    mutationFn: async (word: string) => (await axios.post('/search', { word })).data,
    onSuccess: (data: ISearchData[]) => {
      setHomeList(data);
      setSearchList(data);
      callback('');
    },
  });
  return mutate;
};
