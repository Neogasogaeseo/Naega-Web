import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StKeywordItem = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: ${(props) => (props.color === COLOR.GRAY_3 ? COLOR.BLACK : COLOR.WHITE)};
  font-size: 13px;
  border-radius: 18px;
  padding: 7px 12px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
