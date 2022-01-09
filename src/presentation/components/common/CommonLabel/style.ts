import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StCommonLabel = styled.div<{ marginBottom: string }>`
  margin-bottom: ${(props) => props.marginBottom};
`;

export const StLabel = styled.div<{ marginBottom: string }>`
  font-weight: 600;
  font-size: 16px;
  color: ${COLOR.GRAY_7};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const StLabelWithOptional = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${COLOR.GRAY_7};
`;

export const StOptional = styled.span`
  font-size: 16px;
  color: ${COLOR.GRAY_5};
`;
