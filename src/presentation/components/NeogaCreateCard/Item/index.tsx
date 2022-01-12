import React from 'react';
import { StNeogaCreateCardItem, StNew } from './style';

interface NeogaCreateCardItemProps {
  content: string;
  isNew: boolean;
  src: string;
  backgroundColor: string;
  onClick: () => void;
}

function NeogaCreateCardItem(props: NeogaCreateCardItemProps) {
  const { content, isNew, src, backgroundColor } = props;
  return (
    <StNeogaCreateCardItem color={backgroundColor}>
      <div>{content}</div>
      {isNew && <StNew>NEW</StNew>}
      <img src={src} alt={content} />
    </StNeogaCreateCardItem>
  );
}

export default NeogaCreateCardItem;
