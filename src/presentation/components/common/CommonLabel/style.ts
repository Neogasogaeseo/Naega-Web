import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

interface StLabelProps {
  marginTop?: string;
  marginBottom?: string;
}

export const StCommonLabel = styled.div<StLabelProps>`
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
`;

export const StLabel = styled.div<StLabelProps>`
  font-weight: 600;
  font-size: 16px;
  color: ${COLOR.GRAY_7};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
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
