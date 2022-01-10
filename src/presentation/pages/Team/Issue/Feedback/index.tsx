import ProfileListSelectable from '@components/ProfileListSelectable';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { teamIssueState } from '@stores/team';
import {
  StAbsoluteWrapper,
  StBlackBlur,
  StWrapper,
  StSection,
  StSectionTitle,
  StButton,
} from './style';
import CommonInput from '@components/common/CommonInput';

function TeamIssueFeedback() {
  const teamIssue = useRecoilValue(teamIssueState);
  const [selectedUserID, setSelectedUserID] = useState<number | null>(null);

  return (
    <>
      <StAbsoluteWrapper>
        <StBlackBlur />
        <StWrapper>
          <StSection>
            <StSectionTitle>팀원을 선택하고 피드백을 남겨주세요</StSectionTitle>
            {teamIssue && (
              <ProfileListSelectable
                isSquare={false}
                profiles={teamIssue.team.teammates}
                selectedProfileID={selectedUserID}
                setSelectedProfileID={setSelectedUserID}
              />
            )}
            <CommonInput width="100%" placeholder="직접 입력해주세요" />
          </StSection>
          <StSection>
            <StSectionTitle>키워드를 입력해주세요</StSectionTitle>
            <Link to="keyword">
              <CommonInput width="100%" placeholder="키워드를 입력해주세요" disabled={true} />
            </Link>
            <StButton>이슈 추가</StButton>
          </StSection>
        </StWrapper>
      </StAbsoluteWrapper>
      <Outlet />
    </>
  );
}

export default TeamIssueFeedback;
