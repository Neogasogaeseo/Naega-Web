import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StSelectBoxWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StSelectBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 52px;
  border-radius: 16px;
  color: ${COLOR.GRAY_6};
  border: 1px solid ${COLOR.GRAY_3};
  z-index: 1;
`;

export const StSelectBoxItem = styled.div<{ selected: boolean }>`
  height: 52px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  color: ${({ selected }) => (selected ? COLOR.GRAY_6 : COLOR.GRAY_5)};
  background-color: white;
`;

export const StSelectBoxTail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 52px;
  border-radius: 16px;
  border: 2px solid ${COLOR.CORAL_MAIN};
  z-index: 2;
  & div:nth-child(4) {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;
