import { imgNoTeammates } from '@assets/images';
import { ANIMATION } from '@styles/common/animation';
import { FULL_WIDTH_BUTTON, CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { COMMON_INPUT } from '@styles/common/input';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 20;
`;

export const StBlackBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.44);
  z-index: 55;

  animation: ${ANIMATION.FADE_IN} 1s;
`;

export const StWrapper = styled.div`
  position: fixed;
  width: min(100vw, 390px);
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
  color: ${COLOR.GRAY_7};
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

export const StEmptyWrapper = styled(StWrapper)`
  background-image: url(${imgNoTeammates});
  background-size: cover;
  min-height: 567px;
  align-items: center;
  justify-content: center;
  & > div {
    text-align: center;
    ${FONT_STYLES.M_16_TITLE};
    color: ${COLOR.GRAY_6};
    line-height: 24px;
  }
  & > button {
    ${CORAL_MAIN_BUTTON};
    width: 214px;
    border-radius: 14px;
    ${FONT_STYLES.M_15_TITLE};
    padding: 17.5px 0;
    margin-top: 10px;
  }
`;

export const StTargetUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  & > img {
    width: 60px;
    height: 60px;
    border-radius: 118px;
    margin-bottom: 12px;
    object-fit: cover;
  }
  & > div {
    ${COLOR.GRAY_8}
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: -0.01em;
  }
`;
