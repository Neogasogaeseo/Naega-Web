import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

import CommonNavigation from '@components/common/Navigation';
import { StTeamMember, StTeamMemberManagement } from './style';
import { imgEmptyProfile } from '@assets/images';
import { api } from '@api/index';

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

  useEffect(() => {
    if (!teamID) navigate('/home');
  }, []);

  return (
    <>
      <CommonNavigation
        title="팀원 관리"
        submitButton={{ content: '추가', onClick: () => console.log() }}
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
