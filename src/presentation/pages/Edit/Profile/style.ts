import styled from 'styled-components';

import { CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StMyProfileEdit = styled.div`
  padding: 0 20px;

  & > div > button {
    display: block;
    margin: 0 auto;
    margin-top: 52px;
  }

  & > button {
    width: 100%;
    border-radius: 16px;
    padding: 20px 0;
    margin-top: 178px;
    margin-bottom: 48px;
    ${FONT_STYLES.M_16_TITLE};
    color: ${COLOR.WHITE};
    background-color: ${COLOR.GRAY_3};

    :not(:disabled) {
      ${CORAL_MAIN_BUTTON};
    }
  }
`;

export const StProfileImg = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  margin-top: 52px;

  img {
    width: 118px;
    height: 118px;
    border-radius: 50%;
  }

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32.29px;
    height: 32.29px;
  }
`;

export const StInputWrapper = styled.div`
  & > div:nth-of-type(2n + 1) {
    margin-left: 4px;
  }
`;