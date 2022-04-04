import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { StTeamMember, StMemberInfo, StHostBox } from './style';
import { IcBack } from '@assets/icons';
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
      </header>
      <StMemberInfo>
        {teamInfoData &&
          teamInfoData.teamMemberList.map(
            ({ id, profileImage, profileName, profileId, isHost }) => (
              <div key={id}>
                <img src={profileImage || imgEmptyProfile} />
                <div>
                  <span>{profileName}</span>
                  <span>@{profileId}</span>
                </div>
                <StHostBox isHost={isHost}>{isHost ? '팀장' : '팀원'}</StHostBox>
              </div>
            ),
          )}
      </StMemberInfo>
    </StTeamMember>
  );
}

export default TeamMember;
