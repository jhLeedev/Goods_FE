import { ChangeEvent, useState } from 'react';

export default function PointCharge() {
  const [point, setPoint] = useState('');

  /* 추후 잔액 조회 api 구현 예정 */
  const curPoint = 500;

  const [newPoint, setNewPoint] = useState(String(curPoint));

  const handlePoint = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const handledPoint = value.replace(/[^0-9]/g, '');
    setPoint(handledPoint);
  };

  const addComma = (point: string): string => {
    const commaPoint = point.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return commaPoint;
  };

  const handleAddPoint = () => {
    const afterPointNum = curPoint + Number(point);
    const afterPointStr = addComma(String(afterPointNum));
    setNewPoint(afterPointStr);
  };

  return (
    <div className='w-full px-5 flex flex-col items-center md:mx-auto md:max-w-5xl'>
      <h1 className='text-center my-12 text-2xl font-bold md:text-3xl'>포인트 충전</h1>
      <div className='w-full max-w-lg mt-20'>
        <h2 className='my-4 text-lg'>* 충전할 금액을 입력해주세요</h2>
        <label
          htmlFor='pointInput'
          className='w-full max-w-lg input input-bordered flex flex-row-reverse items-center gap-2 font-bold md:max-w-5xl'
        >
          원
          <input
            id='pointInput'
            type='text'
            value={addComma(point) || ''}
            onChange={handlePoint}
            onBlur={handleAddPoint}
            className='grow text-right'
          />
        </label>
      </div>
      <div className='w-full max-w-lg h-40 my-10 px-5 py-5 flex flex-col justify-center border border-neutral md:px-10'>
        <div className='w-full flex flex-auto justify-between items-center'>
          <p className='text-lg font-bold md:text-xl'>현재 포인트</p>
          {/* 사용자 포인트 받아오기 */}
          <p className='text-lg font-bold md:text-xl'>{`${curPoint}P`}</p>
        </div>
        <div className='w-full flex flex-auto justify-between items-center'>
          <p className='text-lg font-bold md:text-xl'>충전 후 포인트</p>
          <p className='text-lg font-bold md:text-xl'>{`${newPoint}P`}</p>
        </div>
      </div>
      <button
        onClick={() => console.log(String(point))}
        className={`w-full max-w-lg btn btn-accent${point ? '' : ' btn-disabled'}`}
      >
        충전하기
      </button>
    </div>
  );
}
