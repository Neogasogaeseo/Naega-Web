import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

import CommonNavigation from '@components/common/Navigation';
import { StTeamMember, StTeamMemberManagement } from './style';
import { imgEmptyProfile } from '@assets/images';
import { api } from '@api/index';
import TeamMemberAddForEdit from '@components/TeamMemberAdd/ForEdit';
import { useResetRecoilState } from 'recoil';
import { selectedUserListState } from '@stores/team';

export default function TeamMemberManagement() {
  const { teamID } = useParams();
  const navigate = useNavigate();
  const { data: memberList } = useQuery(
    ['teamEditMember', teamID ?? ''],
    () => {
      if (teamID) return api.teamService.getTeamEditMember(+teamID);
    },
    { useErrorBoundary: true },
  );
  const [isAddMode, setIsAddMode] = useState(false);
  const resetSelectedUserList = useResetRecoilState(selectedUserListState);

  useEffect(() => {
    if (!teamID) navigate('/home');
  }, []);

  return isAddMode && teamID ? (
    <TeamMemberAddForEdit
      teamID={+teamID}
      onClickSubmitButton={() => {
        setIsAddMode(false);
        resetSelectedUserList();
      }}
      onClickBackButton={() => {
        setIsAddMode(false);
        // 모달
        resetSelectedUserList();
      }}
    />
  ) : (
    <>
      <CommonNavigation
        title="팀원 관리"
        submitButton={{ content: '추가', onClick: () => setIsAddMode(true) }}
      />
      <StTeamMemberManagement>
        {memberList &&
          memberList.map((member) => (
            <StTeamMember key={member.id} isConfirmed={member.isConfirmed}>
              <div>
                <img src={member.image || imgEmptyProfile} />
                <div>
                  <div>{member.name}</div>
                  <div>{`@${member.profileID}`}</div>
                </div>
              </div>
              <button>{member.isConfirmed ? '팀원' : '초대 중'}</button>
            </StTeamMember>
          ))}
      </StTeamMemberManagement>
    </>
  );
}
