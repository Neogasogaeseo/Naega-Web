import { SCROLL_BOTTOM_PADDING } from '@utils/constant';
import { useCallback, useEffect, useState } from 'react';

export function useScrollHeight() {
  const [isInitialState, setIsInitialState] = useState(true);
  const [isBottomReached, setIsBottomReached] = useState([]);
  const handleScroll = useCallback(() => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const documentHeight = document.documentElement.clientHeight;
    if (scrollTop + documentHeight >= scrollHeight - SCROLL_BOTTOM_PADDING) {
      setIsBottomReached([]);
      setIsInitialState(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return { isBottomReached, isInitialState };
}
