import styled from 'styled-components';

import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StNeogaResultCard = styled.div`
  cursor: pointer;
  box-shadow: 0px 2px 30px rgba(88, 99, 109, 0.08);
  border: 1px solid ${COLOR.GRAY_1};
  border-radius: 22px;
  padding: 24px 22px 2px 22px;
  margin-bottom: 12px;
  background-color: ${COLOR.WHITE};
`;

export const StNeogaCardHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }

  & > div {
    flex: 1;

    div:first-child {
      margin-bottom: 10px;
      color: ${COLOR.GRAY_8};
      ${FONT_STYLES.SB_16_TITLE};
    }

    div:last-child {
      color: ${COLOR.GRAY_5};
      ${FONT_STYLES.R_13_TITLE};
    }
  }
`;

export const StNeogaCardLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #efefef;
  margin-top: 18px;
  margin-bottom: 20px;
`;

export const StNeogaNoReply = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 53px;
  padding-bottom: 94px;

  div:first-child {
    ${FONT_STYLES.SB_18_TITLE};
    color: ${COLOR.GRAY_4};
  }

  div:last-child {
    margin-top: 12px;
    ${FONT_STYLES.M_14_TITLE};
    color: ${COLOR.GRAY_35};
  }
`;
