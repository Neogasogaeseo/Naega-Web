import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { api } from '@api/index';
import { StLink, StWrapper } from './style';
import { useRecoilState } from 'recoil';
import { teamIssueState } from '@stores/team';
import IssueCard from '@components/IssueCard';
import CommonInput from '@components/common/CommonInput';

function TeamIssue() {
  const { teamID, issueID } = useParams();
  const [issue, setIssue] = useRecoilState(teamIssueState);
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

  useEffect(() => {
    return () => setIssue(null); // 언마운트 시 해제
  }, []);

  return (
    <StWrapper>
      <div>
        <div>팀원소개서 상세, 이슈 번호는 {issueID}</div>
        {isValidating && <div>로딩중</div>}
        <div>{issue !== null && issue.title}</div>
        {issue !== null && issue.issueList.map((issue) => <IssueCard key={issue.id} {...issue} />)}
      </div>
      <StLink to={`/team/${teamID}/${issueID}/create`}>
        <CommonInput width="100%" placeholder="피드백을 입력해주세요" disabled={true} />
      </StLink>
      <Outlet />
    </StWrapper>
  );
}

export default TeamIssue;
