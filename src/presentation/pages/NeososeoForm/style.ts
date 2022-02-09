import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormPage = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 50px 0;
  display: grid;
  grid-template-rows: 70px auto;
  position: relative;

  & > *:first-child {
    padding: 0 20px;
  }
`;

export const StNeososeoTitle = styled.div`
  border-radius: 18px;
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 16px 20px;
  background-color: ${COLOR.GRAY_1};
  margin-top: 24px;

  & > span:nth-child(1) {
    color: ${COLOR.CORAL_MAIN};
    line-height: 20px;
  }

  & > span:nth-child(2) {
    ${FONT_STYLES.R_15_BODY}
    color: ${COLOR.GRAY_7};
    line-height: 20px;
  }
`;

export const StSubTitle = styled.div`
  margin-top: 44px;
  margin-bottom: 18px;
  ${FONT_STYLES.SB_16_TITLE}
  color: ${COLOR.GRAY_8};
`;

export const StRelationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const StRelation = styled.div<{ selected: boolean }>`
  ${FONT_STYLES.R_15_TITLE}
  padding: 15px 0;
  border-radius: 14px;
  text-align: center;
  cursor: pointer;
  color: ${({ selected }) => (selected ? COLOR.CORAL_MAIN : COLOR.GRAY_5)};
  background-color: ${({ selected }) => (selected ? '#FFEFEF' : COLOR.GRAY_1)};
`;

export const StButton = styled.button`
  ${FULL_WIDTH_BUTTON}
  background-color: ${COLOR.GRAY_3};
  color: ${COLOR.WHITE};
  margin-top: auto;

  :not(:disabled) {
    ${CORAL_MAIN_BUTTON}
  }
`;

export const StNeososeoFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
