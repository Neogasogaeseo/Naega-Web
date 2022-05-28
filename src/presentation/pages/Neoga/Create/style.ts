import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeogaCreate = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const StWrapper = styled.div`
  padding: 20px;
  padding-top: 0;
`;

export const StWhiteWrapper = styled(StWrapper)`
  & > a > img {
    width: 44px;
    height: 44px;
  }
  & > div:nth-child(1) {
    ${FONT_STYLES.SB_24_TITLE};
    margin-top: 12px;
  }
  & > div:nth-child(2) {
    ${FONT_STYLES.R_15_TITLE};
    color: ${COLOR.GRAY_6};
    margin-top: 12px;
    margin-bottom: 32px;
  }
  & > div:nth-child(3) {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
  }
`;

export const StViewModeSelector = styled.div<{ selected: boolean }>`
  cursor: pointer;
  border-radius: 12px;
  padding: 8px 20px;
  color: ${({ selected }) => (selected ? COLOR.WHITE : COLOR.GRAY_5)};
  background-color: ${({ selected }) => (selected ? COLOR.GRAY_7 : COLOR.GRAY_1)};
  ${FONT_STYLES.M_13_TITLE}
`;
