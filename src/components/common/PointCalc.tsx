import { ChangeEvent, useEffect, useState } from 'react';
import { IPointCalc } from '../../types/interface';

export default function PointCalc({ type, bank, account, password }: IPointCalc) {
  const [point, setPoint] = useState('');
  const [isNegative, setIsNegative] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const typeDescription: { [key: string]: string } = {
    charge: '충전',
    transfer: '송금',
    payment: '결제',
  };

  const typeStr = typeDescription[type];

  /* 추후 잔액 조회 api 구현 예정 */
  const curPoint = 1000;

  const addComma = (point: string): string => {
    const commaPoint = point.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return commaPoint;
  };

  const [newPoint, setNewPoint] = useState(addComma(String(curPoint)));

  const handlePoint = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const handledPoint = value.replace(/[^0-9]/g, '');
    setPoint(handledPoint);
  };

  const handleAddPoint = () => {
    const afterPointNum = type === 'charge' ? curPoint + Number(point) : curPoint - Number(point);
    if (afterPointNum < 0) {
      setIsNegative(true);
      return;
    }
    setIsNegative(false);
    const afterPointStr = addComma(String(afterPointNum));
    setNewPoint(afterPointStr);
  };

  useEffect(() => {
    if (
      (type === 'transfer' && bank && account && point) ||
      (type === 'charge' && point) ||
      (type === 'payment' && password && point)
    ) {
      return setIsValid(true);
    }
    return setIsValid(false);
  }, [bank, account, point, type, password]);

  const handleSubmit = () => {
    if (type === 'transfer') {
      console.log({
        point: Number(point),
        bank,
        account,
      });
    } else if (type === 'payment') {
      console.log({
        point: Number(point),
        password,
      });
    } else {
      console.log({
        point,
      });
    }
  };

  return (
    <>
      <div className='w-full max-w-lg mt-6'>
        <h2 className='my-4 text-lg'>* {typeStr}할 금액을 입력해주세요</h2>
        <label
          htmlFor='pointInput'
          className='flex flex-row-reverse items-center w-full max-w-lg gap-2 font-bold input input-bordered md:max-w-5xl'
        >
          원
          <input
            id='pointInput'
            type='text'
            value={addComma(point) || ''}
            onChange={handlePoint}
            onBlur={handleAddPoint}
            className='text-right grow'
          />
        </label>
        {isNegative && (
          <p className='mt-2 text-sm font-normal text-right text-red-700'>
            현재 포인트보다 많은 금액은 {typeStr}할 수 없습니다.
          </p>
        )}
      </div>
      <div className='flex flex-col justify-center w-full h-40 max-w-lg px-5 py-5 my-10 border border-neutral md:px-10'>
        <div className='flex items-center justify-between flex-auto w-full'>
          <p className='text-lg font-bold md:text-xl'>현재 포인트</p>
          {/* 사용자 포인트 받아오기 */}
          <p className='text-lg font-bold md:text-xl'>{`${addComma(String(curPoint))}P`}</p>
        </div>
        <div className='flex items-center justify-between flex-auto w-full'>
          <p className='text-lg font-bold md:text-xl'>{typeStr} 후 포인트</p>
          <p className='text-lg font-bold md:text-xl'>{`${newPoint}P`}</p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className={`w-full max-w-lg btn btn-accent${isValid ? '' : ' btn-disabled'}`}
      >
        {typeStr}하기
      </button>
    </>
  );
}
