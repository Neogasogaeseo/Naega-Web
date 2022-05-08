import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNSSPickSkeleton = styled.div`
  .title,
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

  .header {
    display: flex;
    align-items: center;
    margin-top: 46px;
    margin-bottom: 14px;
    position: relative;

    & > div {
      background-color: ${COLOR.GRAY_2};
    }

    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }

    .NSS-title {
      margin-left: 14px;
      width: 177px;
      height: 14px;
    }

    .button {
      width: 51px;
      height: 14px;
      float: right;
      position: absolute;
      right: 2px;
    }
  }

  .body {
    margin-bottom: 48px;

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
