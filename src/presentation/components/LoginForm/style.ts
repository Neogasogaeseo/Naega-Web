import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StLoginForm = styled.div`
  padding: 0 20px;
  & > img {
    margin-top: 50px;
  }
`;

export const StLogin = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  margin-top: 12px;
`;
export const StNoticeWrapper = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  line-height: 143.99%;
  letter-spacing: -0.01em;
  margin-top: 32px;
  margin-bottom: 67px;
  color: ${COLOR.GRAY_5};
`;
export const StLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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

export const StImgLogin = styled.div`
  display: flex;
  place-content: center;

  & > img {
    margin-bottom: 71.6px;
  }
`;
