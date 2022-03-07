import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StJoinForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const StNoticeWrapper = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin: 54px 0px 72px 0px;
`;

export const StInputWrapper = styled.div`
  & > div:nth-of-type(2n + 1) {
    margin-left: 4px;
  }
`;

export const StButton = styled.button`
  margin-top: 137px;
  margin-bottom: 48px;
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

export const StProfileImg = styled.div`
  display: flex;
  justify-content: center;
`;