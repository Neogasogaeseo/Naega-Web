import styled, { css } from 'styled-components';
import { COLOR } from '@styles/common/color';
import { NavLink } from 'react-router-dom';

export const StHomeHeader = styled.div`
  & > div {
    font-size: 16px;
    margin-top: 18px;
  }
  & > div:nth-child(1) {
    margin-top: 0;
  }

  & > a {
    margin-left: 20px;
  }
`;

export const StNavLink = styled(NavLink)<{ selected: boolean }>`
  margin-right: 16px;
  padding-bottom: 16px;
  color: ${COLOR.GRAY_4};
  cursor: pointer;

  &:nth-of-type(1) {
    margin-left: 20px;
  }

  ${(props) =>
    props.selected &&
    css`
      font-weight: 600;
      color: ${COLOR.GRAY_8};
      border-bottom: 2px solid ${COLOR.GRAY_8};
    `}
`;

export const StNavBottomLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLOR.GRAY_2};
`;
