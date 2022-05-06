import { Keyword } from '@api/types/user';
import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';
import { COLOR } from '@styles/common/color';

interface MutableKeywordListProps {
  keywordList: Keyword[];
  deleteKeyword?: (keyword: Keyword) => void;
  deleteMyKeyword?: () => void;
  viewMode?: 'linear' | 'flex';
  isMine?: boolean;
  setKeywordID?: (keywordID: number) => void;
}

function MutableKeywordList(props: MutableKeywordListProps) {
  const {
    keywordList,
    deleteKeyword,
    deleteMyKeyword,
    viewMode = 'flex',
    isMine,
    setKeywordID,
  } = props;
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem
          {...{ ...keyword, color: keyword.color ?? COLOR.GRAY_3 }}
          isMutable={true}
          key={keyword.id}
          onDeleteClick={
            isMine
              ? () => {
                  deleteMyKeyword && deleteMyKeyword();
                  setKeywordID && setKeywordID(+keyword.id);
                }
              : () => deleteKeyword && deleteKeyword(keyword)
          }
          viewMode={viewMode}
          isMine={isMine}
        />
      ))}
    </StKeywordListLayout>
  );
}

export default MutableKeywordList;
