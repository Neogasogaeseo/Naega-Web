import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StProfileList = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StItemWrapper = styled.div<{ isSquare: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  min-width: 100%;

  & > div {
    margin-right: ${(props) => (props.isSquare ? '14px' : '16px')};
  }
`;

export const StAllButton = styled.button<{
  isSquare: boolean;
  isSelected: boolean;
}>`
  -webkit-tap-highlight-color: transparent;
  ${FONT_STYLES.R_14_BODY};
  background-color: ${COLOR.GRAY_15};
  color: ${(props) => (props.isSelected ? COLOR.CORAL_MAIN : COLOR.GRAY_5)};
  margin-right: 14px;
  width: ${(props) => (props.isSquare ? '42px' : '43px')};
  height: ${(props) => (props.isSquare ? '42px' : '43px')};
  border: ${(props) => (props.isSelected ? (props.isSquare ? '1.5px' : '1px') : '0px')} solid
    ${COLOR.CORAL_MAIN};
  border-radius: ${(props) => (props.isSquare ? '16px' : '50%')};
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
`;
