import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StProfileItemWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.type === 'team' ? '60px' : '48px')};
  cursor: pointer;

  & > div:first-of-type {
    height: ${(props) => (props.type === 'team' ? '60px' : '48px')};

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${(props) => (props.type === 'team' ? '22px' : '50%')};
    }
  }

  & > div:last-of-type {
    margin-top: 10px;
    text-align: center;
    font-size: ${(props) => (props.type === 'team' ? '14px' : '12px')};
    color: ${(props) => (props.type === 'team' ? COLOR.GRAY_8 : COLOR.GRAY_7)};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
