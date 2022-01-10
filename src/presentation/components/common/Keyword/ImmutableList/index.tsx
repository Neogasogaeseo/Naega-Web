import React from 'react';
import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';

interface Keyword {
  content: string;
  color: string;
}

interface ImmutableKeywordListProps {
  keywordList: Keyword[];
  viewMode?: 'linear' | 'flex';
  onItemClick: (keyword: Keyword) => void;
}

function ImmutableKeywordList(props: ImmutableKeywordListProps) {
  const { keywordList, viewMode, onItemClick } = props;
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem
          {...keyword}
          isMutable={false}
          key={keyword.content}
          onItemClick={() => onItemClick(keyword)}
        />
      ))}
    </StKeywordListLayout>
  );
}

export default ImmutableKeywordList;
