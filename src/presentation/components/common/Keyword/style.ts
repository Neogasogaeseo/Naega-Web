import { COLOR } from '@styles/common/color';
import styled, { css } from 'styled-components';

const linearViewMode = css`
  flex-direction: column;
  gap: 26px;
  padding: 13px 0;
  border-top: 1px solid ${COLOR.GRAY_2};
  & > div {
    width: fit-content;
    position: relative;
    margin-left: 20px;
    & ::after {
      position: absolute;
      left: -20px;
      top: 39px;
      content: '';
      border-bottom: 1px solid ${COLOR.GRAY_2};
      width: 100vw;
      display: block;
    }
  }
`;

const flexViewMode = css`
  flex-wrap: wrap;
  gap: 10px;
`;

export const StKeywordListLayout = styled.div<{ viewMode?: 'linear' | 'flex' }>`
  display: flex;
  ${({ viewMode }) => (viewMode === 'linear' ? linearViewMode : flexViewMode)}
`;
