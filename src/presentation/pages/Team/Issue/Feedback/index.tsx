import ProfileListSelectable from '@components/ProfileListSelectable';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import {
  StAbsoluteWrapper,
  StBlackBlur,
  StWrapper,
  StSection,
  StSectionTitle,
  StButton,
  StTextarea,
} from './style';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { Keyword } from '@api/types/user';
import { TeamMemberNoneId } from '@api/types/team';
import { api } from '@api/index';
import { useSetRecoilState } from 'recoil';
import { useLoginUser } from '@hooks/useLoginUser';
import { teamFeedbackState } from '@stores/team';

function TeamIssueFeedback() {
  const [selectedUser, setSelectedUser] = useState<TeamMemberNoneId | null>(null);
  const [content, setContent] = useState<string>('');
  const [teamMembers, setTeamMembers] = useState<TeamMemberNoneId[] | null>(null);
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  const setFeedbacks = useSetRecoilState(teamFeedbackState);
  const navigate = useNavigate();
  const { teamID, issueID } = useParams();
  const { username } = useLoginUser();

  useEffect(() => {
    if (!teamID) return;
    (async () => {
      const data = await api.teamService.getTeamMembers(teamID);
      setTeamMembers(data);
      setSelectedUser(data[0]);
    })();
  }, [teamID]);

  const onPostFeedback = async () => {
    if (!issueID) return;
    if (isNaN(+issueID)) return;
    if (!selectedUser) return;
    const response = await api.teamService.postFeedback({
      issueId: +issueID,
      taggedUserId: selectedUser.id,
      content,
      keywordIds: keywordList.map((keyword) => +keyword.id),
    });
    if (response.isSuccess) {
      setFeedbacks((prev) => [
        ...prev,
        {
          id: response.createdFeedbackID.toString(),
          writer: username.toString(),
          target: selectedUser.profileName.toString(),
          targetProfileID: '',
          body: content.toString(),
          createdAt: '',
          keywordList: [...keywordList],
          isBookmarked: false,
        },
      ]);
      navigate('../');
    }
  };

  return (
    <>
      <StAbsoluteWrapper>
        <StBlackBlur onClick={() => navigate(-1)} />
        <StWrapper>
          <StSection>
            <StSectionTitle>팀원을 선택하고 피드백을 남겨주세요</StSectionTitle>
            {teamMembers && (
              <ProfileListSelectable
                isSquare={false}
                profiles={teamMembers}
                selectedProfile={selectedUser}
                setSelectedProfile={setSelectedUser}
              />
            )}
            <StTextarea
              placeholder="칭찬이나 전달하고 싶은 피드백을 남겨주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </StSection>
          <StSection>
            <StSectionTitle>피드백에 대한 팀원의 키워드를 남겨주세요</StSectionTitle>
            <Link to="keyword">
              <CommonInput width="100%" placeholder="팀원을 표현하는 키워드를 입력해주세요" disabled={true} />
            </Link>
            <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
            <StButton onClick={onPostFeedback}>완료</StButton>
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
