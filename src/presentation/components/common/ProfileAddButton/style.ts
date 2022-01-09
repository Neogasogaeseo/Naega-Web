import styled, { css } from 'styled-components';
import { PROFILE_ADD_BUTTON } from '@styles/common/button';

export const StAddButton = styled.button<{ isSquare: boolean }>`
  ${PROFILE_ADD_BUTTON}

  width: ${(props) => (props.isSquare ? '60px' : '48px')};
  height: ${(props) => (props.isSquare ? '60px' : '48px')};
  border-radius: ${(props) => (props.isSquare ? '22px' : '50%')};

  ${(props) =>
    props.isSquare &&
    css`
      & > img {
        width: 12px;
        height: 12px;
      }
    `}
`;
