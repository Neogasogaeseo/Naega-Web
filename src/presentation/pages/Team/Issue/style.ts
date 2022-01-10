import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '@styles/common/color';

export const StWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: auto 100px;
  overflow-x: hidden;
  position: relative;
`;

export const StLink = styled(Link)`
  background-color: ${COLOR.GRAY_2};
`;
