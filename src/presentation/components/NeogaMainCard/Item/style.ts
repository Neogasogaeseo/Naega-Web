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

  & div + div {
    margin-top: 2px;
  }
`;

export const StTitle = styled.div<{ isBold: boolean }>`
  font-weight: ${(props) => (props.isBold ? 600 : 400)};
  font-size: ${(props) => (props.isBold ? '16px' : '14px')};
  letter-spacing: ${(props) => (props.isBold ? '-0.015em' : '-0.01em')};
  color: ${(props) => (props.isBold ? COLOR.GRAY_1 : COLOR.WHITE)};
  line-height: 140%;
  padding-left: 2px;
`;
