import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeogaCreateCardItem = styled.div`
  background-color: ${(props) => props.color};
  position: relative;
  border-radius: 18px;
  padding: 19px;
  color: ${COLOR.WHITE};
  white-space: pre-line;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    & > div:nth-child(1) {
      margin-bottom: 6px;
      ${FONT_STYLES.SB_16_TITLE}
    }
    & > div:nth-child(2) {
      ${FONT_STYLES.R_14_TITLE}
    }
  }

  & img {
    width: 60px;
    height: 60px;
  }
`;
