import { useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { FeedbackDetail, FeedbackEditInfo } from '@api/types/team';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import { StFeedbackCard, StHeader, StBody, StIssue, StBookmark, StMeatBall } from './style';
import { usePickTeamFeedback } from '@hooks/queries/team';
import { MyDetail } from '@api/types/user';
import { icArrowDetail } from '@assets/icons';

type FeedbackCardProps = FeedbackDetail & {
  openBottomSheet?(
    feedbackID: number,
    feedback: FeedbackEditInfo,
    isMine: boolean,
    isForMe: boolean,
    isPinned: boolean,
  ): void;
  parentPage: 'teamsoseo' | 'mypage' | 'myteamsoseo';
  selectedTeam?: MyDetail | null;
};

function FeedbackCardItem(props: FeedbackCardProps) {
  const {
    id,
    writer,
    writerID,
    target,
    body,
    createdAt,
    keywordList,
    targetProfileID,
    openBottomSheet,
    parentPage,
    isBookmarked,
    selectedTeam,
    teamID,
    issueID,
    issueContent,
  } = props;
  const navigate = useNavigate();
  const { id: loginUserID, userID: loginUsername } = useLoginUser();
  const { fireToast } = useToast();
  const { userID } = useParams();
  const queryClient = useQueryClient();

  const { mutate: pickFeedback, isLoading } = usePickTeamFeedback(+id, {
    onSuccess: () => {
      fireToast({ content: isBookmarked ? '픽 취소' : '픽 완료', bottom: 9 });
      queryClient.invalidateQueries(userID ? 'tssBookmark' : ['feedbackInfo', selectedTeam?.id]);
    },
  });

  const isForMe = useMemo(
    () => +targetProfileID === loginUserID || targetProfileID === loginUsername,
    [targetProfileID, loginUserID, loginUsername],
  );

  const isMine = useMemo(
    () => writerID !== undefined && +writerID === loginUserID,
    [writerID, loginUserID],
  );

  return (
    <StFeedbackCard>
      <StHeader>
        <div>@{target}</div>
        <div>
          <span>{writer}</span>
          <span>·</span>
          <span>{createdAt}</span>
        </div>
        {(isMine || isForMe) &&
          (parentPage !== 'teamsoseo' && isForMe ? (
            <StBookmark selected={isBookmarked} onClick={() => isLoading || pickFeedback()} />
          ) : (
            <StMeatBall
              onClick={() => {
                openBottomSheet?.(
                  +id,
                  {
                    id: id,
                    target: target,
                    targetID: targetProfileID,
                    content: body,
                    keywordList: keywordList,
                  },
                  writerID !== undefined && +writerID === loginUserID,
                  +targetProfileID === loginUserID || targetProfileID === loginUsername,
                  isBookmarked,
                );
              }}
            />
          ))}
      </StHeader>
      {parentPage === 'myteamsoseo' && (
        <StIssue>
          <div>
            <div>이슈</div>
            <button onClick={() => navigate(`/team/${teamID}/${issueID}`)}>
              자세히 보기
              <img src={icArrowDetail} />
            </button>
          </div>
          {issueContent}
        </StIssue>
      )}
      <StBody>{body}</StBody>
      <ImmutableKeywordList
        keywordList={keywordList}
        onItemClick={() => {
          return;
        }}
      />
    </StFeedbackCard>
  );
}

export default FeedbackCardItem;
