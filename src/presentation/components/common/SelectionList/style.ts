import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StSelectionList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 14px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 20px;

  button {
    background-color: ${COLOR.GRAY_15};
  }
`;

export const StDefaultButton = styled.button<{
  isSquare: boolean;
  isDefault: boolean;
  isClicked: boolean;
}>`
  min-width: 43px;
  height: 43px;
  border-radius: ${(props) => (props.isSquare ? '16px' : '50%')};
  border: ${(props) =>
      props.isDefault || props.isClicked ? (props.isSquare ? '1.5px' : '1px') : '0px'}
    solid ${COLOR.CORAL_MAIN};
  color: ${(props) => (props.isDefault ? COLOR.CORAL_MAIN : COLOR.GRAY_5)};
`;

export const StButton = styled.button<{
  isSquare: boolean;
  isDefault: boolean;
  isClicked: boolean;
  img?: string;
}>`
  min-width: 43px;
  height: 43px;
  color: ${COLOR.GRAY_5};
  opacity: ${(props) => (props.isDefault ? '0.5' : '1')};
  background: no-repeat center/cover url(${(props) => props.img});
  border-radius: ${(props) => (props.isSquare ? '16px' : '50%')};
  border: ${(props) => (props.isClicked ? (props.isSquare ? '1.5px' : '1px') : '0px')} solid
    ${COLOR.CORAL_MAIN};
`;
