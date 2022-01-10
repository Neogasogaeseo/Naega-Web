import { ANIMATION } from '@styles/common/animation';
import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const StBlackBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.44);

  animation: ${ANIMATION.FADE_IN} 1s;
`;

export const StWrapper = styled.div`
  position: absolute;
  width: 100vw;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: ${COLOR.WHITE};
  bottom: 0;
  padding: 44px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${ANIMATION.SWIPE_UP({ from: 0 })} 1s;
`;

export const StSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StSectionTitle = styled.div`
  color: ${COLOR.GRAY_8};
  font-size: 16px;
  font-weight: 600;
`;

export const StButton = styled.div`
  ${CORAL_MAIN_BUTTON}
  ${FULL_WIDTH_BUTTON}
`;