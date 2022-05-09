import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StMyItem = styled.button<{
  isSquare: boolean;
  isSelected: boolean | undefined;
  img: string;
}>`
  width: ${(props) => (props.isSquare ? '42px' : '43px')};
  height: ${(props) => (props.isSquare ? '42px' : '43px')};
  object-fit: cover;
  border: ${(props) => (props.isSelected ? (props.isSquare ? '1.5px' : '1px') : '0px')} solid
    ${COLOR.CORAL_MAIN};
  border-radius: ${(props) => (props.isSquare ? '16px' : '50%')};
  background: no-repeat center/cover url(${(props) => props.img});
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  margin-right: 14px;
`;
