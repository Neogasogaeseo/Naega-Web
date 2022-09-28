import { InputHTMLAttributes } from 'react';

import FormItem from '../FormItem';
import { StCommonInput, StInputWrapper, StInput, StSubmitButton } from './style';

type InputCustomProps = 'width' | 'onChange' | 'value' | 'onSubmit';

interface CommonInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, InputCustomProps> {
  value: string;
  width: string;
  defaultValue?: string;
  errorMsg?: string;
  img?: string;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  submitButtonValue?: string;
  submitButtonDisabled?: boolean;
}

function CommonInput(props: CommonInputProps) {
  const {
    width,
    placeholder,
    maxLength,
    value,
    defaultValue,
    onChange,
    onBlur,
    onSubmit,
    img,
    disabled = false,
    submitButtonValue,
    submitButtonDisabled = false,
    errorMsg,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <FormItem value={value ?? ''} errorMsg={errorMsg} maxLength={maxLength}>
      <StCommonInput>
        <StInputWrapper
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.(e);
          }}
          width={width}
        >
          <StInput
            width={width}
            onChange={handleChange}
            onBlur={onBlur}
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
      </StCommonInput>
    </FormItem>
  );
}

export default CommonInput;
