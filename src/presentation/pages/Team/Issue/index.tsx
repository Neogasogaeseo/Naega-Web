import { Outlet, useParams } from 'react-router-dom';
import { api } from '@api/index';
import {
  StLink,
  StWrapper,
  StHeader,
  StTeamIssue,
  StIssueThumbnail,
  StDivisionLine,
} from './style';
import CommonInput from '@components/common/Input';
import IssueMemberList from '@components/common/IssueMemberList';
import IssueTeamInfo from '@components/common/IssueTeamInfo';
import FeedbackCardList from '@components/FeedbackCard/List';
import FeedbackEmptyView from '@components/common/Empty/Feedback';
import { useQuery } from 'react-query';
import TeamsoseoPickerBottomSheet from '@components/common/BottomSheet/TeamsoseoPicker';
import { useState } from 'react';
import { useEffect } from 'react';
import { FeedbackDetail } from '@api/types/team';
import CommonNavigation from '@components/common/Navigation';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [bottomSheetState, setBottomSheetState] = useState<
    { feedbackID: number; isMine: boolean; isForMe: boolean; isPinned: boolean } | undefined
  >(undefined);

  const { data: issue } = useQuery(['issueDetailData', `${teamID}-${issueID}`], () =>
    api.teamService.getIssueInfo(issueID ?? ''),
  );
  const [feedbacks, setFeedbacks] = useState<FeedbackDetail[]>([]);

  useEffect(() => {
    if (issue) setFeedbacks(issue.feedbackList);
  }, [issue]);

  const onFeedbackClicked = (
    feedbackID: number,
    isMine: boolean,
    isForMe: boolean,
    isPinned: boolean,
  ) => {
    setIsBottomSheetOpened(true);
    setBottomSheetState({
      feedbackID,
      isMine,
      isForMe,
      isPinned,
    });
  };

  return (
    <>
      <StTeamIssue>
        <CommonNavigation />
        {issue !== undefined && teamID && issueID && (
          <StWrapper>
            <StHeader>
              <div>
                <div>{issue.category}</div>
                <div>{issue.createdAt}</div>
              </div>
              <div>{issue.title}</div>
              <div>
                <IssueMemberList
                  teamID={teamID}
                  issueNumber={+issueID}
                  issueMembers={issue.team.teammates}
                />
                <IssueTeamInfo
                  teamImage={issue.team.teamProfileImage}
                  teamName={issue.team.title}
                  memberName={issue.writer}
                />
              </div>
            </StHeader>
            {issue.team.thumbnail && (
              <StIssueThumbnail src={issue.team.thumbnail} alt={issue.title} />
            )}
            <StDivisionLine />
            {feedbacks.length !== 0 ? (
              <FeedbackCardList
                feedbacks={feedbacks}
                openBottomSheet={onFeedbackClicked}
                parentPage="teamsoseo"
              />
            ) : (
              <FeedbackEmptyView hasThumbnail={issue.team.thumbnail !== null} />
            )}
          </StWrapper>
        )}
        <StLink to="./create">
          <CommonInput
            width="100%"
            placeholder="팀원에게 이슈에 대한 피드백을 남겨주세요"
            disabled={true}
          />
        </StLink>
        {bottomSheetState !== undefined && (
          <TeamsoseoPickerBottomSheet
            opened={isBottomSheetOpened}
            close={() => setIsBottomSheetOpened(false)}
            {...bottomSheetState}
          />
        )}
        <Outlet />
      </StTeamIssue>
    </>
  );
}

export default TeamIssue;
