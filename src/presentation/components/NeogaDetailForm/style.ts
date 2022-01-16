import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNeogaDetailForm = styled.div`
& > hr {
  border: 1px solid ${COLOR.GRAY_2};
  height: 8px;
  background-color: ${COLOR.GRAY_1};
}`;

export const StLink = styled.div`
  display: flex;
  margin: 18px 0px 0px 20px;
  color: ${COLOR.CORAL_MAIN};
  &>img{
    padding-right:5px;
  }
`;

export const StFeedName = styled.div`
font-weight: 600;
font-size: 13px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.01em;
color: ${COLOR.GRAY_6};

&>p{
  font-weight: normal;
  font-size: 13px;
  color: ${COLOR.GRAY_5};
}`;

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
  width: 100%;
  margin-left: 12px;
  border-radius: 18px;
  padding: 16px 19px 16px 20px;
  font-size: 15px;
  line-height: 143.99%;
  color: ${COLOR.GRAY_7};
`;


export const StTitle = styled.div`
  margin: 50px 20px 0 20px;
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
  margin: 70px 0px 0px 20px;
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
    margin: 12px 0px 28px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
`;

export const StFeedDate = styled.div`
  color: ${COLOR.GRAY_4};
`;

export const StFeedWrapper = styled.div`
  margin: 0 20px 0 20px;
  & >hr{
    margin-top:24px;
    border: 1px solid #EFEFEF;
    border-radius: 2px;
  }
`;

export const StFeedNickname = styled.div`
  display:flex;  
  justify-content: space-between;
  margin: 24px 0px 12px 0px;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_7};

`;
export const StFeedContent = styled.div`
  margin-bottom:14px;
`;

export const StFeedTitle = styled.div`
  margin: 20px 20px 23px 20px;
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.01em;
  &>p{
    color: ${COLOR.CORAL_MAIN};
  }
`;
