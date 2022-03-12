import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StCommonHeader = styled.div`
  width: 100%;
  height: 44px;
  position: relative;
  & > *:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 16px;
    & > *:nth-child(2) {
      height: 100%;
      display: flex;
      align-items: center;
      & > *:last-child {
        margin-left: 10px;
      }
    }
  }
  & > *:last-child {
    width: 7px;
    height: 7px;
    position: absolute;
    top: 14px;
    right: 19px;
    box-sizing: content-box;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background-color: ${COLOR.CORAL_MAIN};
  }
`;
