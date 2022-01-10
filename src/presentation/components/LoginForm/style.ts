import styled from 'styled-components';

export const StLoginWrapper = styled.div`
  align-self: center;
`;
export const Login = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
`;
export const NoticeWrapper = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin-top: 32px;
  margin-bottom: 102px;
  & > p {
    display: flex;
    color: #ff6262;
  }
`;
export const LoginButton = styled.button`
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

export const KakaoImg = styled.img``;
