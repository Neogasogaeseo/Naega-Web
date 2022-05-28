import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StNeososeoTitle = styled.div`
  border-radius: 18px;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 16px 20px;
  background-color: ${COLOR.GRAY_1};
  margin-top: 24px;

  & > span:nth-child(1) {
    color: ${COLOR.CORAL_MAIN};
    ${FONT_STYLES.SB_16_TITLE}
  }

  & > span:nth-child(2) {
    ${FONT_STYLES.R_15_BODY}
    color: ${COLOR.GRAY_7};
    line-height: 143.99%;
  }
`;

export const StSubTitle = styled.div`
  margin-top: 48px;
  margin-bottom: 20px;
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
  background-color: ${({ selected }) => (selected ? '#FFFFFF' : COLOR.GRAY_1)};
  border: 1px solid ${({ selected }) => (selected ? COLOR.CORAL_MAIN : '#FFFFFF')};
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
  display: grid;
  grid-template-rows: auto 106px;
  padding: 0 20px;
  height: 100%;
  flex: 1;
  margin-bottom: 48px;
  & > div:nth-child(1) {
    padding-top: 22px;
    padding-bottom: 134px;
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;
