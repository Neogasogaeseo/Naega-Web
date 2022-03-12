import { Toast } from '@stores/toast';
import { useEffect, useState } from 'react';
import { StToastItem } from './style';

function ToastItem(props: Toast) {
  const { content, bottom, duration } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true);
      clearTimeout(setExistTimeout);
    }, duration ?? 1000);

    return () => clearTimeout(setExistTimeout);
  }, []);

  return (
    <StToastItem bottom={bottom} isClosing={isClosing}>
      {content}
    </StToastItem>
  );
}

export default ToastItem;
