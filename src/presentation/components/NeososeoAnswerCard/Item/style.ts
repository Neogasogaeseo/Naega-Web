import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoAnswerCard = styled.div`
  border-bottom: 1px solid ${COLOR.GRAY_3};
  padding: 25px 0;

  & img {
    width: 28px;
    height: 28px;
  }
  & img:nth-child(3) {
    width: 52px;
    height: 24px;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    display: grid;
    grid-template-columns: 32px auto 52px;
    align-items: center;
    gap: 6px;
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.M_15_TITLE};
  }
  & > div:nth-child(2) {
    margin-top: 8px;
    margin-bottom: 16px;
    ${FONT_STYLES.R_14_BODY}
    color: ${COLOR.GRAY_7};
    word-break: keep-all;
    line-height: 20px;
    white-space: pre-line;
  }
`;
