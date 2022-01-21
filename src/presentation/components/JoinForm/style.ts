import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StJoinForm = styled.div`
  align-self: center;
  margin: 20px;
`;

export const StNoticeWrapper = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin: 20px 0px 72px 0px;
`;

export const StInputWrapper = styled.div`
  font-size: 16px;
  line-height: 162%;
  margin-top: 20px;
  & > p {
    margin: 44px 0px 10px 10px;
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
  margin-top: 137px;
  width: 350px;
  height: 58px;
  background-color: ${COLOR.GRAY_3};
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
