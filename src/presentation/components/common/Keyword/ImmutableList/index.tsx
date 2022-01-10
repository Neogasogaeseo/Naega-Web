import React from 'react';
import KeywordItem from '../Item';
import { StKeywordListLayout } from '../style';

interface Keyword {
  content: string;
  color: string;
}

interface Props {
  keywordList: Keyword[];
  viewMode?: 'linear' | 'flex';
}

function ImmutableKeywordList(props: Props) {
  const { keywordList, viewMode } = props;
  console.log(viewMode);
  return (
    <StKeywordListLayout viewMode={viewMode}>
      {keywordList.map((keyword) => (
        <KeywordItem {...keyword} isMutable={false} key={keyword.content} />
      ))}
    </StKeywordListLayout>
  );
}

export default ImmutableKeywordList;
