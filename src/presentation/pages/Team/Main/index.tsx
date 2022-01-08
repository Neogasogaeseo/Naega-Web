import React from 'react';
import { useParams } from 'react-router-dom';

function TeamMain() {
  const { teamID } = useParams();
  return <div>팀원소개서 메인, 팀 번호는 {teamID}</div>;
}

export default TeamMain;
