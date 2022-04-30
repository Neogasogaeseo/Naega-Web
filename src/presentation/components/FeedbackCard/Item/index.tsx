import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '@api/index';
import { FeedbackDetail } from '@api/types/team';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import { StFeedbackCard, StHeader, StBody, StBookmark } from './style';

type FeedbackCardProps = FeedbackDetail & {
  onClick?(feedbackID: number, isMine: boolean, isForMe: boolean, isPinned: boolean): void;
};

function FeedbackCardItem(props: FeedbackCardProps) {
  const { id, writer, writerID, target, body, createdAt, keywordList, targetProfileID, onClick } =
    props;
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const { id: loginUserID, userID: loginUsername } = useLoginUser();
  const { fireToast } = useToast();
  const { userID } = useParams();

  const bookmarkFeedback = async () => {
    const response = await api.teamService.postFeedbackBookmark(id);
    if (response.isSuccess) {
      setIsBookmarked((prev) => response.isBookmarked ?? !prev);
      if (response.isBookmarked) {
        userID
          ? fireToast({ content: '픽 완료', bottom: 120 })
          : fireToast({ content: 'MY에서 픽한 피드백을 확인할 수 있어요', bottom: 120 });
      }
    }
  };

  return (
    <StFeedbackCard
      onClick={() =>
        onClick?.(
          +id,
          writerID !== undefined && +writerID === loginUserID,
          +targetProfileID === loginUserID || targetProfileID === loginUsername,
          isBookmarked,
        )
      }
    >
      <StHeader>
        <div>@{target}</div>
        <div>
          <span>{writer}</span>
          <span>·</span>
          <span>{createdAt}</span>
        </div>
        {(+targetProfileID === loginUserID || targetProfileID === loginUsername) && (
          <StBookmark selected={isBookmarked} onClick={bookmarkFeedback} />
        )}
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
