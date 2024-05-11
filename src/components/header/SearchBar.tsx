import React, { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useAllProductQuery } from '../../service/map/useAllProductQuery';
import { useSearchResultQuery } from '../../service/map/useSearchResultQuery';
import { useSetRecoilState } from 'recoil';
import { homeListState, searchResultState } from '../../store/atom';

export default function SearchBar() {
  const [word, setWord] = useState('');

  const { data, isLoading } = useAllProductQuery();
  const refetch = useSearchResultQuery(word);
  const setHomeList = useSetRecoilState(homeListState);
  const setSearchList = useSetRecoilState(searchResultState);
  const navigate = useNavigate();
  const homeMatch = useMatch('/');

  const autocomplete = data?.filter((item) => item.name.toLowerCase().includes(word.toLowerCase()));

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (!word) return;
    if (key === 'Enter') {
      const res = (await refetch()).data;
      setSearchList(res!);
      setHomeList(res!);
      setWord('');
      if (!homeMatch) navigate('/'); // 홈 아닌 다른페이지에서 검색했다면 홈으로 이동
    }
  };

  if (isLoading) return <h1>loading...</h1>;
  return (
    <div className='relative w-1/2 md:w-1/3'>
      <label
        htmlFor='searchInput'
        className='flex items-center w-full gap-2 input rounded-3xl input-bordered input-sm md:input-md'
      >
        <input
          value={word}
          onChange={handleWordChange}
          id='searchInput'
          type='text'
          className='grow'
          placeholder='Search'
          autoComplete='off'
          onKeyDown={handleSubmit}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-5 h-5 text-black'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
      {word && autocomplete!.length > 0 && (
        <ul className='absolute left-0 w-full p-3 bg-neutral-200 rounded-xl '>
          {autocomplete?.map((item) => (
            <li className='p-2 font-bold hover:bg-neutral-300 rounded-xl' key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
