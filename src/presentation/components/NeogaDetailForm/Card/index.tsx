import { api } from '@api/index';
import { FeedAnswer } from '@api/types/neoga';
import { icBookmarkSelected, icBookmarkUnselected } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { useState } from 'react';
import {
  StFeedContent,
  StFeedDate,
  StFeedHeader,
  StFeedName,
  StNeogaDetailFormCard,
} from '../style';

type NeogaDetailFormCardProps = FeedAnswer;

function NeogaDetailFormCard(props: NeogaDetailFormCardProps) {
  const { id, name, relationship, content, createdAt, keywords } = props;
  const [isBookmarked, setIsBookmarked] = useState(props.isPinned);

  const bookmarkAnswer = async () => {
    const response = await api.neogaService.postAnswerBookmark(id);
    if (response.isSuccess) setIsBookmarked((prev) => !prev);
  };

  return (
    <StNeogaDetailFormCard>
      <StFeedHeader>
        <StFeedName>
          {name}
          <p>·</p>
          <span>너를 {relationship}</span>
        </StFeedName>
        <div>
          <StFeedDate>
            <div>{createdAt}</div>
            <img
              src={isBookmarked ? icBookmarkSelected : icBookmarkUnselected}
              alt="bookmark"
              onClick={bookmarkAnswer}
            />
          </StFeedDate>
        </div>
      </StFeedHeader>
      <StFeedContent>{content}</StFeedContent>
      <ImmutableKeywordList keywordList={keywords} onItemClick={() => null} />
      <hr />
    </StNeogaDetailFormCard>
  );
}

export default NeogaDetailFormCard;