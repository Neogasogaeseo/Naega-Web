import { IcArrowViewMore, IcArrowViewMoreClose } from '@assets/icons';
import { StExpandListButton } from './style';

type ExpandListButtonProps = {
  onClick: () => void;
  isExpanded: boolean;
};

function ExpandListButton(props: ExpandListButtonProps) {
  const { onClick, isExpanded } = props;
  return (
    <StExpandListButton onClick={onClick}>
      <span>{isExpanded ? '접기' : '더보기'}</span>
      {isExpanded ? <IcArrowViewMoreClose /> : <IcArrowViewMore />}
    </StExpandListButton>
  );
}

export default ExpandListButton;
