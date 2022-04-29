import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoAnswerCard = styled.div`
  margin: 24px 0;
  border-bottom: 1px solid ${COLOR.GRAY_3};
  padding: 0 2px;
  padding-bottom: 24px;

  & img {
    width: 28px;
    height: 28px;
  }
  & img:nth-child(3) {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    display: grid;
    grid-template-columns: 32px auto 24px;
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
