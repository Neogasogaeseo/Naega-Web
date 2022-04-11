import { api } from '@api/index';
import { TeamNoticeItem as TeamNoticeItemData } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { COLOR } from '@styles/common/color';
import { useState } from 'react';
import {
  StTeamNoticeItemWrapper,
  StTeamProfile,
  StTeamProfileWrapper,
  StTeamName,
  StInvitationTime,
  StAcceptButton,
  StDeclineButton,
} from './style';

type TeamNoticeItemProps = TeamNoticeItemData;

function TeamNoticeItem(props: TeamNoticeItemProps) {
  const { teamID, teamName, teamProfileImage, status, timeDifference } = props;
  const [teamStatus, setTeamStatus] = useState<TeamNoticeItemProps['status']>(status);

  const onAcceptClick = async () => {
    const response = await api.teamService.acceptInvitation(teamID);
    if (response.isSuccess) {
      setTeamStatus('ACCEPT');
    }
  };

  const onRejectClick = async () => {
    const response = await api.teamService.rejectInvitation(teamID);
    if (response.isSuccess) {
      setTeamStatus('DECLINE');
    }
  };
  return (
    <StTeamNoticeItemWrapper>
      <StTeamProfileWrapper>
        <StTeamProfile
          src={teamProfileImage || imgEmptyProfile}
          alt={teamName}
          isDeclined={teamStatus === 'DECLINE'}
        />
        {teamStatus === 'PENDING' && (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
            <circle cx="50" cy="50" r="50" fill={COLOR.CORAL_MAIN} />
          </svg>
        )}
      </StTeamProfileWrapper>

      {teamStatus === 'PENDING' ? (
        <>
          <div>
            <StTeamName>
              <span>{teamName}</span> 팀의 초대
            </StTeamName>
            <StInvitationTime>1분전</StInvitationTime>
          </div>
          <div></div>
          <div>
            <StAcceptButton onClick={onAcceptClick}>수락</StAcceptButton>
            <StDeclineButton onClick={onRejectClick}>거절</StDeclineButton>
          </div>
        </>
      ) : (
        <div>
          <div>
            <StTeamName>
              <span>{teamName}</span> 팀의 초대를 {teamStatus === 'ACCEPT' ? '수락' : '거절'}
              했습니다
            </StTeamName>
            <StInvitationTime>{timeDifference} 전</StInvitationTime>
          </div>
        </div>
      )}
    </StTeamNoticeItemWrapper>
  );
}

export default TeamNoticeItem;
