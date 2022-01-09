import { ANIMATION } from '@styles/common/animation';
import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR.WHITE};
  z-index: 3;
  animation: ${ANIMATION.SWIPE_FROM_RIGHT} 1s;
`;
