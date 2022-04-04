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

  return (
    <StModalWrapper isOpened={isOpened} isAnimation={isAnimation}>
      {children}
    </StModalWrapper>
  );
}
