import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StMyPageInfoSkeleton = styled.div`
  .title,
  .profile,
  .subtitle,
  .keyword {
    animation: skeleton-gradient 2s infinite ease-in-out;
  }

  .title {
    margin-top: 40px;
    background-color: ${COLOR.GRAY_3};
    width: 164px;
    height: 16px;
  }

  .profile {
    background-color: ${COLOR.GRAY_1};
    display: flex;
    align-items: center;
    width: calc(100% + 40px);
    margin-left: -20px;
    padding: 28px 20px;
    gap: 20px;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: ${COLOR.GRAY_3};
    }

    .text {
      height: 16px;
      background-color: ${COLOR.GRAY_3};
    }

    .text.short {
      margin-bottom: 8px;
      width: 66px;
    }

    .text.long {
      width: 143px;
    }
  }

  .my-keyword {
    margin-bottom: 50px;
    
    .subtitle {
      margin-top: 40px;
      margin-bottom: 10px;
      width: 164px;
      height: 14px;
      background-color: ${COLOR.GRAY_15};
    }

    .keyword-container {
      padding-right: 3px;
      display: flex;
      gap: 8px;
    }

    .keyword {
      width: calc(100% / 3);
      height: 21px;
      background-color: ${COLOR.GRAY_15};
    }
  }
`;
