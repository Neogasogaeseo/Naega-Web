import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StLogin = styled.div`
  padding: 0 20px;
  position: relative;

  & > img:first-child {
    margin-top: 50px;
    width: 59px;
    height: 59px;
  }
`;

export const StTitle = styled.div`
  font-weight: 600;
  ${FONT_STYLES.SB_24_TITLE};
  color: ${COLOR.GRAY_8};
  margin-top: 12px;
`;

export const StNoticeWrapper = styled.div`
  display: flex;
  ${FONT_STYLES.R_18_BODY};
  line-height: 144%;
  margin-top: 24px;
  color: ${COLOR.GRAY_5};
`;

export const StLoginButton = styled.button`
  display: flex;
  align-items: center;
  padding: 18px 28px;
  width: min(350px, calc(100% - 40px));
  height: 58px;
  background-color: #fee500;
  border-radius: 18px;
  position: fixed;
  bottom: 88px;

  & > span {
    ${FONT_STYLES.M_16_TITLE};
    color: ${COLOR.GRAY_8};
    flex: 1;
  }
`;

export const StLoginImg = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
