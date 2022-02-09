import styled from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StQuestion = styled.div`
  width: 100%;
  height: min(400px, 100vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StFlexWrapper = styled.div`
  position: relative;
  & svg {
    width: 100%;
  }
`;

export const StContent = styled.div`
  position: absolute;
  top: calc(min(400px, 100vw) * 10.5 / 39);
  left: calc(min(400px, 100vw) * 9.6 / 39);
  width: calc(min(400px, 100vw) * 21 / 39);
  & > div {
    width: calc(min(400px, 100vw) * 21 / 39);
    word-break: keep-all;
    word-wrap: break-word;
    display: inline-block;
    white-space: pre-line;
  }
  & > div:first-child {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 19px;
    line-height: 100%;
    letter-spacing: -0.015em;
    color: ${COLOR.CORAL_MAIN};
  }
  & > div:last-child {
    ${FONT_STYLES.M_16_BODY}
    line-height: 143.99%;
    letter-spacing: -0.01em;
    padding-right: 24px;
    word-break: keep-all;
  }
`;
