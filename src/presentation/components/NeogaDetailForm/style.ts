import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
export const StNeogaDetailForm = styled.div`
& > hr {
  border: 1px solid ${COLOR.GRAY_2};
}`;
export const StLink = styled.div`
  margin-left: 20px;
  margin-top: 18px;
  color: ${COLOR.CORAL_MAIN};
  &>img{
    padding-right:5px;
  }
`;

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;
export const StDate = styled.div`
  display: flex;
  float: right;
  font-size: 13px;
  line-height: 100%;
  margin: 5px 20px 9px 0px;
  color: ${COLOR.GRAY_5};
`;

export const StQuestion = styled.div`
&> p{
  color: ${COLOR.CORAL_MAIN};
  padding-right: 12px;
  font-size: 15px;
  display:flex;
}
  display:flex;
  background-color: ${COLOR.GRAY_1};
  width:350px;
  margin-left: 12px;
  border-radius: 18px;
  padding: 16px 19px 16px 20px;
  font-size: 15px;
  line-height: 143.99%;
  color: ${COLOR.GRAY_7};
`;

export const StIcon = styled.div`
width: 72px;
height: 72px;
border-radius: 80px;
background-color: ${COLOR.GRAY_1};

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
  padding: 20px;
  & > p {
    margin-top: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
`;

export const StFeedWrapper = styled.div`
  margin: 0 20px 0 20px;
`;

export const StFeedNickname = styled.div`
  display:flex;  
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_7};
`;
export const StFeedContent = styled.div``;
export const StFeedTitle = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 23px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.01em;
  &>p{
    color: ${COLOR.CORAL_MAIN};
  }
`;
