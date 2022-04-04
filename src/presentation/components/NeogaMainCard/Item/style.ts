import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeogaMainCardItem = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.color};
  ${FONT_STYLES.M_15_TITLE};
  border-radius: 18.1233px;
  color: ${COLOR.WHITE};
  width: 136px;
  padding: 27px 13px 21px 13px;
  word-break: keep-all;

  & + & {
    margin-left: 8px;
  }

  & img {
    width: 44px;
    height: 44px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  & div {
    padding-left: 2px;
    line-height: 144%;
  }
`;
