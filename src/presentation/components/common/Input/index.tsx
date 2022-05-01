import React, { useState } from 'react';
import { StCommonInput, StInputWrapper, StInput, StErrorMsg, StSubmitButton } from './style';

interface CommonInputProps {
  width: string;
  errorMsg?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  isConditionPassed?: boolean;
  img?: string;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
  submitButtonValue?: string;
  submitButtonDisabled?: boolean;
}

function CommonInput(props: CommonInputProps) {
  const {
    width,
    errorMsg,
    placeholder,
    maxLength,
    value,
    defaultValue,
    isConditionPassed,
    onChange,
    onSubmit,
    img,
    disabled = false,
    submitButtonValue,
    submitButtonDisabled = false,
  } = props;
  const [isInput, setIsInput] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  };

  return (
    <StCommonInput>
      <StInputWrapper
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit && onSubmit(e);
        }}
        width={width}
      >
        <StInput
          width={width}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder || ''}
          value={value}
          defaultValue={defaultValue}
          img={img}
          disabled={disabled}
          hasButton={submitButtonValue !== undefined}
        />
        {submitButtonValue && (
          <StSubmitButton disabled={submitButtonDisabled}>{submitButtonValue}</StSubmitButton>
        )}
      </StInputWrapper>
      {!isConditionPassed && isInput !== '' && errorMsg && <StErrorMsg>{errorMsg}</StErrorMsg>}
    </StCommonInput>
  );
}

export default CommonInput;
