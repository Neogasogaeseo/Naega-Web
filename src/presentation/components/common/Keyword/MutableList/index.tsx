import { Keyword } from '@api/types/user';
import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';
import { COLOR } from '@styles/common/color';

interface MutableKeywordListProps {
  keywordList: Keyword[];
  deleteKeyword?: (keyword: Keyword) => void;
  setIsOpenModal?: (value: boolean) => void;
  setKeywordID?: (keywordID: number) => void;
  viewMode?: 'linear' | 'flex';
  isMine?: boolean;
}

function MutableKeywordList(props: MutableKeywordListProps) {
  const {
    keywordList,
    deleteKeyword,
    setIsOpenModal,
    setKeywordID,
    viewMode = 'flex',
    isMine,
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
                  setIsOpenModal && setIsOpenModal(true);
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
