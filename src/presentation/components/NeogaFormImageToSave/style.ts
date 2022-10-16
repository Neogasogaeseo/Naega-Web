import styled from 'styled-components';

import { COLOR } from '@styles/common/color';

export const StNeogaFormImageToSave = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 696px;
  padding-top: 156px;
  background-color: ${COLOR.GRAY_1};
  & > *:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 22px;
    & > *:first-child {
      width: 48px;
      height: 48px;
      border-radius: 16.0349px;
      object-fit: cover;
    }
    & > *:last-child {
      padding-top: 9px;
      & > *:first-child {
        font-weight: 600;
        font-size: 16px;
        color: ${COLOR.GRAY_8};
        margin-bottom: 6px;
      }
      & > *:last-child {
        font-weight: 400;
        font-size: 11px;
        color: ${COLOR.GRAY_5};
      }
    }
  }
`;

export const StLogo = styled.img`
  position: absolute;
  bottom: 22px;
  height: 22px;
`;
