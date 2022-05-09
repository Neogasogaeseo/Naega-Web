import { useState } from 'react';

import { FormDetail } from '@api/types/user';
import { TeamMemberNoneId } from '@api/types/team';
import { StSelectionList, StDefaultButton, StButton } from './style';
interface SelectionListProps {
  formList?: FormDetail[];
  teamList?: TeamMemberNoneId[];
  isSquare: boolean;
  setID: (ID: number) => void;
}

function SelectionList(props: SelectionListProps) {
  const { formList, teamList, isSquare, setID } = props;
  const [isDefault, setIsDefault] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StSelectionList>
      <StDefaultButton
        isSquare={isSquare}
        isDefault={isDefault}
        isClicked={isClicked}
        onClick={() => setIsDefault(true)}
      >
        ALL
      </StDefaultButton>
      {formList &&
        formList.map((form) => (
          <StButton
            key={form.formId}
            img={form.darkIconImage}
            isSquare={isSquare}
            isDefault={isDefault}
            isClicked={isClicked}
            onClick={() => {
              setID(form.formId);
              setIsClicked(true);
              setIsDefault(false);
            }}
          />
        ))}
      {teamList &&
        teamList.map((team) => (
          <StButton
            key={team.id}
            img={team.profileImage}
            isSquare={isSquare}
            isDefault={isDefault}
            isClicked={isClicked}
            onClick={() => {
              setID(team.id);
              setIsClicked(true);
            }}
          />
        ))}
    </StSelectionList>
  );
}

export default SelectionList;
