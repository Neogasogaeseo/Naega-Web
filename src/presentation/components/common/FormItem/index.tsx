import { ReactNode } from 'react';

import { StErrorMsg, StFormItem, StInputStatus, StCount } from './style';

interface FormItemProps {
  children: ReactNode;
  value: string;
  errorMsg?: string;
  maxLength?: number;
}

export default function FormItem(props: FormItemProps) {
  const { errorMsg, children, value, maxLength } = props;
  return (
    <StFormItem>
      {children}
      <StInputStatus>
        {errorMsg && <StErrorMsg>{errorMsg}</StErrorMsg>}
        {maxLength && <StCount>{`${value?.length}/${maxLength}`}</StCount>}
      </StInputStatus>
    </StFormItem>
  );
}
