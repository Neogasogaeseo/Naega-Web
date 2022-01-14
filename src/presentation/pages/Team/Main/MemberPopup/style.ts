import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StTeamMemberPopup = styled.div`
  position: absolute; /* relative */
  z-index: 1;
  width: 168px;
  height: 207.17px;
  /* visibility: hidden; */
  background: ${COLOR.WHITE};
  border-radius: 8.07692px;
  border: 0.8px solid ${COLOR.GRAY_3};
  box-shadow: 0px 10px 30px rgba(152, 151, 166, 0.15);
  padding: 20px 15px;

  &:after {
    content: '';
    position: absolute;
    left: 79px;
    top: -6px;
    width: 10px;
    height: 10px;
    background: inherit;
    transform: rotate(-45deg);
    border-top: inherit;
    border-right: inherit;
    box-shadow: inherit;
  }
`;
