import { useState } from 'react';
import HomeList from '../components/home/HomeList';
import HomeMap from '../components/home/HomeMap';
import { hangjungdong } from '../constants';
import { useSearchAddrMutation } from '../service/map/useSearchMutation';

export default function Home() {
  const [siValue, setSiValue] = useState<string>('');
  const [guValue, setGuValue] = useState<string>('');
  const [dongValue, setDongValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const { sido, sigugun, dong } = hangjungdong;

  const search = useSearchAddrMutation();

  const handleSiValue = (selectedSi: string) => {
    setSiValue(selectedSi);
    setGuValue('');
    setDongValue('');
  };

  const handleGuValue = (selectedGu: string) => {
    setGuValue(selectedGu);
    setDongValue('');
  };

  const handleSubmit = () => {
    if (siValue && guValue && dongValue) {
      const siName = sido.filter((item) => item.sido === siValue)[0].codeNm;
      const guName = sigugun.filter((item) => item.sido === siValue && item.sigugun === guValue)[0]
        .codeNm;
      const dongName = dong.filter(
        (item) => item.sido === siValue && item.sigugun === guValue && item.dong === dongValue,
      )[0]?.codeNm;
      if (siName === guName) {
        search(`${siName} ${dongName}`);
        setKeyword(`${siName} ${dongName}`);
      } else {
        search(`${siName} ${guName} ${dongName}`);
        setKeyword(`${siName} ${guName} ${dongName}`);
      }
    }
  };

  return (
    <div className='absolute top-0 left-0 flex flex-col w-full h-full pt-20 overflow-hidden'>
      <div className='flex items-center justify-center px-5 py-2 gap-x-5'>
        <select
          value={siValue}
          onChange={(e) => handleSiValue(e.target.value)}
          className='w-full max-w-xs select select-bordered'
        >
          <option value=''>시 선택</option>
          {sido.map((item) => (
            <option key={item.sido} value={item.sido}>
              {item.codeNm}
            </option>
          ))}
        </select>

        <select
          value={guValue}
          onChange={(e) => handleGuValue(e.target.value)}
          className='w-full max-w-xs select select-bordered'
        >
          <option value=''>구 선택</option>
          {sigugun
            .filter((item) => item.sido === siValue)
            .map((item) => (
              <option key={item.sigugun} value={item.sigugun}>
                {item.codeNm}
              </option>
            ))}
        </select>

        <select
          value={dongValue}
          onChange={(e) => setDongValue(e.target.value)}
          className='w-full max-w-xs select select-bordered'
        >
          <option value=''>동 선택</option>
          {dong
            .filter((item) => item.sido === siValue && item.sigugun === guValue)
            .map((item) => (
              <option key={item.dong} value={item.dong}>
                {item.codeNm}
              </option>
            ))}
        </select>
        <button type='button' onClick={handleSubmit} className='btn btn-outline'>
          검색
        </button>
      </div>
      <div className='flex flex-col h-full md:flex-row-reverse'>
        <HomeMap keyword={keyword} />
        <HomeList />
      </div>
    </div>
  );
}
