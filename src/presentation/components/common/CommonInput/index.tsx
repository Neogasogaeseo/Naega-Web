import React, { useState } from 'react';
import { StCommonInput, StInputWrapper, StInput, StErrorMsg } from './style';

interface CommonInputProps {
  width: string;
  errorMsg?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  isConditionMet?: boolean;
  img?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function CommonInput(props: CommonInputProps): React.ReactElement {
  const {
    width,
    errorMsg,
    placeholder,
    maxLength,
    value,
    isConditionMet,
    onChange,
    onKeyPress,
    img,
  } = props;
  const [isInput, setIsInput] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  }

  return (
    <StCommonInput>
      <StInputWrapper width={width}>
        <StInput
          width={width}
          onChange={handleOnChange}
          onKeyPress={onKeyPress}
          maxLength={maxLength}
          placeholder={placeholder || ''}
          value={value}
          img={img}
        />
      </StInputWrapper>
      {!isConditionMet && isInput !== '' && errorMsg !== '' && <StErrorMsg>{errorMsg}</StErrorMsg>}
    </StCommonInput>
  );
}

export default CommonInput;
