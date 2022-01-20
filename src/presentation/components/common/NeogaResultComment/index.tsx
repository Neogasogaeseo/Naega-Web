import { Keyword } from '@api/types/user';
import ImmutableKeywordList from '../Keyword/ImmutableList';
import { StNeogaResultComment } from './style';

interface NeogaResultCommentProps {
  keywordList: Keyword[];
}

function NeogaResultComment(props: NeogaResultCommentProps) {
  const { keywordList } = props;
  return (
    <StNeogaResultComment>
      <div>
        <span>동네친구</span>
        <span>·</span>
        <span>백지연</span>
      </div>
      <div>너가소개서 너가소개서 너가소개서 너가소개서 너가소개서</div>
      <div>
        <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
      </div>
    </StNeogaResultComment>
  );
}

export default NeogaResultComment;
