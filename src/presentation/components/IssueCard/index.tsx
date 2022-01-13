import { api } from '@api/index';
import { FeedbackDetail } from '@api/types/team';
import { icDot } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { useState } from 'react';
import { StIssueCard, StHeader, StBody, StBookmark } from './style';

type IssueCardProps = FeedbackDetail;

function IssueCard(props: IssueCardProps) {
  const { id, writer, target, body, createdAt, keywordList, isMine } = props;
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const bookmarkFeedback = async () => {
    const response = await api.teamService.postFeedbackBookmark(id);
    if (response.isSuccess) setIsBookmarked((prev) => !prev);
  };
  return (
    <StIssueCard>
      <StHeader>
        <div>@{target}</div>
        <div>
          <div>{writer}</div>
          <img src={icDot} alt="dot" />
          <div>{createdAt}</div>
        </div>
        {isMine && <StBookmark selected={isBookmarked} onClick={bookmarkFeedback} />}
      </StHeader>
      <StBody>{body}</StBody>
      <ImmutableKeywordList
        keywordList={keywordList}
        onItemClick={() => {
          return;
        }}
      />
    </StIssueCard>
  );
}

export default IssueCard;
