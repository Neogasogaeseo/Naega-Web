import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StLandingWrapper = styled.div`
  position: relative;
`;

export const StMain = styled.div`
  text-align: center;
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  position: relative;
  & > p {
    ${FONT_STYLES.SB_13_TITLE}
    color: ${COLOR.CORAL_MAIN};
  }
  & > h2 {
    margin-top: 12px;
    font-weight: 600;
    font-size: 28px;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
  & > div {
    ${FONT_STYLES.R_15_TITLE};
    line-height: 23px;
    color: ${COLOR.GRAY_6};
    margin-top: 28px;
  }
  & img {
    height: 290px;
    object-fit: cover;
    margin-top: 56px;
    margin-bottom: 70px;
  }
`;

export const StShadow = styled.div<{ top: number }>`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 0%,
    #f2f2f2 35%,
    rgba(196, 196, 196, 0) 100%
  );
  height: 552px;
  width: 100%;
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
  transform: rotate(-180deg);
  z-index: -1;
`;

export const StServiceButton = styled.button<{ theme: 'coral' | 'black' }>`
  padding: 18px 0;
  width: 202px;
  background-color: ${({ theme }) => (theme === 'coral' ? COLOR.CORAL_MAIN : COLOR.GRAY_8)};
  color: ${({ theme }) => (theme === 'coral' ? 'white' : COLOR.GRAY_1)};
  font-size: 15px;
  border-radius: 18px;
  margin: 0 auto;
`;

const StMiddle = styled.div`
  position: relative;
  & img {
    width: 100%;
  }
`;

export const StMiddleNeososeo = styled(StMiddle)`
  width: 100%;
  margin-top: 142px;
  padding-top: 70px;
  padding-bottom: 80px;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 40%, #f8f8f8 100%);
`;

export const StMiddleNeososeoAnswer = styled(StMiddle)`
  padding-top: 74px;
`;

export const StMiddleTeamsoseo = styled(StMiddle)`
  background-color: ${COLOR.GRAY_8};
  padding-top: 70px;

  & img {
    margin-top: 40px;
    margin-bottom: -43px;
  }
`;

export const StMiddleMypage = styled(StMiddle)`
  padding-top: 139px;
`;

export const StMiddleTitle = styled.div`
  & > h2 {
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
  & > h2 {
    margin-bottom: 30px;
    ${FONT_STYLES.B_24_TITLE}
    line-height: 34px;
    text-align: center;
    color: white;

    & > span {
      color: ${COLOR.CORAL_MAIN};
    }
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
