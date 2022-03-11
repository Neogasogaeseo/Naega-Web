import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StQuestionCard = styled.div`
  width: 284px;
  height: 364px;
  background-color: ${COLOR.WHITE};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${COLOR.GRAY_15};
  border-radius: 18px;
  & > img {
    margin-top: 42px;
  }
  & > *:nth-child(2) {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 143.99%;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_7};
    width: 100%;
    margin-top: 28px;
    white-space: pre-line;
  }
  & > *:nth-child(3) {
    ${FONT_STYLES.R_15_TITLE}
    color: ${COLOR.GRAY_5};
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.01em;
    margin-top: 15px;
  }
  & > *:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 272px;
    width: 304px;
    & > hr {
      width: 232px;
      border: 1px dashed ${COLOR.GRAY_2};
    }
  }
`;

export const StCircle = styled.div`
  width: 23px;
  height: 23px;
  background-color: ${COLOR.GRAY_1};
  border-radius: 50%;
`;
