import { api } from '@api/index';
import { AnswerDetail } from '@api/types/user';
import { icBookmarkSelected, icBookmarkUnselected } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { useLoginUser } from '@hooks/useLoginUser';
import { useState } from 'react';
import { StNeososeoAnswerCard } from './style';

type NeososeoAnswerCardItemProps = AnswerDetail;

function NeososeoAnswerCardItem(props: NeososeoAnswerCardItemProps) {
  const { id, icon, question, content, keywordList, targetUserID } = props;
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const { id: userPK } = useLoginUser();

  const bookmarkAnswer = async () => {
    const response = await api.neogaService.postAnswerBookmark(id);
    if (response.isSuccess) setIsBookmarked((prev) => !prev);
  };

  return (
    <StNeososeoAnswerCard>
      <div>
        <img src={icon} alt={id.toString()} />
        <div>{question}</div>
        {targetUserID === userPK && (
          <img
            src={isBookmarked ? icBookmarkSelected : icBookmarkUnselected}
            alt="bookmark"
            onClick={bookmarkAnswer}
          />
        )}
      </div>
      <div>{content}</div>
      <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
    </StNeososeoAnswerCard>
  );
}

export default NeososeoAnswerCardItem;
