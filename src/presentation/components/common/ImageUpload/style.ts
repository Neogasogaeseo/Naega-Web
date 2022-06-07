import React from 'react';
import styled from 'styled-components';

export const StThumbnail = styled.img<{ styles: React.CSSProperties }>`
  object-fit: cover;
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height};
  border-radius: ${(props) => props.styles.borderRadius ?? 0};
`;

export const StImageUpload = styled.div`
  cursor: pointer;
  position: relative;
`;

export const StThumbnailWrapper = styled.div<{ styles: React.CSSProperties }>`
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height};
  border-radius: ${(props) => props.styles.borderRadius ?? 0};
`;

export const StDefaultChildren = styled.img<{ styles: React.CSSProperties }>`
  bottom: ${(props) => props.styles.bottom ?? 0};
  right: ${(props) => props.styles.right ?? 0};
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height ?? props.styles.width};
  position: absolute;
`;
