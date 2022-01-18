import { AnswerDetail } from '@api/types/user';
import { icBookmarkSelected, icBookmarkUnselected } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { StNeososeoAnswerCard } from './style';

type NeososeoAnswerCardItemProps = AnswerDetail;

function NeososeoAnswerCardItem(props: NeososeoAnswerCardItemProps) {
  const { id, icon, question, content, keywordList, isBookmarked } = props;
  return (
    <StNeososeoAnswerCard key={id}>
      <div>
        <img src={icon} alt={id.toString()} />
        <div>{question}</div>
        <img src={isBookmarked ? icBookmarkSelected : icBookmarkUnselected} alt="bookmark" />
      </div>
      <div>{content}</div>
      <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
    </StNeososeoAnswerCard>
  );
}

export default NeososeoAnswerCardItem;
