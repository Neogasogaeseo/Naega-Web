import { StModalWrapper } from './style';

interface ModalWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function ModalWrapper(props: ModalWrapperProps) {
  const { children, isOpen } = props;
  return <StModalWrapper isOpen={isOpen}>{children}</StModalWrapper>;
}
