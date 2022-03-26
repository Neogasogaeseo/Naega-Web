import React, { useState } from 'react';
import { StCommonInput, StInputWrapper, StInput, StErrorMsg, StSubmitButton } from './style';

interface CommonInputProps {
  width: string;
  errorMsg?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  isJoinConditionPassed?: boolean;
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
    isJoinConditionPassed,
    onChange,
    onSubmit,
    img,
    disabled = false,
    submitButtonValue,
    submitButtonDisabled = false,
  } = props;
  const [isInput, setIsInput] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  }
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
          onChange={handleOnChange}
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
      {!isJoinConditionPassed && isInput !== '' && errorMsg && <StErrorMsg>{errorMsg}</StErrorMsg>}
    </StCommonInput>
  );
}

export default CommonInput;
