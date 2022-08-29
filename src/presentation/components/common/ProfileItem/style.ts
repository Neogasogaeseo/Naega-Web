import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StProfileItem = styled.div<{
  isSquare: boolean;
  isSelected: boolean | undefined;
}>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isSquare ? '60px' : '48px')};
  cursor: ${(props) => (!props.isSquare ? 'auto' : 'pointer')};

  & > div:first-of-type {
    height: ${(props) => (props.isSquare ? '60px' : '48px')};
    background-color: white;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: white;
      border-radius: ${(props) => (props.isSquare ? '22px' : '50%')};
      border: ${(props) =>
        props.isSelected ? `1px solid ${COLOR.PINK}` : '1px solid transparent'};
      ${(props) =>
        props.isSelected && `filter: opacity(0.6) drop-shadow(0 0 0 rgb(255, 98, 98, 0.9));`}
    }
  }

  & > div:last-of-type {
    margin-top: 10px;
    text-align: center;
    font-size: ${(props) => (props.isSquare ? '14px' : '12px')};
    color: ${(props) =>
      props.isSelected === undefined
        ? props.isSquare
          ? COLOR.GRAY_8
          : COLOR.GRAY_7
        : props.isSelected
        ? COLOR.GRAY_7
        : COLOR.GRAY_5};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 16px;
  }
`;
