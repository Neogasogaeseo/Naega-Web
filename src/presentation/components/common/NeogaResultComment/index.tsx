import { Keyword } from '@api/types/user';
import ImmutableKeywordList from '../Keyword/ImmutableList';
import { StNeogaResultComment } from './style';

interface NeogaResultCommentProps {
  id: number;
  name: string;
  relationship: string;
  content: string;
  keyword: Keyword[];
}

function NeogaResultComment(props: NeogaResultCommentProps) {
  const { id, name, relationship, content, keyword } = props;

  return (
    <StNeogaResultComment>
      <div>
        <span>{relationship}</span>
        <span>·</span>
        <span>{name}</span>
      </div>
      <div>{content}</div>
      <div>
        <ImmutableKeywordList keywordList={keyword} onItemClick={() => console.log(id)} />
      </div>
    </StNeogaResultComment>
  );
}

export default NeogaResultComment;
