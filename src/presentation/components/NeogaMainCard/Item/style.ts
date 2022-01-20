import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeogaMainCardItem = styled.div`
  background-color: ${(props) => props.color};
  ${FONT_STYLES.M_15_TITLE};
  border-radius: 18.1233px;
  color: ${COLOR.WHITE};
  width: 136px;
  padding: 14px 16px 20px 8px;
  word-break: keep-all;

  & + & {
    margin-left: 8px;
  }

  & img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    margin-bottom: 21px;
  }

  & div {
    padding-left: 8px;
    line-height: 144%;
  }
`;
