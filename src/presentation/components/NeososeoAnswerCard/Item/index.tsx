import { useState } from 'react';

import { api } from '@api/index';
import { AnswerDetail } from '@api/types/user';
import { useToast } from '@hooks/useToast';
import { useLoginUser } from '@hooks/useLoginUser';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { StNeososeoAnswerCard } from './style';
import { icPicked, icUnpicked } from '@assets/icons';

type NeososeoAnswerCardItemProps = AnswerDetail;

function NeososeoAnswerCardItem(props: NeososeoAnswerCardItemProps) {
  const { id, icon, question, content, keywordList, targetUserID } = props;
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const { id: userPK } = useLoginUser();
  const { fireToast } = useToast();

  const bookmarkAnswer = async () => {
    const response = await api.neogaService.postAnswerBookmark(id);
    if (response.isSuccess) {
      if (!isBookmarked) fireToast({ content: '픽 완료' });
      setIsBookmarked((prev) => !prev);
    }
  };

  return (
    <StNeososeoAnswerCard>
      <div>
        <img src={icon} alt={id.toString()} />
        <div>{question}</div>
        {targetUserID === userPK && (
          <img src={isBookmarked ? icPicked : icUnpicked} alt="pick" onClick={bookmarkAnswer} />
        )}
      </div>
      <div>{content}</div>
      <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
    </StNeososeoAnswerCard>
  );
}

export default NeososeoAnswerCardItem;
