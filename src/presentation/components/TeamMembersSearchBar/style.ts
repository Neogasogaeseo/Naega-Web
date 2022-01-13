import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StTeamMembersSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 20px 20px 20px;
  & > *:nth-child(1) {
    display: flex;
    margin-bottom: 14px;
  }
`;

export const StSearchIconWrapper = styled.span`
  width: 44px;
  display: flex;
  padding: 20px 10px 18px 20px;
  border-top: 1px solid ${COLOR.GRAY_3};
  border-bottom: 1px solid ${COLOR.GRAY_3};
  border-left: 1px solid ${COLOR.GRAY_3};
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const StSearchInput = styled.input`
  width: 100%;
  padding: 18px 0;
  border-top: 1px solid ${COLOR.GRAY_3};
  border-bottom: 1px solid ${COLOR.GRAY_3};
  border-left: none;
  border-right: none;
  font-size: 16px;
  color: ${COLOR.GRAY_7};
  &::placeholder {
    color: ${COLOR.GRAY_5};
  }
`;

export const StSearchButtonWrapper = styled.div`
  padding: 18px 19px 19px 10px;
  border-top: 1px solid ${COLOR.GRAY_3};
  border-bottom: 1px solid ${COLOR.GRAY_3};
  border-right: 1px solid ${COLOR.GRAY_3};
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const StSearchButton = styled.button`
  width: 26px;
  padding: 0;
  font-size: 15px;
  color: ${COLOR.GRAY_7};
  background-color: transparent;
`;
