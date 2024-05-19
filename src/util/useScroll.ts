import { RefObject, useEffect, useState } from 'react';

export const useScroll = (ref: RefObject<HTMLUListElement>) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const handleScroll = () => {
      if (current) {
        const fromBottom = current.scrollHeight - current.scrollTop <= current.clientHeight + 150;
        setShow(!fromBottom);
      }
    };

    if (current) {
      current.addEventListener('scroll', handleScroll);
    }

    return () => {
      current!.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return show;
};
