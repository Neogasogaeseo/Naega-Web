import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import { FeedbackEditInfo, TeamMemberNoneId } from '@api/types/team';
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
  StEmptyWrapper,
  StTargetUser,
} from './style';
import { IcLock } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';
import { useToast } from '@hooks/useToast';

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
              <div>????????? ????????? ???????????? ????????? ??? ?????????</div>
              <div>????????? ??????????????????</div>
            </div>
            <button onClick={() => navigate(`/team/${teamID}/member/management`)}>
              ?????? ????????????
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
                  <StSectionTitle>????????? ???????????? ???????????? ???????????????</StSectionTitle>
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
                placeholder="???????????? ???????????? ?????? ???????????? ???????????????"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </StSection>
            <StSection>
              <StSectionTitle>???????????? ?????? ????????? ???????????? ???????????????</StSectionTitle>
              <Link to="keyword">
                <CommonInput
                  width="100%"
                  placeholder="????????? ???????????? ???????????? ??????????????????"
                  disabled={true}
                />
              </Link>
              <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
              <StButton
                onClick={submit}
                disabled={content.length == 0 || keywordList.length == 0 || isConfirming}
              >
                ??????
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
              fireToast({ content: '???????????? ?????? 2??? ????????? ??? ?????????' });
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
