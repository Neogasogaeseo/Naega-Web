import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StProfileItemWrapper = styled.div<{ isSquare: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isSquare ? '60px' : '48px')};
  cursor: ${(props) => (!props.isSquare ? 'auto' : 'pointer')};

  & > div:first-of-type {
    height: ${(props) => (props.isSquare ? '60px' : '48px')};

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${(props) => (props.isSquare ? '22px' : '50%')};
    }
  }

  & > div:last-of-type {
    margin-top: 10px;
    text-align: center;
    font-size: ${(props) => (props.isSquare ? '14px' : '12px')};
    color: ${(props) => (props.isSquare ? COLOR.GRAY_8 : COLOR.GRAY_7)};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
