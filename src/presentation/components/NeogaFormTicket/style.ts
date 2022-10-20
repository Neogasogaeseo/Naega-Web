import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StNeogaFormTicket = styled.div<{
  theme: 'WHITE' | 'CORAL';
  isSmall: boolean;
}>`
  width: ${(props) => (props.isSmall ? '228px' : '284px')};
  height: ${(props) => (props.isSmall ? '292px' : '364px')};
  background-color: ${(props) => (props.theme === 'WHITE' ? COLOR.WHITE : COLOR.CORAL_MAIN)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${(props) => (props.isSmall ? '0.801745px' : '1px')} solid ${COLOR.GRAY_15};
  border-radius: ${(props) => (props.isSmall ? '14.4314px' : '18px')};
  & > *:nth-child(1) {
    margin-top: ${(props) => (props.isSmall ? '34px' : '42px')};
    width: ${(props) => (props.isSmall ? '68px' : '86px')};
    height: ${(props) => (props.isSmall ? '68px' : '86px')};
  }
  & > *:nth-child(2) {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: ${(props) => (props.isSmall ? '14px' : '18px')};
    line-height: 143.99%;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${(props) => (props.theme === 'WHITE' ? COLOR.GRAY_7 : COLOR.WHITE)};
    width: 100%;
    margin-top: ${(props) => (props.isSmall ? '24px' : '28px')};
    white-space: pre-line;
  }
  & > *:nth-child(3) {
    font-weight: 400;
    font-size: ${(props) => (props.isSmall ? '12px' : '15px')};
    color: ${COLOR.GRAY_5};
    text-align: center;
    margin-top: ${(props) => (props.isSmall ? '9.49px' : '12px')};
    white-space: ${(props) => (props.isSmall ? 'normal' : 'pre-line')};
    line-height: ${(props) => (props.isSmall ? '100%' : '23px')};
  }
  & > *:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: ${(props) => (props.isSmall ? '218.2px' : '272px')};
    width: ${(props) => (props.isSmall ? '246.45px' : '304px')};
    & > hr {
      width: ${(props) => (props.isSmall ? '184px' : '232px')};
      border: ${(props) => (props.isSmall ? '0.801745px' : '1px')} dashed ${COLOR.GRAY_2};
    }
  }
`;

export const StCircle = styled.div<{ isSmall: boolean }>`
  width: ${(props) => (props.isSmall ? '18.45px' : '23px')};
  height: ${(props) => (props.isSmall ? '18.45px' : '23px')};
  background-color: ${COLOR.GRAY_1};
  border-radius: 50%;
`;
