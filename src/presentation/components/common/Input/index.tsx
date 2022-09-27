import { StCommonInput, StInputWrapper, StInput, StSubmitButton, StInputStatus } from './style';

interface CommonInputProps {
  width: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  errorMsg?: string;
  img?: string;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  disabled?: boolean;
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
    errorMsg,
    onSubmit,
    img,
    disabled = false,
    submitButtonValue,
    submitButtonDisabled = false,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
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
      <StInputStatus>
        <div>{errorMsg && errorMsg}</div>
        <div>{maxLength && `${value?.length}/${maxLength}`}</div>
      </StInputStatus>
    </StCommonInput>
  );
}

export default CommonInput;
