import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StJoinCompleteForm = styled.div`
  text-align-last: center;
  margin-top: 150px;
  & > p {
    margin-top: 18px;
    text-align: center;
  }
`;

export const StNoticeWrapper = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
`;

export const StTitleWrapper = styled.div``;

export const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 228px;
  width: 350px;
  height: 58px;
  color: white;
  border-radius: 18px;
  font-size: 16px;
  background-color: ${COLOR.CORAL_MAIN};
`;