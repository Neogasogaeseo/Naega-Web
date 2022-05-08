import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StTSSPickSkeleton = styled.div`
  .title,
  .team-container,
  .header,
  .body {
    animation: skeleton-gradient 2s infinite ease-in-out;
  }

  .title {
    margin-top: 40px;
    background-color: ${COLOR.GRAY_3};
    width: 164px;
    height: 16px;
  }

  .team-container {
    display: flex;
    gap: 18px;
    margin-top: 40px;

    .team {
      & > div {
        background-color: ${COLOR.GRAY_2};
      }

      .avatar {
        width: 60px;
        height: 60px;
      }

      .name {
        width: 60px;
        height: 12px;
        margin-top: 6px;
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 14px;

    & > div {
      background-color: ${COLOR.GRAY_2};
    }

    .TSS-title {
      width: 177px;
      height: 14px;
    }

    .button {
      width: 51px;
      height: 14px;
      margin-right: 2px;
    }
  }

  .body {
    margin-bottom: 70px;

    & > div:not(.keyword-container) {
      background-color: ${COLOR.GRAY_15};
    }

    .content {
      width: 348px;
      height: 12px;
      margin-bottom: 8px;
    }

    .keyword-container {
      display: flex;
      gap: 8px;
    }

    .keyword {
      background-color: ${COLOR.GRAY_15};
      width: 103px;
      height: 18px;
    }
  }
`;
