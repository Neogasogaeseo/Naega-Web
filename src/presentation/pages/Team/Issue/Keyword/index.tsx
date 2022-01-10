import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useOutletContext } from 'react-router-dom';
import { StAbsoluteWrapper } from './style';

interface Keyword {
  content: string;
  color: string;
}

interface OutletContextProps {
  keywordList: Keyword[];
  addKeyword: (keyword: Keyword) => void;
  removeKeyword: (keyword: Keyword) => void;
}

function TeamIssueKeyword() {
  const { keywordList, removeKeyword } = useOutletContext<OutletContextProps>();
  return (
    <StAbsoluteWrapper>
      <CommonInput width="100%" placeholder="새로 입력하고 싶은 키워드를 작성해주세요" />
      <MutableKeywordList keywordList={keywordList} deleteKeyword={removeKeyword} />
      <ImmutableKeywordList
        keywordList={[
          { content: '유사 사랑의 열매', color: '#4C48FF' },
          { content: '멋있는 캐서린', color: '#FF4B77' },
        ]}
        viewMode="linear"
      />
    </StAbsoluteWrapper>
  );
}

export default TeamIssueKeyword;
