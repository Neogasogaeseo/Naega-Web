import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StIssueTeamInfo = styled.div`
  width: fit-content;
  border: 1px solid ${COLOR.GRAY_2};
  border-radius: 10px;
  padding: 5px 7px;
  display: flex;
  align-items: center;
  font-size: 12px;

  & > * + * {
    margin-left: 6px;
  }

  & > img {
    width: 22px;
    height: 22px;
    border-radius: 8px;
    object-fit: cover;
    image-orientation: from-image;
  }

  span {
    color: ${COLOR.GRAY_4};
    font-size: 12px;
    line-height: 22px;
    letter-spacing: -0.01em;
  }

  span:first-of-type {
    color: ${COLOR.GRAY_7};
    font-weight: 600;
  }
`;
