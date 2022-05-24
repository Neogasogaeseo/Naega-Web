import { icArrowRightGray5 } from '@assets/icons';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { COMMON_INPUT } from '@styles/common/input';
import styled from 'styled-components';

export const StPreferencesWrapper = styled.div`
  background-color: ${COLOR.GRAY_1};
  min-height: calc(100vh - 44px);
`;

export const StWhiteBackground = styled.div`
  background-color: ${COLOR.WHITE};
  padding: 0 20px;
`;

export const StTitle = styled(StWhiteBackground)`
  color: ${COLOR.GRAY_8};
  ${FONT_STYLES.SB_24_TITLE};
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const StSubTitle = styled(StWhiteBackground)`
  ${FONT_STYLES.R_16_TITLE};
  color: ${COLOR.GRAY_5};
`;

export const StSection = styled(StWhiteBackground)`
  margin-bottom: 8px;
  padding-bottom: 4px;
  padding-top: 18px;
`;

export const StSectionTitle = styled.div`
  margin-bottom: 8px;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.M_15_TITLE};
`;

export const StSectionItem = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLOR.GRAY_8};
  ${FONT_STYLES.R_16_BODY};
  cursor: pointer;
  &::after {
    content: url(${icArrowRightGray5});
  }
`;

export const StForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 20px;
  gap: 30px;
`;

export const StFormTitle = styled.div`
  color: ${COLOR.GRAY_7};
  ${FONT_STYLES.M_16_TITLE};
  padding-bottom: 18px;
`;

export const StTextarea = styled.textarea`
  ${COMMON_INPUT}
  width: 100%;
  resize: unset;
  height: 104px;
  margin-top: 12px;
`;

export const StButton = styled.button<{ disabled: boolean }>`
  ${CORAL_MAIN_BUTTON};
  padding: 15px 16px;
  border-radius: 14px;
  font-size: 15px;
  line-height: 1.44em;
  letter-spacing: -0.0015em;
  margin-top: 15px;
  border: none;
  ${({ disabled }) => disabled && `background-color: ${COLOR.GRAY_3};`}
`;
