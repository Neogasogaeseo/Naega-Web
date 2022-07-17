import { useQueryClient } from 'react-query';

import { AnswerDetail, MyDetail } from '@api/types/user';
import { useToast } from '@hooks/useToast';
import { useLoginUser } from '@hooks/useLoginUser';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { StNeososeoAnswerCard } from './style';
import { icPicked, icUnpicked } from '@assets/icons';
import { usePickNeososeoAnswer } from '@hooks/queries/user';
interface NeososeoAnswerCardItemProps extends AnswerDetail {
  selectedForm?: MyDetail | null;
}

function NeososeoAnswerCardItem(props: NeososeoAnswerCardItemProps) {
  const { id, icon, question, content, keywordList, targetUserID, isBookmarked, selectedForm } =
    props;
  const { id: userPK } = useLoginUser();
  const { fireToast } = useToast();
  const queryClient = useQueryClient();
  const { mutate: PickAnswer } = usePickNeososeoAnswer(id, {
    onSuccess: () => {
      fireToast({ content: isBookmarked ? '픽 취소' : '픽 완료' });
      queryClient.invalidateQueries(['answerInfo', selectedForm?.id]);
      queryClient.invalidateQueries('nssBookmark');
    },
  });

  return (
    <StNeososeoAnswerCard>
      <div>
        <img src={icon} alt={id.toString()} />
        <div>{question}</div>
        {(targetUserID === userPK || targetUserID === undefined) && (
          <img src={isBookmarked ? icPicked : icUnpicked} alt="pick" onClick={() => PickAnswer()} />
        )}
      </div>
      <div>{content}</div>
      <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
    </StNeososeoAnswerCard>
  );
}

export default NeososeoAnswerCardItem;
