import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { COMMON_INPUT } from '@styles/common/input';
import { FONT_STYLES } from '@styles/common/font-style';

export const StCommonInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StInputWrapper = styled.form<{ width: string }>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  position: relative;
`;

export const StInput = styled.input<{ width: string; img?: string; hasButton?: boolean }>`
  ${COMMON_INPUT}
  height: 52px;
  width: ${(props) => props.width};
  background-image: url(${(props) => props.img});
  background-position: left;
  background-repeat: no-repeat;
  padding: 10px 20px;
  ${({ img }) => img && 'padding-left: 34px; background-position: 12px center;'}
  ${({ hasButton }) => hasButton && 'padding-right: 56px;'}
`;

export const StSubmitButton = styled.button`
  position: absolute;
  right: 16px;
  top: calc(50%-26px);
  height: 26px;
  padding-left: 12px;
  border-left: 1px solid ${COLOR.GRAY_3};
  color: ${COLOR.GRAY_7};
  cursor: pointer;
  background-color: transparent;
  ${FONT_STYLES.M_15_TITLE}
`;
