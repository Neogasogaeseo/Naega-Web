import { useMemo } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

import { api } from '@api/index';
import { FeedbackDetail, FeedbackEditInfo } from '@api/types/team';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import { StFeedbackCard, StHeader, StBody, StBookmark, StMeatBall } from './style';

type FeedbackCardProps = FeedbackDetail & {
  openBottomSheet?(
    feedbackID: number,
    feedback: FeedbackEditInfo,
    isMine: boolean,
    isForMe: boolean,
    isPinned: boolean,
  ): void;
  parentPage: 'teamsoseo' | 'mypage';
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
  } = props;

  const { id: loginUserID, userID: loginUsername } = useLoginUser();
  const { fireToast } = useToast();
  const { userID } = useParams();
  const queryClient = useQueryClient();

  const { mutate: bookmarkFeedback } = useMutation(
    async () => {
      const response = await api.teamService.postFeedbackBookmark(+id);
      return response;
    },
    {
      onSuccess: (data) => {
        if (data && data.isBookmarked) {
          userID
            ? fireToast({ content: '픽 완료', bottom: 28 })
            : fireToast({ content: 'MY에서 픽한 피드백을 확인할 수 있어요', bottom: 120 });
        } else {
          fireToast({ content: '픽 취소', bottom: 28 });
        }
        queryClient.invalidateQueries('feedbackInfo');
        queryClient.invalidateQueries('tssBookmark');
      },
    },
  );

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
          (parentPage === 'mypage' && isForMe ? (
            <StBookmark selected={isBookmarked} onClick={() => bookmarkFeedback()} />
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
