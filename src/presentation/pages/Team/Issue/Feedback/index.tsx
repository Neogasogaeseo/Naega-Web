import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import { FeedbackEditInfo, TeamMemberNoneId } from '@api/types/team';
import ProfileListSelectable from '@components/ProfileListSelectable';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import {
  StAbsoluteWrapper,
  StBlackBlur,
  StWrapper,
  StSection,
  StSectionTitle,
  StButton,
  StTextarea,
  StEmptyWrapper,
  StTargetUser,
} from './style';
import { IcLock } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';
import { useToast } from '@hooks/useToast';
import { StInput } from '@components/common/Input/style';

interface TeamIssueFeedbackProps {
  isEditMode?: boolean;
  feedbackEditInfo?: FeedbackEditInfo;
  closeBottomSheet?: () => void;
}

function TeamIssueFeedback(props: TeamIssueFeedbackProps) {
  const { isEditMode = false } = props;
  const { feedbackEditInfo, closeBottomSheet } = useOutletContext<TeamIssueFeedbackProps>();
  const { fireToast } = useToast();

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

  const { mutate: editFeedback } = useMutation(
    async () => {
      if (feedbackEditInfo) {
        const response = await api.teamService.editFeedback({
          id: feedbackEditInfo.id,
          targetID: feedbackEditInfo.targetID,
          content: content,
          keywordList: keywordList,
        });
        return response;
      }
    },
    {
      onSuccess: () => {
        closeBottomSheet && closeBottomSheet();
        queryClient.invalidateQueries(['issueDetailData', `${teamID}-${issueID}`]);
        navigate(-1);
      },
    },
  );

  useEffect(() => {
    if (isEditMode && feedbackEditInfo && teamMembers) {
      const selectedUserImage = teamMembers.find(
        (member) => member.id === +feedbackEditInfo.targetID,
      )?.profileImage;
      setSelectedUser({
        id: +feedbackEditInfo.targetID,
        profileName: feedbackEditInfo.target,
        profileImage: selectedUserImage ?? '',
      });
      setContent(feedbackEditInfo.content);
      setKeywordList(feedbackEditInfo.keywordList);
    }
  }, []);

  useEffect(() => {
    if (!teamMembers) return;
    if (!isEditMode) setSelectedUser(teamMembers[0]);
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

  const submit = () => {
    if (isEditMode) editFeedback();
    else onPostFeedback();
  };
  useEffect(() => {
    if (!isEditMode) {
      setKeywordList([]);
      setContent('');
    }
  }, [selectedUser]);

  return (
    <>
      <StAbsoluteWrapper>
        <StBlackBlur onClick={() => navigate(-1)} />
        {teamMembers?.length === 0 ? (
          <StEmptyWrapper>
            <IcLock />
            <div>
              <div>팀원이 없어서 피드백을 작성할 수 없어요</div>
              <div>팀원을 초대해보세요</div>
            </div>
            <button onClick={() => navigate(`/team/${teamID}/member/management`)}>
              팀원 추가하기
            </button>
          </StEmptyWrapper>
        ) : (
          <StWrapper>
            <StSection>
              {isEditMode ? (
                <StTargetUser>
                  <img src={selectedUser?.profileImage || imgEmptyProfile} />
                  <div>@ {selectedUser?.profileName}</div>
                </StTargetUser>
              ) : (
                <>
                  <StSectionTitle>팀원을 선택하고 피드백을 남겨주세요</StSectionTitle>
                  {teamMembers && (
                    <ProfileListSelectable
                      isSquare={false}
                      profiles={teamMembers}
                      selectedProfile={selectedUser}
                      setSelectedProfile={setSelectedUser}
                    />
                  )}
                </>
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
                <StInput
                  width="100%"
                  placeholder="팀원을 표현하는 키워드를 입력해주세요"
                  disabled
                />
              </Link>
              <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
              <StButton
                onClick={submit}
                disabled={content.length == 0 || keywordList.length == 0 || isConfirming}
              >
                완료
              </StButton>
            </StSection>
          </StWrapper>
        )}
      </StAbsoluteWrapper>
      <Outlet
        context={{
          keywordList,
          addKeyword: (keyword: Keyword) => {
            if (keywordList.length < 2) {
              setKeywordList((prev) =>
                prev.map((prev) => prev.content).includes(keyword.content)
                  ? prev
                  : [...prev, keyword],
              );
            } else {
              fireToast({ content: '키워드는 최대 2개 입력할 수 있어요' });
            }
          },
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
