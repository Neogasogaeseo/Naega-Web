import ProfileListSelectable from '@components/ProfileListSelectable';
import React, { useEffect, useState } from 'react';
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
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';

interface Keyword {
  content: string;
  color: string;
}

interface User {
  id: number;
  profileImage?: string;
  profileName: string;
}

function TeamIssueFeedback() {
  const teamIssue = useRecoilValue(teamIssueState);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);

  useEffect(() => {
    if (teamIssue?.team.teammates[0] !== undefined) setSelectedUser(teamIssue?.team.teammates[0]);
  }, [teamIssue]);

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
                selectedProfile={selectedUser}
                setSelectedProfile={setSelectedUser}
              />
            )}
            <CommonInput width="100%" placeholder="직접 입력해주세요" />
          </StSection>
          <StSection>
            <StSectionTitle>키워드를 입력해주세요</StSectionTitle>
            <Link to="keyword">
              <CommonInput width="100%" placeholder="키워드를 입력해주세요" disabled={true} />
            </Link>
            <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
            <StButton>이슈 추가</StButton>
          </StSection>
        </StWrapper>
      </StAbsoluteWrapper>
      <Outlet
        context={{
          keywordList,
          addKeyword: (keyword: Keyword) =>
            setKeywordList((prev) =>
              prev.map((prev) => prev.content).includes(keyword.content)
                ? prev
                : [...prev, keyword],
            ),
          removeKeyword: (targetKeyword: Keyword) =>
            setKeywordList((prev) =>
              prev.filter((keyword) => keyword.content !== targetKeyword.content),
            ),
          targetUser: selectedUser,
        }}
      />
    </>
  );
}

export default TeamIssueFeedback;
