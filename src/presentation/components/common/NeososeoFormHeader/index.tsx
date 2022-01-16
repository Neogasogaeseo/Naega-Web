import React from 'react';
import { StNeososeoFormHeader } from './style';

interface NeososeoFormHeaderProps {
  title: string;
  image: string;
}

function NeososeoFormHeader(props: NeososeoFormHeaderProps) {
  const { title, image } = props;
  return (
    <StNeososeoFormHeader>
      <div>{title}</div>
      <img src={image} alt={title} />
    </StNeososeoFormHeader>
  );
}

export default NeososeoFormHeader;
