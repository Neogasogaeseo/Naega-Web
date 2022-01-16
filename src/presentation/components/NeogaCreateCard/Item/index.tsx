import { IcArrowRight } from '@assets/icons';
import React from 'react';
import { StNeogaCreateCardItem } from './style';

interface NeogaCreateCardItemProps {
  title: string;
  content: string;
  src: string;
  backgroundColor: string;
  onClick: () => void;
}

function NeogaCreateCardItem(props: NeogaCreateCardItemProps) {
  const { title, content, src, backgroundColor } = props;
  return (
    <StNeogaCreateCardItem color={backgroundColor}>
      <img src={src} alt={content} />
      <div>
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <IcArrowRight />
    </StNeogaCreateCardItem>
  );
}

export default NeogaCreateCardItem;
