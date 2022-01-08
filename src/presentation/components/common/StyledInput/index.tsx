import React, { useState } from 'react';
import { St, InputContainer, Input, ErrorMsg } from './style';

interface Props {
  width: string;
  errorMsg?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  isConditionMet?: boolean;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = ({
  width,
  errorMsg,
  placeholder,
  maxLength,
  value,
  isConditionMet,
  onChange,
  onKeyPress,
}: Props): React.ReactElement => {
  const [isInput, setIsInput] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  }

  return (
    <St>
      <InputContainer width={width}>
        <Input
          width={width}
          onChange={handleOnChange}
          onKeyPress={onKeyPress}
          maxLength={maxLength}
          placeholder={placeholder || ''}
          value={value}
        />
      </InputContainer>
      {!isConditionMet && isInput !== '' && errorMsg !== '' && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </St>
  );
};

export default StyledInput;
