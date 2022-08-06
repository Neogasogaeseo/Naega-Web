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

export const StItemWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  min-width: 100%;

  & > div {
    margin-right: 14px;
  }
`;

export const StAllButtonWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-right: 14px;
  cursor: pointer;

  & > span {
    color: ${({ isSelected }) => (isSelected ? COLOR.GRAY_8 : COLOR.GRAY_4)};
    ${FONT_STYLES.R_13_TITLE};
  }
`;

export const StAllButton = styled.div<{ isSquare: boolean; isSelected: boolean }>`
  width: ${({ isSquare }) => (isSquare ? '42px' : '43px')};
  height: ${({ isSquare }) => (isSquare ? '42px' : '43px')};
  line-height: ${({ isSquare }) => (isSquare ? '42px' : '43px')};
  text-align: center;
  border: ${(props) => (props.isSelected ? (props.isSquare ? '1.5px' : '1px') : '0px')} solid
    ${COLOR.CORAL_MAIN};
  border-radius: ${({ isSquare }) => (isSquare ? '16px' : '50%')};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  ${FONT_STYLES.R_14_BODY};
  background-color: ${COLOR.GRAY_15};
  color: ${(props) => (props.isSelected ? COLOR.CORAL_MAIN : COLOR.GRAY_5)};
  -webkit-tap-highlight-color: transparent;
`;
