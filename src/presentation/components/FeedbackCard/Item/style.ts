import styled from 'styled-components';

import { IcMeatball, icPicked, icUnpicked } from '@assets/icons';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StFeedbackCard = styled.div`
  padding: 24px 4px 25px 4px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  border-bottom: 1px solid ${COLOR.GRAY_3};
`;

export const StBookmark = styled.div<{ selected: boolean }>`
  background-image: url(${(props) => (props.selected ? icPicked : icUnpicked)});
  background-position: center;
  width: 52px;
  height: 24px;
`;

export const StMeatBall = styled(IcMeatball)`
  position: absolute;
  right: 0;
`;

export const StHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 14px;
  height: 24px;

  & > div:nth-child(1) {
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.SB_16_BODY}
  }
  & > div:nth-child(2) {
    display: flex;
    color: ${COLOR.GRAY_5};
    align-items: center;
    gap: 4px;
    ${FONT_STYLES.R_13_TITLE}
  }
  & > div:nth-child(3) {
    position: absolute;
    right: 0;
  }
`;

export const StBody = styled.div`
  ${FONT_STYLES.R_14_BODY}
  line-height: 140%;
  color: ${COLOR.GRAY_7};
  white-space: pre-line;
`;
