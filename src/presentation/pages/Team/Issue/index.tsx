import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { api } from '@api/index';
import { IssueData } from '@api/types/team';
import { StLink, StWrapper } from './style';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const [issue, setIssue] = useState<IssueData | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    if (!teamID || !issueID) return;
    (async () => {
      setIsValidating(true);
      const data = await api.teamService.getIssueInfo(teamID, issueID);
      setIssue(data);
      setIsValidating(false);
    })();
  }, [teamID, issueID]);

  return (
    <StWrapper>
      <div>
        <div>팀원소개서 상세, 이슈 번호는 {issueID}</div>
        {isValidating && <div>로딩중</div>}
        <div>{issue && issue.title}</div>
      </div>
      <StLink to={`/team/${teamID}/${issueID}/create`}></StLink>
      <Outlet />
    </StWrapper>
  );
}

export default TeamIssue;
