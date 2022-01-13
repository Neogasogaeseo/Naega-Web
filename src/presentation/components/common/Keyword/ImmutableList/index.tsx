import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';
import { COLOR } from '@styles/common/color';

interface Keyword {
  id: string;
  content: string;
  color?: string;
}

interface ImmutableKeywordListProps {
  keywordList: Keyword[];
  viewMode?: 'linear' | 'flex';
  onItemClick: (keyword: Keyword) => void;
}

function ImmutableKeywordList(props: ImmutableKeywordListProps) {
  const { keywordList, viewMode = 'flex', onItemClick } = props;
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem
          {...{ ...keyword, color: keyword.color ?? COLOR.GRAY_3 }}
          isMutable={false}
          key={keyword.content}
          onItemClick={() => onItemClick(keyword)}
          viewMode={viewMode}
        />
      ))}
    </StKeywordListLayout>
  );
}

export default ImmutableKeywordList;
