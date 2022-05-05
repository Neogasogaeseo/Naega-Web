import { useNavigate } from 'react-router-dom';

import { icBack } from '@assets/icons';
import { StBack, StCommonNavigation, StSubmitButton, StTitle } from './style';

interface CommonNavigationProps {
  isBack?: boolean;
  onClickBack?: () => void;
  title?: string;
  submitButton?: { content: string; onClick: () => void };
}

export default function CommonNavigation(props: CommonNavigationProps) {
  const { isBack = true, onClickBack = () => navigate(-1), title, submitButton } = props;
  const navigate = useNavigate();
  return (
    <StCommonNavigation>
      {isBack && <StBack src={icBack} onClick={onClickBack} />}
      {title && <StTitle>{title}</StTitle>}
      {submitButton && (
        <StSubmitButton onClick={submitButton.onClick}>{submitButton.content}</StSubmitButton>
      )}
    </StCommonNavigation>
  );
}
