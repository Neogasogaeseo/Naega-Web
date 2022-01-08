import styled from 'styled-components';

export const StyledInputWrpper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
`;

export const Input = styled.input<{ width: string }>`
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  font-size: 16px;
  width: 350px;
  height: 52px;
  width: ${(props) => props.width};
  :focus {
    outline: none;
  }
`;

export const ErrorMsg = styled.div`
  color: #e85440;
  font-size: 14px;
  line-height: 140%;
  margin-top: 8px;
`;
