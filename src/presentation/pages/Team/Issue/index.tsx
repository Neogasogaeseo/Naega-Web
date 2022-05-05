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
import { IcMeatball } from '@assets/icons';
import DeleteFeedbackModal from '@components/common/Modal/DeleteFeedback';
import DeleteIssueModal from '@components/common/Modal/DeleteIssue';
import { useLoginUser } from '@hooks/useLoginUser';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const { id } = useLoginUser();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [bottomSheetState, setBottomSheetState] = useState<
    | {
        id: number;
        isMine: boolean;
        isForMe: boolean;
        isPinned: boolean;
        mode: 'issue' | 'feedback';
      }
    | undefined
  >(undefined);
  const [modalState, setModalState] = useState<
    { mode: 'issue' | 'feedback'; id: number } | undefined
  >(undefined);

  const { data: issue } = useQuery(['issueDetailData', `${teamID}-${issueID}`], () =>
    api.teamService.getIssueInfo(issueID ?? ''),
  );
  const [feedbacks, setFeedbacks] = useState<FeedbackDetail[]>([]);

  useEffect(() => {
    if (issue) setFeedbacks(issue.feedbackList);
  }, [issue]);

  const onFeedbackClicked = (id: number, isMine: boolean, isForMe: boolean, isPinned: boolean) => {
    setIsBottomSheetOpened(true);
    setBottomSheetState({
      id,
      isMine,
      isForMe,
      isPinned,
      mode: 'feedback',
    });
  };

  const onManageIssueClicked = () => {
    setBottomSheetState({
      id: +(issueID ?? 0),
      isMine: true,
      isForMe: true,
      isPinned: true,
      mode: 'issue',
    });
    setIsBottomSheetOpened(true);
  };

  const openFeedbackDeleteModal = () => {
    if (!bottomSheetState) return;
    setModalState({ mode: 'feedback', id: bottomSheetState.id });
  };

  const openIssueDeleteModal = () => {
    if (!bottomSheetState) return;
    setModalState({ mode: 'issue', id: bottomSheetState.id });
  };

  const closeModal = () => setModalState(undefined);

  const closeBottomSheet = () => setBottomSheetState(undefined);

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
                {issue.writerID === id && <IcMeatball onClick={onManageIssueClicked} />}
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
            openFeedbackDeleteModal={openFeedbackDeleteModal}
            openIssueDeleteModal={openIssueDeleteModal}
            {...bottomSheetState}
          />
        )}
        {modalState !== undefined &&
          (modalState.mode === 'feedback' ? (
            <DeleteFeedbackModal
              isOpened
              closeModal={closeModal}
              closeBottomSheet={closeBottomSheet}
              feedbackID={modalState.id}
            />
          ) : (
            <DeleteIssueModal
              isOpened
              closeModal={closeModal}
              closeBottomSheet={closeBottomSheet}
              issueID={modalState.id}
            />
          ))}
        <Outlet />
      </StTeamIssue>
    </>
  );
}

export default TeamIssue;
