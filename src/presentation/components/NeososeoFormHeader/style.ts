import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  word-break: keep-all;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    line-height: 143.99%;
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.SB_22_BODY}
  }

  & div:first-child {
    flex: 1.4;
    white-space: pre-line;
  }

  & div:last-child {
    flex: 0.6;
  }

  & img {
    width: 68px;
    height: 68px;
    border-radius: 34px;
    background-color: ${COLOR.GRAY_1};
    float: right;
  }
`;
