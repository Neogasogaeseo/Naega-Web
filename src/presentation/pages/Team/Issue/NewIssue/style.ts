import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNewIssue = styled.div`
  & > p {
    font-size: 15px;
    line-height: 143.99%;
    color: #575757;
    margin-bottom: 22px;
  }
`;

export const StTitleWrapper = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 143.99%;
`;

export const StSelectCategory = styled.button`
  width: 83px;
  margin-right: 6px;
  box-sizing: border-box;
  border-radius: 14px;
  margin-bottom: 11px;
  padding: 10px;
  background-color: ${COLOR.GRAY_1};
  color: ${COLOR.GRAY_5};
`;

export const StQuestionWrapper = styled.div`
  color: #575757;
  font-weight: 600;
  font-size: 16px;
  line-height: 162%;
  margin-bottom: 14px;
`;

export const StSelectWrapper = styled.div`
  align-self: center;
`;

export const StTextera = styled.textarea`
  width: 350px;
  height: 104px;
  border: 1px solid ${COLOR.GRAY_3};
  box-sizing: border-box;
  border-radius: 16px;
  resize: none;
  padding: 18px 16px 18px 16px;
  font-family: 'Pretendard';
  :focus {
    outline: none;
  }
`;

export const StOptionWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const StUploadContainer = styled.button`
  width: 350px;
  height: 149px;
  border: 1.4px dashed ${COLOR.GRAY_3};
  box-sizing: border-box;
  border-radius: 16px;
  color: ${COLOR.GRAY_5};
  font-size: 16px;
  line-height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;

  & > imput {
    display: none;
  }
`;

export const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 156px;
  width: 350px;
  height: 58px;
  background-color: ${COLOR.GRAY_5};
  color: white;
  border-radius: 18px;
  font-size: 16px;
  :not(:disabled) {
    background-color: ${COLOR.CORAL_MAIN};
  }
`;

export const StPhotoUploadMiddleDesc = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const StPhotoUploadImage = styled.img`
  width: 55px;
  height: 55px;
`;
