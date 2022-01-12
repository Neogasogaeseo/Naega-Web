import React from 'react';
import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';

interface Keyword {
  content: string;
  color: string;
}

interface MutableKeywordListProps {
  keywordList: Keyword[];
  deleteKeyword: (keyword: Keyword) => void;
  viewMode?: 'linear' | 'flex';
}

function MutableKeywordList(props: MutableKeywordListProps) {
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
