import React, { useState } from 'react';
import { StyledInputWrpper, InputContainer, Input, ErrorMsg } from './style';
interface IProps {
  width: string;
  errorMsg?: string;
  placeholder?: string;
  message?: string;
  maxByte?: number;
  value?: string;
  isConditionMet?: boolean;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = ({
  width,
  errorMsg,
  placeholder,
  maxByte,
  value,
  isConditionMet,
  onChange,
  onKeyPress,
}: IProps): React.ReactElement => {
  const [isInput, setIsInput] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  }

  return (
    <StyledInputWrpper>
      <InputContainer width={width}>
        <Input
          width={width}
          onChange={handleOnChange}
          onKeyPress={onKeyPress}
          maxLength={maxByte}
          placeholder={placeholder}
          value={value}
        />
      </InputContainer>
      {!isConditionMet && isInput !== '' && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </StyledInputWrpper>
  );
};

export default StyledInput;
