import { CORAL_MAIN_BUTTON } from '@styles/common/button';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StMyProfileEdit = styled.div`
  padding: 0 20px;

  & > div > button {
    display: block;
    margin: 0 auto;
    margin-top: 52px;
  }

  & > button {
    ${CORAL_MAIN_BUTTON};
    width: 100%;
    border-radius: 16px;
    ${FONT_STYLES.M_16_TITLE};
    padding: 20px 0;
    margin-top: 178px;
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
