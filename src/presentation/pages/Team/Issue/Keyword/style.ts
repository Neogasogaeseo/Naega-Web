import { ANIMATION } from '@styles/common/animation';
import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR.WHITE};
  z-index: 300;
  animation: ${ANIMATION.SWIPE_FROM_RIGHT} 1s;
`;

export const StTitleWrapper = styled.div`
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 12px;
  background-color: ${COLOR.GRAY_1};

  & > span:nth-child(1) {
    color: ${COLOR.CORAL_MAIN};
  }
`;

export const StWhiteWrapper = styled.div`
  padding: 20px 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
