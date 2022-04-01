import { useEffect, useState } from 'react';

import { StModalWrapper } from './style';

interface ModalWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function ModalWrapper(props: ModalWrapperProps) {
  const { children, isOpen } = props;
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    if (isOpen) setTimeout(() => setIsAnimation(false), 300);
    else setIsAnimation(true);
  }, [isOpen]);

  return (
    <StModalWrapper isOpen={isOpen} isAnimation={isAnimation}>
      {children}
    </StModalWrapper>
  );
}
