import React from 'react';
import { StWrapper } from './style';

interface Keyword {
  content: string;
  color: string;
}

interface Props extends Keyword {
  isMutable: boolean;
  onDeleteClick?: () => void;
}

function KeywordItem(props: Props) {
  const { isMutable, content, color, onDeleteClick } = props;
  return (
    <StWrapper color={color}>
      <div>{content}</div>
      {isMutable && <div onClick={onDeleteClick}>X</div>}
    </StWrapper>
  );
}

export default KeywordItem;
