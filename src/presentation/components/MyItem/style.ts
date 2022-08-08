import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StMyItem = styled.button<{
  isSquare: boolean;
  isSelected: boolean | undefined;
  img: string;
}>`
  width: ${({ isSquare }) => (isSquare ? '42px' : '43px')};
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;

  div {
    background: no-repeat center/cover url(${(props) => props.img});
    width: 100%;
    height: ${({ isSquare }) => (isSquare ? '42px' : '43px')};
    border: ${(props) => (props.isSelected ? (props.isSquare ? '1.5px' : '1px') : '0px')} solid
      ${COLOR.CORAL_MAIN};
    border-radius: ${({ isSquare }) => (isSquare ? '16px' : '50%')};
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
    object-fit: cover;
  }

  span {
    display: block;
    margin-top: 8px;
    ${FONT_STYLES.R_13_TITLE};
    color: ${({ isSelected }) => (isSelected ? COLOR.GRAY_8 : COLOR.GRAY_4)};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:not(:last-child) {
    margin-right: 14px;
  }
`;
