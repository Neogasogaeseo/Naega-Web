import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';
import { COLOR } from '@styles/common/color';
import { Keyword } from '@api/types/user';

interface MutableKeywordListProps {
  keywordList: Keyword[];
  deleteKeyword: (keyword: Keyword) => void;
  viewMode?: 'linear' | 'flex';
  isMine?: boolean;
}

function MutableKeywordList(props: MutableKeywordListProps) {
  const { keywordList, deleteKeyword, viewMode = 'flex', isMine } = props;
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem
          {...{ ...keyword, color: keyword.color ?? COLOR.GRAY_3 }}
          isMutable={true}
          key={keyword.id}
          onDeleteClick={() => deleteKeyword(keyword)}
          viewMode={viewMode}
          isMine={isMine}
        />
      ))}
    </StKeywordListLayout>
  );
}

export default MutableKeywordList;
