import styled from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StNeogaResultCard = styled.div`
  cursor: pointer;
  box-shadow: 0px 2px 30px rgba(88, 99, 109, 0.08);
  border-radius: 22px;
  padding: 24px 22px 2px 22px;
  margin-bottom: 12px;
  background-color: ${COLOR.WHITE};
`;

export const StNeogaCardHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 52px;
    height: 52px;
    margin-right: 12px;
    object-fit: cover;
    border-radius: 50%;
    background-color: ${COLOR.GRAY_1};
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
  color: ${COLOR.GRAY_4};
  font-weight: 600;
  font-size: 16px;
  line-height: 142.5%;
  letter-spacing: -0.01em;
  padding-top: 55px;
  padding-bottom: 72px;
}

  img {
    display: block;
    margin-bottom: 16px;
  }
`;
