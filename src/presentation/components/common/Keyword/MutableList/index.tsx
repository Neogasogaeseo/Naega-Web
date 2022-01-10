import React from 'react';
import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';

interface Keyword {
  content: string;
  color: string;
}

interface Props {
  keywordList: Keyword[];
  deleteKeyword: (keyword: Keyword) => void;
  viewMode?: 'linear' | 'flex';
}

function MutableKeywordList(props: Props) {
  const { keywordList, deleteKeyword, viewMode } = props;
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem
          {...keyword}
          isMutable={true}
          key={keyword.content}
          onDeleteClick={() => deleteKeyword(keyword)}
        />
      ))}
    </StKeywordListLayout>
  );
}

export default MutableKeywordList;
