import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StIssueCard = styled.div`
  box-shadow: 0px 2px 20px rgba(88, 99, 109, 0.12);
  border: 1px solid ${COLOR.GRAY_1};
  border-radius: 20px;
  margin-bottom: 14px;
  padding: 20px;
`;

export const StTopLeft = styled.div`
  margin-bottom: 8px;

  & > span:first-child {
    color: ${COLOR.CORAL_MAIN};
    margin-right: 6px;
    font-weight: 600;
  }

  & > span:last-child {
    color: ${COLOR.GRAY_5};
  }
`;

export const StContent = styled.div`
  color: ${COLOR.GRAY_8};
  margin-bottom: 28px;
  line-height: 160%;
  font-weight: 600;
  font-size: 16px;
`;
