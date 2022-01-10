import styled, { css } from 'styled-components';
import { COLOR } from '@styles/common/color';
import { NavLink } from 'react-router-dom';

export const StHeaderWrapper = styled.div`
  & > div {
    font-size: 16px;
    margin-top: 18px;
  }
`;

export const StNavLink = styled(NavLink)<{ current: string }>`
  margin-right: 16px;
  padding-bottom: 16px;
  color: ${COLOR.GRAY_4};
  cursor: pointer;

  ${(props) =>
    props.current &&
    css`
      font-weight: 600;
      color: ${COLOR.GRAY_8};
      border-bottom: 2px solid ${COLOR.GRAY_8};
    `}
`;

export const StNavBottomLine = styled.div`
  width: calc(100% + 2 * 20px);
  height: 1px;
  background-color: ${COLOR.GRAY_2};
  margin-left: -20px;
`;
