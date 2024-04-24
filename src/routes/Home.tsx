import { useRecoilValue } from 'recoil';
import { testState } from '../store/test';

export default function Home() {
  const test = useRecoilValue(testState);
  const onClick = () => {
    return fetch('/test', {
      method: 'POST',
      body: JSON.stringify({ id: Date.now(), content: 'aa' }),
    });
  };
  return (
    <div>
      <h1 className='text-3xl font-bold underline mb-5'>Home</h1>
      <h1>recoil test : {test ?? 'fail'}</h1>
      <button className='btn btn-outline' onClick={onClick}>
        add
      </button>
    </div>
  );
}
