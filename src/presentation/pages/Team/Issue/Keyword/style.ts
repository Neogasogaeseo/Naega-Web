import { ANIMATION } from '@styles/common/animation';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
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

export const StHeader = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${COLOR.GRAY_2};
  position: relative;
  & > div:nth-child(1) {
    color: ${COLOR.GRAY_8};
    text-align: center;
    ${FONT_STYLES.SB_17_BODY}
  }
  & > div:nth-child(2) {
    position: absolute;
    color: ${COLOR.CORAL_MAIN};
    right: 24px;
    top: 13px;
    ${FONT_STYLES.M_15_TITLE}
  }
`;
