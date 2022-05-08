import { useState } from 'react';

import { FormDetail } from '@api/types/user';
import { StPickerList, StButton } from './style';

interface PickerListProps {
  formList: FormDetail[];
  isSquare: boolean;
  setID: (ID: number) => void;
}

function PickerList(props: PickerListProps) {
  const { formList, isSquare, setID } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StPickerList>
      <StButton isSquare={isSquare} isClicked={isClicked}>
        ALL
      </StButton>
      {formList.map((form) => (
        <StButton
          key={form.formId}
          img={form.darkIconImage}
          isSquare={isSquare}
          isClicked={isClicked}
          onClick={() => {
            setID(form.formId);
            setIsClicked(true);
          }}
        />
      ))}
    </StPickerList>
  );
}

export default PickerList;
