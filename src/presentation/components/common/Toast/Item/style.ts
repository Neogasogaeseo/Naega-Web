import styled from 'styled-components';
import { ANIMATION } from '@styles/common/animation';

export const StToastItem = styled.div<{ bottom?: number; isClosing: boolean }>`
  position: absolute;
  background-color: rgb(0, 0, 0, 0.5);
  height: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  color: white;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  bottom: ${({ bottom }) => bottom ?? 26}px;
  animation: 0.3s forwards
    ${({ isClosing }) => (isClosing ? ANIMATION.FADE_OUT : ANIMATION.FADE_IN)};
`;
