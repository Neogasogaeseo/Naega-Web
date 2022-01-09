import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@api/index';
import { IssueData } from '@api/types/team';

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
    <>
      <div>팀원소개서 상세, 이슈 번호는 {issueID}</div>
      {isValidating && <div>로딩중</div>}
      <div>{issue && issue.title}</div>
    </>
  );
}

export default TeamIssue;
