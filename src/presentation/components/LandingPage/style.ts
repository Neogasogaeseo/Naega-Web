import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 16px 48px 20px;
  align-items: center;
`;
export const StLogin = styled.button`
  width: 58px;
  height: 27px;
  background-color: ${COLOR.CORAL_MAIN};
  color: white;
  border-radius: 13.5px;
`;

export const StMain = styled.div`
  text-align: center;
  letter-spacing: -0.01em;
  & > p {
    font-weight: 600;
    font-size: 13px;
    line-height: 162%;
    color: ${COLOR.CORAL_MAIN};
  }
  & > h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 143.99%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
`;

export const StContent = styled.div`
  font-size: 15px;
  text-align: center;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_6};
  margin: 17px 0px 56px 0px;
`;

export const StServiceButton = styled.button<{ isBlack: boolean }>`
  width: 202px;
  height: 52px;
  display: block;
  background-color: ${({ isBlack }) => (!isBlack ? COLOR.CORAL_MAIN : COLOR.GRAY_8)};
  color: ${({ isBlack }) => (!isBlack ? 'white' : COLOR.GRAY_1)};
  font-size: 15px;
  border-radius: 18px;
  margin: 0 auto;
  margin-top: ${({ isBlack }) => (!isBlack ? '57.6px' : '30px')};
`;

export const StMiddle = styled.div`
  width: 100%;
  height: 852px;
  background-color: ${COLOR.GRAY_1};
  margin-top: 69px;
`;

export const StImgMainPhone = styled.div`
  & > object {
    z-index: 999;
    position: relative;
  }
  & > img {
    z-index: 999;
    position: relative;
    width: 100%;
  }
`;

export const StMiddleTitle = styled.div`
  & > h2 {
    padding-top: 70px;
    margin: 0px 0px 20px 0px;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};

    & > span {
      color: ${COLOR.CORAL_MAIN};
    }
  }
  & > img {
    width: 100%;
  }
`;
export const StMiddleContent = styled.div`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_5};
  margin-bottom: 40px;
`;

export const StMiddleBlack = styled.div`
  height: 853px;
  width: 100%;
  background-color: ${COLOR.GRAY_8};

  & > h2 {
    padding-top: 80px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.01em;
    color: white;

    & > span {
      color: ${COLOR.CORAL_MAIN};
    }
  }

  & > img {
    margin-top: 40px;
    width: 100%;
    height: 522px;
  }
`;

export const StMiddleMypage = styled.div`
  height: 2013px;
  width: 100%;
  & > img {
    width: 100%;
    height: 842px;
  }
`;

export const StFooter = styled.div`
  width: 100%;
  height: 612px;
  background-color: black;
  text-align: center;
  letter-spacing: -0.01em;
  & > h2 {
    padding-top: 80px;
    color: white;
    font-weight: bold;
    font-size: 24px;
    line-height: 143.99%;
    text-align: center;
    letter-spacing: -0.01em;
  }
  & > img {
    width: 100%;
    height: 239px;
    margin-top: 23px;
  }
`;
