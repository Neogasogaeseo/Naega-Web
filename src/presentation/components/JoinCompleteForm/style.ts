import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StJoinCompleteForm = styled.div`
  text-align-last: center;
  min-height: 100vh;
  padding: 0 20px;
  & > img {
    margin-top: 150px;
  }
  & > p {
    margin-top: 21px;
    text-align: center;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_5};
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
  margin-top: 204px;
  margin-bottom: 48px;
  width: 100%;
  height: 58px;
  color: white;
  border-radius: 18px;
  font-size: 16px;
  background-color: ${COLOR.CORAL_MAIN};
`;
