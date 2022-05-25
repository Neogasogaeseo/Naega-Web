import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StTeamEdit = styled.div`
  padding: 0 20px;
  width: 100%;
  position: relative;
  & > *:nth-child(1) {
    margin-top: 23px;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
  & > *:nth-child(2) {
    margin-top: 31px;
    position: relative;
    width: 88px;
    height: 88px;
  }
  & > *:nth-child(7) {
    margin-top: 48px;
    width: 100%;
    height: 46px;
    ${FONT_STYLES.M_14_TITLE}
    line-height: 100%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_5};
    border: 1px solid #e9e9e9;
    border-radius: 16px;
    background-color: transparent;
  }
  & > *:nth-child(8) {
    margin-top: 14px;
    margin-bottom: 177px;
    width: 100%;
    ${FONT_STYLES.R_12_TITLE}
    line-height: 100%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_4};
  }
`;

export const StRelativeWrapper = styled.div`
  position: relative;
`;
