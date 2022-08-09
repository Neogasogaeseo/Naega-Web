import { IcWarning, IcWarningCoral } from '@assets/icons';
import ModalWrapper from '../ModalWrapper';
import { StCommonModal, StDescription } from './style';

interface CommonModalProps {
  onClickConfirm: () => void;
  onClickCancel: () => void;
  title: string;
  description?: string;
  isOpened: boolean;
  isCoral: boolean;
}

export default function CommonModal(props: CommonModalProps) {
  const { onClickConfirm, onClickCancel, title, description, isOpened, isCoral } = props;
  return (
    <ModalWrapper isOpened={isOpened}>
      <StCommonModal isCoral={isCoral}>
        {isCoral ? <IcWarningCoral /> : <IcWarning />}
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
