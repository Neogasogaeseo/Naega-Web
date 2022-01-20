import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { api } from '@api/index';
import { StLink, StWrapper, StHeader, StTeamIssue, StIssueThumbnail } from './style';
import { useRecoilState } from 'recoil';
import { teamIssueState } from '@stores/team';
import CommonInput from '@components/common/CommonInput';
import IssueMemberList from '@components/common/IssueMemberList';
import { imgLogo } from '@assets/images';
import IssueTeamInfo from '@components/common/IssueTeamInfo';
import FeedbackCardList from '@components/FeedbackCard/List';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const [issue, setIssue] = useRecoilState(teamIssueState);
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!issueID) return;
    (async () => {
      setIsValidating(true);
      const data = await api.teamService.getIssueInfo(issueID);
      setIssue(data);
      setIsValidating(false);
    })();
  }, [teamID, issueID]);

  useEffect(() => {
    return () => setIssue(null); // 언마운트 시 해제
  }, []);

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
              <IssueTeamInfo teamName={issue.team.title} memberName={issue.writer} />
            </div>
          </StHeader>
          {issue.team.thumbnail && (
            <StIssueThumbnail src={issue.team.thumbnail} alt={issue.title} />
          )}
          {issue !== null && <FeedbackCardList feedbacks={issue.feedbackList} />}
        </StWrapper>
      )}
      <StLink to={`/team/${teamID}/${issueID}/create`}>
        <CommonInput width="100%" placeholder="피드백을 입력해주세요" disabled={true} />
      </StLink>
      <Outlet />
    </StTeamIssue>
  );
}

export default TeamIssue;
