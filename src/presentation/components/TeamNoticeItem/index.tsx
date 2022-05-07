import { api } from '@api/index';
import {
  TeamNoticeItem as TeamNoticeItemData,
  TeamNoticePaginateItems,
  TeamNoticeStatus,
} from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { COLOR } from '@styles/common/color';
import {
  StTeamNoticeItemWrapper,
  StTeamProfile,
  StTeamProfileWrapper,
  StTeamName,
  StInvitationTime,
  StAcceptButton,
  StDeclineButton,
} from './style';
import { useMutation, useQueryClient } from 'react-query';

type TeamNoticeItemProps = TeamNoticeItemData;

function TeamNoticeItem(props: TeamNoticeItemProps) {
  const { teamID, teamName, teamProfileImage, status, timeDifference } = props;
  const queryClient = useQueryClient();
  const { mutate: onAcceptClick } = useMutation(
    async () => {
      const response = await api.teamService.acceptInvitation(teamID);
      return response.isSuccess;
    },
    {
      onSuccess: () => {
        queryClient.setQueryData('notice', (old: TeamNoticePaginateItems | undefined) => {
          return {
            pages:
              old?.pages?.map((o) => ({
                ...o,
                result: o.result.map((r) =>
                  r.teamID === teamID ? { ...r, status: TeamNoticeStatus.ACCEPT } : r,
                ),
              })) ?? [],
          };
        });
      },
    },
  );

  const { mutate: onRejectClick } = useMutation(
    async () => {
      const response = await api.teamService.rejectInvitation(teamID);
      return response.isSuccess;
    },
    {
      onSuccess: () => {
        queryClient.setQueryData('notice', (old: TeamNoticePaginateItems | undefined) => {
          return {
            pages:
              old?.pages?.map((o) => ({
                ...o,
                result: o.result.map((r) =>
                  r.teamID === teamID ? { ...r, status: TeamNoticeStatus.DECLINE } : r,
                ),
              })) ?? [],
          };
        });
      },
    },
  );

  return (
    <StTeamNoticeItemWrapper>
      <StTeamProfileWrapper>
        <StTeamProfile
          src={teamProfileImage || imgEmptyProfile}
          alt={teamName}
          isDeclined={status === TeamNoticeStatus.DECLINE}
        />
        {status === TeamNoticeStatus.PENDING && (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
            <circle cx="50" cy="50" r="50" fill={COLOR.CORAL_MAIN} />
          </svg>
        )}
      </StTeamProfileWrapper>

      {status === TeamNoticeStatus.PENDING ? (
        <>
          <div>
            <StTeamName>
              <span>{teamName}</span> 팀의 초대
            </StTeamName>
            <StInvitationTime>1분전</StInvitationTime>
          </div>
          <div></div>
          <div>
            <StAcceptButton onClick={() => onAcceptClick()}>수락</StAcceptButton>
            <StDeclineButton onClick={() => onRejectClick()}>거절</StDeclineButton>
          </div>
        </>
      ) : (
        <div>
          <div>
            <StTeamName>
              <span>{teamName}</span> 팀의 초대를{' '}
              {status === TeamNoticeStatus.ACCEPT ? '수락' : '거절'}
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
