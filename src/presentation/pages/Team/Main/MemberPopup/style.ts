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
  background: ${COLOR.WHITE};
  border-radius: 8.08px;
  border: 0.8px solid ${COLOR.GRAY_2};
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

    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      margin-right: 15px;
      border-radius: 77.0833px;
      image-orientation: from-image;
    }

    span {
      ${FONT_STYLES.M_13_BODY};
      color: ${COLOR.GRAY_6};
      line-height: 18.72px;
      text-align: left;
    }
  }

  div + div {
    margin-top: 14px;
  }
`;

export const StWholeButton = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.M_13_TITLE};
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  margin-top: 29px;

  & > img {
    width: 10px;
    height: 13px;
  }
`;
