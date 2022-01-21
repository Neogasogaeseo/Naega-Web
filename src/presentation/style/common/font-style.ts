import { css } from 'styled-components';

type Font = {
  size: number;
  weight: 'R' | 'SB' | 'M' | 'B';
  position: 'Body' | 'Title';
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'M':
      return 500;
    case 'SB':
      return 600;
    case 'B':
      return 700;
    case 'R':
    default:
      return 400;
  }
};

const getLetterSpacing = (position: Font['position']) => {
  switch (position) {
    case 'Body':
      return '-0.015em';
    case 'Title':
      return '-0.01em';
  }
};

export const FONT = ({ size, weight, position }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  letter-spacing: ${getLetterSpacing(position)};
`;

export const FONT_STYLES = {
  R_12_TITLE: FONT({ size: 12, weight: 'R', position: 'Title' }),
  SB_12_TITLE: FONT({ size: 12, weight: 'SB', position: 'Title' }),
  R_13_TITLE: FONT({ size: 13, weight: 'R', position: 'Title' }),
  M_13_TITLE: FONT({ size: 13, weight: 'M', position: 'Title' }),
  M_13_BODY: FONT({ size: 13, weight: 'M', position: 'Body' }),
  SB_13_TITLE: FONT({ size: 13, weight: 'SB', position: 'Title' }),
  SB_14_TITLE: FONT({ size: 14, weight: 'SB', position: 'Title' }),
  R_14_TITLE: FONT({ size: 14, weight: 'R', position: 'Title' }),
  M_14_TITLE: FONT({ size: 14, weight: 'M', position: 'Title' }),
  R_15_TITLE: FONT({ size: 15, weight: 'R', position: 'Title' }),
  R_15_BODY: FONT({ size: 15, weight: 'R', position: 'Body' }),
  M_15_TITLE: FONT({ size: 15, weight: 'M', position: 'Title' }),
  SB_15_BODY: FONT({ size: 15, weight: 'SB', position: 'Body' }),
  R_16_BODY: FONT({ size: 16, weight: 'R', position: 'Body' }),
  R_16_TITLE: FONT({ size: 16, weight: 'R', position: 'Title' }),
  M_16_TITLE: FONT({ size: 16, weight: 'M', position: 'Title' }),
  M_16_BODY: FONT({ size: 16, weight: 'M', position: 'Body' }),
  SB_16_BODY: FONT({ size: 16, weight: 'SB', position: 'Body' }),
  SB_16_TITLE: FONT({ size: 16, weight: 'SB', position: 'Title' }),
  R_17_BODY: FONT({ size: 17, weight: 'R', position: 'Body' }),
  SB_17_BODY: FONT({ size: 17, weight: 'SB', position: 'Body' }),
  R_18_TITLE: FONT({ size: 18, weight: 'R', position: 'Title' }),
  M_18_TITLE: FONT({ size: 18, weight: 'M', position: 'Title' }),
  B_18_TITLE: FONT({ size: 18, weight: 'B', position: 'Title' }),
  SB_18_TITLE: FONT({ size: 18, weight: 'SB', position: 'Title' }),
  R_19_BODY: FONT({ size: 19, weight: 'R', position: 'Body' }),
  SB_19_BODY: FONT({ size: 19, weight: 'SB', position: 'Body' }),
  M_19_BODY: FONT({ size: 19, weight: 'M', position: 'Body' }),
  SB_20_TITLE: FONT({ size: 20, weight: 'SB', position: 'Title' }),
  M_20_TITLE: FONT({ size: 20, weight: 'M', position: 'Title' }),
  R_21_TITLE: FONT({ size: 21, weight: 'R', position: 'Title' }),
  B_21_TITLE: FONT({ size: 21, weight: 'B', position: 'Title' }),
  M_21_TITLE: FONT({ size: 21, weight: 'M', position: 'Title' }),
  R_22_BODY: FONT({ size: 22, weight: 'R', position: 'Body' }),
  B_22_BODY: FONT({ size: 22, weight: 'B', position: 'Body' }),
  SB_22_BODY: FONT({ size: 22, weight: 'SB', position: 'Body' }),
  SB_24_BODY: FONT({ size: 24, weight: 'SB', position: 'Body' }),
  B_24_BODY: FONT({ size: 24, weight: 'B', position: 'Body' }),
  R_24_BODY: FONT({ size: 24, weight: 'R', position: 'Body' }),
  SB_24_TITLE: FONT({ size: 24, weight: 'SB', position: 'Title' }),
  B_24_TITLE: FONT({ size: 24, weight: 'B', position: 'Title' }),
  R_26_TITLE: FONT({ size: 26, weight: 'R', position: 'Title' }),
  B_26_TITLE: FONT({ size: 26, weight: 'B', position: 'Title' }),
  M_26_TITLE: FONT({ size: 26, weight: 'M', position: 'Title' }),
  SB_30_TITLE: FONT({ size: 30, weight: 'SB', position: 'Title' }),
  M_38_TITLE: FONT({ size: 38, weight: 'M', position: 'Title' }),
  R_14_BODY: FONT({ size: 14, weight: 'R', position: 'Body' }),
  SB_20_BODY: FONT({ size: 20, weight: 'SB', position: 'Body' }),
};
