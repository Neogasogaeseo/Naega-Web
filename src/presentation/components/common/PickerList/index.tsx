import { useState } from 'react';

import { FormDetail } from '@api/types/user';
import { TeamMemberNoneId } from '@api/types/team';
import { StPickerList, StButton } from './style';
interface PickerListProps {
  formList?: FormDetail[];
  teamList?: TeamMemberNoneId[];
  isSquare: boolean;
  setID: (ID: number) => void;
}

function PickerList(props: PickerListProps) {
  const { formList, teamList, isSquare, setID } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StPickerList>
      <StButton isSquare={isSquare} isClicked={isClicked}>
        ALL
      </StButton>
      {formList &&
        formList.map((form) => (
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
      {teamList &&
        teamList.map((team) => (
          <StButton
            key={team.id}
            img={team.profileImage}
            isSquare={isSquare}
            isClicked={isClicked}
            onClick={() => {
              setID(team.id);
              setIsClicked(true);
            }}
          />
        ))}
    </StPickerList>
  );
}

export default PickerList;
