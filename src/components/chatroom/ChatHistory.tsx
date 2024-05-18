import { IChatLog } from '../../types/interface';

export default function ChatHistory({ chatLog }: { chatLog: IChatLog[] }) {
  return (
    <div className='w-full overflow-y-auto h-3/5'>
      {chatLog?.map((item) => (
        <div
          key={item.created_at}
          className={`chat  ${item.sender === '구매자' ? 'chat-end' : 'chat-start'}`} // sender가 나 인지 아닌지만 알 수 있으면
        >
          <div className='relative text-white bg-orange-400 chat-bubble'>{item.message}</div>
          <div className='opacity-50 chat-footer'>{item.created_at}</div>
        </div>
      ))}
    </div>
  );
}
