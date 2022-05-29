import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StNewIssue = styled.div`
  padding: 24px 20px 48px 20px;
  & > p {
    ${FONT_STYLES.R_16_TITLE};
    color: ${COLOR.GRAY_5};
    margin-top: 14px;
    margin-bottom: 4px;
  }
`;

export const StTitleWrapper = styled.div`
  ${FONT_STYLES.SB_24_TITLE};
`;

export const StCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;

export const StCategory = styled.button<{ selected: boolean }>`
  width: 83px;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? '#FFF1F1' : COLOR.GRAY_1)};
  color: ${({ selected }) => (selected ? COLOR.CORAL_MAIN : COLOR.GRAY_5)};
  ${FONT_STYLES.R_14_TITLE}
`;

export const StQuestionWrapper = styled.div`
  ${FONT_STYLES.SB_16_TITLE};
  color: ${COLOR.GRAY_7};
  line-height: 162%;
  margin-top: 44px;
  margin-bottom: 24px;
  & > span {
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_16_TITLE};
    margin-left: 3px;
  }
`;

export const StSelectWrapper = styled.div`
  align-self: center;
`;

export const StTextera = styled.textarea`
  width: 100%;
  height: 104px;
  border: 1px solid ${COLOR.GRAY_3};
  box-sizing: border-box;
  border-radius: 16px;
  resize: none;
  padding: 18px 16px 18px 16px;
  ${FONT_STYLES.R_16_BODY};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${COLOR.GRAY_4};
  }
`;

export const StUploadContainer = styled.div`
  width: 100%;
  height: 149px;
  border: 1.4px dashed ${COLOR.GRAY_3};
  box-sizing: border-box;
  border-radius: 16px;
  color: ${COLOR.GRAY_5};
  font-size: 16px;
  line-height: 100%;
  background-color: white;
  padding-top: 25px;
`;

export const StButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 58px;
  background-color: ${COLOR.GRAY_3};
  color: white;
  border-radius: 18px;
  font-size: 16px;
  :not(:disabled) {
    background-color: ${COLOR.CORAL_MAIN};
  }
`;

export const StPhotoUploadMiddleDesc = styled.div`
  ${FONT_STYLES.R_16_TITLE};
  color: ${COLOR.GRAY_4};
  margin-top: 14px;
`;

export const StPhotoUploadImage = styled.img`
  width: 55px;
  height: 55px;
`;
