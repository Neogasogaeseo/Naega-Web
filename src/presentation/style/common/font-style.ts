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
  font-size: ${size};
  font-weight: ${getFontWeight(weight)};
  letter-spacing: ${getLetterSpacing(position)};
`;
