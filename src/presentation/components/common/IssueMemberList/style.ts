import styled from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';

export const StIssueMemberList = styled.div`
  display: flex;
  align-items: center;

  & div {
    width: 73px;
  }

  & img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    position: relative;
    border-radius: 50%;
    margin-right: -11px;
  }

  & img:not(img:nth-of-type(1)) {
    opacity: 0.7;
  }

  & img:nth-of-type(1) {
    z-index: 3;
  }

  & img:nth-of-type(2) {
    z-index: 2;
  }

  & img:nth-of-type(3) {
    z-index: 1;
  }

  & span {
    ${FONT_STYLES.M_14_TITLE};
    margin-left: 4px;
  }
`;
