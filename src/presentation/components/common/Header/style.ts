import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StHeaderWrapper = styled.div`
  width: 100vw;

  & > img,
  & > div {
    padding: 0 20px;
  }

  & > div {
    font-size: 16px;
    margin-top: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${COLOR.GRAY_2};

    & > a {
      margin-right: 16px;
      padding-bottom: 10px;
      color: ${COLOR.GRAY_4};
      cursor: pointer;
    }
  }
`;
