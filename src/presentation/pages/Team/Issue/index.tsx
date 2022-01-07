import React from 'react';
import { useParams } from 'react-router-dom';

function TeamIssue() {
  const { issueID } = useParams();
  return <div>팀원소개서 상세, 이슈 번호는 {issueID}</div>;
}

export default TeamIssue;
