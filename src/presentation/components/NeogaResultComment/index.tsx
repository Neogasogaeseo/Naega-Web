import { Keyword } from '@api/types/user';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { StNeogaResultComment } from './style';

interface NeogaResultCommentProps {
  name: string;
  relationship: string;
  content: string;
  keyword: Keyword[];
}

function NeogaResultComment(props: NeogaResultCommentProps) {
  const { name, relationship, content, keyword } = props;

  return (
    <StNeogaResultComment>
      <div>
        <span>{name}</span>
        <span>·</span>
        <span>너를 {relationship}</span>
      </div>
      <div>{content}</div>
      <div>
        <ImmutableKeywordList
          keywordList={keyword.slice(0, 2)}
          onItemClick={() => {
            return;
          }}
        />
      </div>
    </StNeogaResultComment>
  );
}

export default NeogaResultComment;
