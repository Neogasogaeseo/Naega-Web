import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { IcBack } from '@assets/icons';
import { StTeamMember, StMemberInfo } from './style';
import { imgEmptyProfile } from '@assets/images';

function TeamMember() {
  const navigate = useNavigate();
  const { teamID } = useParams();

  if (teamID === undefined) navigate('/');

  const { data: teamInfoData } = useQuery(['teamDetailData', teamID], () =>
    api.teamService.getTeamInfo(Number(teamID)),
  );

  return (
    <StTeamMember>
      <header>
        <IcBack onClick={() => navigate(-1)} />
        <div>팀원 목록</div>
        <button>완료</button>
      </header>
      <StMemberInfo>
        {teamInfoData &&
          teamInfoData.teamMemberList.map((member) => (
            <div key={member.id}>
              <img src={member.profileImage || imgEmptyProfile} />
              <div>
                <span>{member.profileName}</span>
                <span>{member.id}</span>
              </div>
            </div>
          ))}
      </StMemberInfo>
    </StTeamMember>
  );
}

export default TeamMember;
