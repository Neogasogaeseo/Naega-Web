import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StTeamMemberPopup = styled.div`
  position: absolute;
  top: calc(100% + 14.83px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  width: 168px;
  max-height: 207.168px;
  overflow: scroll;
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

  div {
    display: flex;
    align-items: center;

    span {
      ${FONT_STYLES.M_13_BODY};
      color: ${COLOR.GRAY_6};
      line-height: 18.72px;
    }
  }

  div + div {
    margin-top: 13px;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 77.0833px;
  }
`;
