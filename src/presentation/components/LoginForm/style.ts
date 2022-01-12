import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StLoginForm = styled.div`
  margin-bottom: 200px;
`;
export const StLogin = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
`;
export const StNoticeWrapper = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin-top: 32px;
  margin-bottom: 102px;
  & > p {
    display: flex;
    color: ${COLOR.CORAL_MAIN};
  }
`;
export const StLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 58px;
  background-color: #fee500;
  border-radius: 18px;
  font-size: 16px;

  & > img {
    display: flex;
    padding-right: 280px;
  }

  & > p {
    position: absolute;
    font-size: 16px;
    line-height: 100%;
  }
`;
