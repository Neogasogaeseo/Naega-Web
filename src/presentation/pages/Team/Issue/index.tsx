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
import CommonInput from '@components/common/Input';
import IssueMemberList from '@components/common/IssueMemberList';
import { imgLogo } from '@assets/images';
import IssueTeamInfo from '@components/common/IssueTeamInfo';
import FeedbackCardList from '@components/FeedbackCard/List';
import FeedbackEmptyView from '@components/common/Empty/Feedback';
import { useQuery } from 'react-query';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const navigate = useNavigate();

  const { data: issue } = useQuery(['issueDetailData', `${teamID}-${issueID}`], () =>
    api.teamService.getIssueInfo(issueID ?? ''),
  );

  return (
    <StTeamIssue>
      {issue !== undefined && teamID && issueID && (
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
          {issue.feedbackList.length !== 0 ? (
            <FeedbackCardList feedbacks={issue.feedbackList} />
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
