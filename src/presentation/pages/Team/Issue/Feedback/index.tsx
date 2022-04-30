import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import { TeamMemberNoneId } from '@api/types/team';
import ProfileListSelectable from '@components/ProfileListSelectable';
import CommonInput from '@components/common/Input';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import {
  StAbsoluteWrapper,
  StBlackBlur,
  StWrapper,
  StSection,
  StSectionTitle,
  StButton,
  StTextarea,
} from './style';
import { useQuery, useQueryClient } from 'react-query';

function TeamIssueFeedback() {
  const [selectedUser, setSelectedUser] = useState<TeamMemberNoneId | null>(null);
  const [content, setContent] = useState<string>('');
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();
  const { teamID, issueID } = useParams();
  const queryClient = useQueryClient();

  const { data: teamMembers } = useQuery(['teamMemberWithoutSelf', teamID], () =>
    api.teamService.getTeamMembers(teamID ?? ''),
  );
  useEffect(() => {
    if (!teamMembers) return;
    setSelectedUser(teamMembers[0]);
  }, [teamMembers]);

  const onPostFeedback = async () => {
    if (!issueID) return;
    if (isNaN(+issueID)) return;
    if (!selectedUser) return;
    setIsConfirming(true);
    const response = await api.teamService.postFeedback({
      issueId: +issueID,
      taggedUserId: selectedUser.id,
      content,
      keywordIds: keywordList.map((keyword) => +keyword.id),
    });
    if (response.isSuccess) {
      queryClient.invalidateQueries(['issueDetailData', `${teamID}-${issueID}`]);
      navigate(-1);
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
              <CommonInput
                width="100%"
                placeholder="팀원을 표현하는 키워드를 입력해주세요"
                disabled={true}
              />
            </Link>
            <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
            <StButton
              onClick={onPostFeedback}
              disabled={content.length == 0 || keywordList.length == 0 || isConfirming}
            >
              완료
            </StButton>
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
