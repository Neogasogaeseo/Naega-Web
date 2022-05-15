import { StCommonInput, StInputWrapper, StInput, StSubmitButton } from './style';

interface CommonInputProps {
  width: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  isConditionPassed?: boolean;
  img?: string;
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
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
          onSubmit && onSubmit(e);
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
  );
}

export default CommonInput;
