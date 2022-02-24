import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { api } from '@api/index';
import {
  StLink,
  StWrapper,
  StHeader,
  StTeamIssue,
  StIssueThumbnail,
  StDivisionLine,
} from './style';
import { useRecoilState } from 'recoil';
import { teamFeedbackState } from '@stores/team';
import CommonInput from '@components/common/CommonInput';
import IssueMemberList from '@components/common/IssueMemberList';
import { imgLogo } from '@assets/images';
import IssueTeamInfo from '@components/common/IssueTeamInfo';
import FeedbackCardList from '@components/FeedbackCard/List';
import { IssueData } from '@api/types/team';
import FeedbackEmptyView from '@components/common/Empty/Feedback';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const [issue, setIssue] = useState<IssueData | null>(null);
  const [feedbacks, setFeedbacks] = useRecoilState(teamFeedbackState);
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!issueID) return;
    (async () => {
      setIsValidating(true);
      const data = await api.teamService.getIssueInfo(issueID);
      setIssue(data);
      setFeedbacks(data.feedbackList);
      setIsValidating(false);
    })();
  }, [teamID, issueID]);

  return (
    <StTeamIssue>
      {isValidating && <div></div>}
      {issue !== null && teamID && issueID && (
        <StWrapper>
          <StHeader>
            <img src={imgLogo} onClick={() => navigate('/home')} />
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
            <FeedbackCardList feedbacks={feedbacks} />
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
      <Outlet />
    </StTeamIssue>
  );
}

export default TeamIssue;
