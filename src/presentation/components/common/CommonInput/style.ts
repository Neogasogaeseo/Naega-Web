import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StCommonInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StInputWrapper = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
`;

export const StInput = styled.input<{ width: string }>`
  border: 1px solid ${COLOR.GRAY_3};
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  font-size: 16px;
  height: 52px;
  width: ${(props) => props.width};
  :focus {
    outline: none;
  }
`;

export const StErrorMsg = styled.div`
  color: ${COLOR.CORAL_MAIN};
  font-size: 14px;
  line-height: 140%;
  margin-top: 8px;
`;
