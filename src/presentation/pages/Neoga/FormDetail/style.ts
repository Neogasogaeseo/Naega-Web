import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StNeogaDetailForm = styled.div`
  & > div:first-child {
    & > *:first-child {
      margin-top: 50px;
    }
  }
`;

export const StLink = styled.div`
  display: flex;
  cursor: pointer;
  width: fit-content;
  margin: 10px 0px 0px 20px;
  color: ${COLOR.CORAL_MAIN};
  & > img {
    padding-right: 5px;
  }
  & > p {
    margin-top: 3px;
  }
`;

export const StFeedName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & > span {
    ${FONT_STYLES.R_14_TITLE};
    color: ${COLOR.GRAY_5};
  }
  & > span:first-child {
    ${FONT_STYLES.SB_14_TITLE};
    color: ${COLOR.GRAY_6};
  }
`;

export const StDate = styled.div`
  display: flex;
  float: right;
  margin: 5px 20px 9px 0px;
  color: ${COLOR.GRAY_4};
  ${FONT_STYLES.R_13_TITLE};
`;

export const StQuestion = styled.div`
  & > span {
    color: ${COLOR.CORAL_MAIN};
    padding-right: 12px;
    font-size: 15px;
    display: flex;
  }
  display: flex;
  background-color: ${COLOR.GRAY_1};
  width: calc(100% - 40px);
  margin: 0 auto;
  border-radius: 18px;
  padding: 16px 19px 16px 20px;
  font-size: 15px;
  line-height: 143.99%;
  color: ${COLOR.GRAY_7};
`;

export const StKeyword = styled.div`
  width: 100%;
  padding: 20px;
  & > p {
    margin: 12px 0px 28px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
`;

export const StDivisionLine = styled.div`
  height: 8px;
  background-color: ${COLOR.GRAY_1};
`;

export const StFeedDate = styled.div`
  color: ${COLOR.GRAY_4};
  display: flex;
  align-items: center;
  gap: 10px;
  & div {
    ${FONT_STYLES.R_14_TITLE};
  }
  & img {
    width: 22px;
    cursor: pointer;
  }
`;

export const StNeogaDetailFormCard = styled.div`
  margin: 0 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #efefef;

  &:last-child {
    border-bottom: none;
  }
`;

export const StFeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0px 12px 0px;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_7};
`;

export const StFeedContent = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 140%;
  white-space: pre-line;
`;

export const StFeedTitle = styled.div`
  margin: 32px 20px 23px 20px;
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.01em;
  & > span {
    color: ${COLOR.CORAL_MAIN};
  }
`;

export const StEmptyFeedback = styled.div`
  display: grid;
  place-content: center;
  margin-top: 127px;
`;

export const StMoreWrapper = styled.div`
  & > hr {
    margin-top: 32px;
    border: none;
    border-bottom: 1px solid ${COLOR.GRAY_2};
    border-radius: 2px;
  }
`;

export const StMoreButton = styled.div`
  border-top: 1px solid #efefef;
  color: ${COLOR.GRAY_4};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 23px;
  padding-top: 18px;
  & > img {
    margin-left: 8px;
  }
`;
