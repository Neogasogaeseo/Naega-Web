import { IcWarning } from '@assets/icons';
import ModalWrapper from '../ModalWrapper';
import { StCommonModal, StDescription } from './style';

interface CommonModalProps {
  onClickConfirm: () => void;
  onClickCancel: () => void;
  title: string;
  description?: string;
  isOpened: boolean;
}

export default function CommonModal(props: CommonModalProps) {
  const { onClickConfirm, onClickCancel, title, description, isOpened } = props;
  return (
    <ModalWrapper isOpened={isOpened}>
      <StCommonModal>
        <IcWarning />
        <div>{title}</div>
        {description && <StDescription>{description}</StDescription>}
        <div>
          <button onClick={onClickCancel}>취소</button>
          <button onClick={onClickConfirm}>확인</button>
        </div>
      </StCommonModal>
    </ModalWrapper>
  );
}
