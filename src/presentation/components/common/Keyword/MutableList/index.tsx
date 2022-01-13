import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';
import { COLOR } from '@styles/common/color';

interface Keyword {
  id: string;
  content: string;
  color?: string;
}

interface MutableKeywordListProps {
  keywordList: Keyword[];
  deleteKeyword: (keyword: Keyword) => void;
  viewMode?: 'linear' | 'flex';
}

function MutableKeywordList(props: MutableKeywordListProps) {
  const { keywordList, deleteKeyword, viewMode = 'flex' } = props;
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem
          {...{ ...keyword, color: keyword.color ?? COLOR.GRAY_3 }}
          isMutable={true}
          key={keyword.id}
          onDeleteClick={() => deleteKeyword(keyword)}
          viewMode={viewMode}
        />
      ))}
    </StKeywordListLayout>
  );
}

export default MutableKeywordList;
