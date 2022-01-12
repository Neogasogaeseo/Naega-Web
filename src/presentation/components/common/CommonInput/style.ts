import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { COMMON_INPUT } from '@styles/common/input';

export const StCommonInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StInputWrapper = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
`;

export const StInput = styled.input<{ width: string; img?: string }>`
  ${COMMON_INPUT}
  height: 52px;
  width: ${(props) => props.width};
  background-image: url(${(props) => props.img});
  background-position: left;
  background-repeat: no-repeat;
  padding: 20px;
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
