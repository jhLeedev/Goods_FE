import { useEffect, useRef } from 'react';
import { IChatLog } from '../../types/interface';
import { useScroll } from '../../util/useScroll';

export default function ChatHistory({ chatLog }: { chatLog: IChatLog[] }) {
  const ulRef = useRef<HTMLUListElement>(null);
  const show = useScroll(ulRef);

  const handleClick = () => {
    if (ulRef.current) {
      ulRef.current.scrollTop = ulRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <ul className='relative w-full py-3 overflow-y-auto h-3/5' ref={ulRef}>
      {chatLog?.map((item) => (
        <li
          key={item.created_at}
          className={`chat  ${item.sender === '구매자' ? 'chat-end' : 'chat-start'}`} // sender가 나 인지 아닌지만 알 수 있으면
        >
          <div
            className={`text-black chat-bubble ${
              item.sender === '구매자' ? 'bg-primary-content' : 'bg-neutral-content'
            }`}
          >
            {item.message}
          </div>
          <div className='opacity-50 chat-footer'>{item.created_at}</div>
        </li>
      ))}

      {show && (
        <button
          onClick={handleClick}
          className='hover:bg-[rgba(0,0,0,.6)] sticky bottom-0 flex items-center justify-center w-10 h-10 p-1 ml-auto mr-3 text-white bg-black rounded-full '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </button>
      )}
    </ul>
  );
}
