import { useEffect, useState } from 'react';

import { StModalWrapper } from './style';

interface ModalWrapperProps {
  children: React.ReactNode;
  isOpened: boolean;
}

export default function ModalWrapper(props: ModalWrapperProps) {
  const { children, isOpened } = props;
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    if (isOpened) setTimeout(() => setIsAnimation(false), 300);
    else setIsAnimation(true);
  }, [isOpened]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <StModalWrapper isOpened={isOpened} isAnimation={isAnimation}>
      {children}
    </StModalWrapper>
  );
}
