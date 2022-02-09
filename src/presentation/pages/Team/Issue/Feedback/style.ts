import { ANIMATION } from '@styles/common/animation';
import { FULL_WIDTH_BUTTON, CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { COMMON_INPUT } from '@styles/common/input';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const StBlackBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.44);
  z-index: 50;

  animation: ${ANIMATION.FADE_IN} 1s;
`;

export const StWrapper = styled.div`
  position: absolute;
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: ${COLOR.WHITE};
  bottom: 0;
  padding: 44px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 60;
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

export const StButton = styled.button`
  ${FULL_WIDTH_BUTTON};
  background-color: ${COLOR.GRAY_3};
  color: ${COLOR.WHITE};
  
  :not(:disabled) {
    ${CORAL_MAIN_BUTTON};
  }
`;

export const StTextarea = styled.textarea`
  ${COMMON_INPUT}
  width: 100%;
  resize: unset;
  height: 104px;
`;
