import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StProfileItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  cursor: pointer;

  & > div:first-of-type {
    height: 60px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 22px;
    }
  }

  & > div:last-of-type {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: ${COLOR.GRAY_8};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
