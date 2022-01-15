import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StJoinForm = styled.div`
  align-self: center;
  margin: 20px;
`;
export const StDetailWrapper = styled.div`
  font-size: 15px;
  line-height: 100%;
  color: ${COLOR.GRAY_5};
  margin-top: 20px;
  margin-bottom: 35px;
`;
export const StNoticeWrapper = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
`;

export const StInputWrapper = styled.div`
  font-size: 16px;
  line-height: 162%;
  margin-top: 20px;
  & > p {
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    color: ${COLOR.GRAY_7};
  }
`;

export const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
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

export const StProfileImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const StPhotoUploadImage = styled.img`
  display: flex;
  justify-content: center;
`;
