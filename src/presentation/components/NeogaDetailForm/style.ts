import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
export const StNeogaDetailForm = styled.div``;
export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;
export const StDate = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 100%;
  margin-top: 5px;
  color: ${COLOR.GRAY_5};
`;

export const StTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.01em;
  & > p {
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    letter-spacing: -0.01em;
  }
`;

export const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-left: 20px;
  width: 350px;
  height: 58px;
  background-color: ${COLOR.CORAL_MAIN};
  color: white;
  border-radius: 18px;
  font-size: 16px;
`;
export const StKeyword = styled.div`
  width: 100%;
  height: 164px;
  padding: 20px;
  margin-top: 33px;
  background: ${COLOR.GRAY_1};
  & > p {
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
`;

export const StFeedWrapper = styled.div`
  margin: 0 20px 0 20px;
  & > hr {
    border: 1px solid ${COLOR.GRAY_2};
  }
`;

export const StFeedNickname = styled.div`
  margin-bottom: 12px;
`;
export const StFeedContent = styled.div``;
export const StFeedTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 23px;
`;
