import styled from 'styled-components';
import { ANIMATION } from '@styles/common/animation';

export const StToastItem = styled.div<{ bottom?: number; isClosing: boolean }>`
  position: absolute;
  margin: 0 20px;
  background-color: rgb(0, 0, 0, 0.5);
  height: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  color: white;
  width: 100%;
  bottom: ${({ bottom }) => bottom ?? 26}px;
  animation: 0.3s forwards
    ${({ isClosing }) => (isClosing ? ANIMATION.FADE_OUT : ANIMATION.FADE_IN)};
`;
