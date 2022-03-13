import { useState } from 'react';
import {
  StAbsoluteWrapper,
  StBlackBlur,
  StWrapper,
  StButton,
  StCancelButton,
  StButtonWrapper,
} from './style';

type BottomSheetButton = {
  icon: string;
  label: string;
  onClick: () => void;
};

type BottomSheetProps = {
  isOpened: boolean;
  buttonList: BottomSheetButton[];
  closeBottomSheet: () => void;
};

function BottomSheet(props: BottomSheetProps) {
  const { buttonList: buttons, isOpened: opened, closeBottomSheet: close } = props;
  const [isClosing, setIsClosing] = useState(false);
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      close();
      setIsClosing(false);
    }, 1000);
  };

  return opened ? (
    <StAbsoluteWrapper>
      <StBlackBlur onClick={closeModal} isClosing={isClosing} />
      <StWrapper isClosing={isClosing}>
        <StButtonWrapper>
          {buttons.map((button) => (
            <StButton onClick={button.onClick} key={button.label}>
              <img src={button.icon} alt={button.label} />
              <div>{button.label}</div>
            </StButton>
          ))}
        </StButtonWrapper>
        <StCancelButton onClick={closeModal}>취소</StCancelButton>
      </StWrapper>
    </StAbsoluteWrapper>
  ) : (
    <></>
  );
}

export default BottomSheet;
