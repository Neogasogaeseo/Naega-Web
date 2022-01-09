import React, { useState } from 'react';
import { StInputWrapper, StInputContainerWrapper, Input, ErrorMsg } from './style';

interface StyledInputProps {
  width: string;
  errorMsg?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  isConditionMet?: boolean;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function StyledInput(props: StyledInputProps): React.ReactElement {
  const { width, errorMsg, placeholder, maxLength, value, isConditionMet, onChange, onKeyPress } =
    props;
  const [isInput, setIsInput] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  }

  return (
    <StInputWrapper>
      <StInputContainerWrapper width={width}>
        <Input
          width={width}
          onChange={handleOnChange}
          onKeyPress={onKeyPress}
          maxLength={maxLength}
          placeholder={placeholder || ''}
          value={value}
        />
      </StInputContainerWrapper>
      {!isConditionMet && isInput !== '' && errorMsg !== '' && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </StInputWrapper>
  );
}

export default StyledInput;
