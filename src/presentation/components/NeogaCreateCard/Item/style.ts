import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StNeogaCreateCardItem = styled.div`
  background-color: ${(props) => props.color};
  height: 170px;
  position: relative;
  border-radius: 18px;
  padding: 19px;
  color: ${COLOR.WHITE};
  white-space: pre-line;

  & div:nth-child(1) {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5em;
  }

  & div {
    position: relative;
    z-index: 1;
  }

  & img {
    width: 100px;
    height: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const StNew = styled.div`
  background-color: ${COLOR.CORAL_MAIN};
  border-radius: 18px;
  height: 27px;
  width: 61px;
  text-align: center;
  line-height: 27px;
  margin-top: 8px;
  font-size: 13px;
`;
