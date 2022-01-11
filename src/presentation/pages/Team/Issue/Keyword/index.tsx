import { api } from '@api/index';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { randomSelect } from '@utils/array';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { StAbsoluteWrapper, StTitleWrapper, StWhiteWrapper, StAbsoluteButton } from './style';

interface Keyword {
  content: string;
  color: string;
}

interface OutletContextProps {
  keywordList: Keyword[];
  targetUser: { id: number; profileImage?: string; profileName: string };
  addKeyword: (keyword: Keyword) => void;
  removeKeyword: (keyword: Keyword) => void;
}

function TeamIssueKeyword() {
  const { keywordList, removeKeyword, addKeyword, targetUser } =
    useOutletContext<OutletContextProps>();
  const [userKeywordList, setUserKeywordList] = useState<Keyword[]>([]);
  const [colorsList, setColorsList] = useState<string[]>([]);
  const [newKeywordContent, setNewKeywordContent] = useState('');

  useEffect(() => {
    (async () => {
      const data = await api.userService.getKeywords(targetUser.id);
      setUserKeywordList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.userService.getKeywordColors();
      setColorsList(data);
    })();
  }, []);

  const createKeyword = () => {
    const newKeyword: Keyword = { content: newKeywordContent, color: randomSelect(colorsList) };
    addKeyword(newKeyword);
    setNewKeywordContent('');
  };

  return (
    <StAbsoluteWrapper>
      <StWhiteWrapper>
        <CommonInput
          width="100%"
          placeholder="새로 입력하고 싶은 키워드를 작성해주세요"
          value={newKeywordContent}
          onChange={(value: string) => setNewKeywordContent(value)}
        />
        <StAbsoluteButton onClick={createKeyword}>생성</StAbsoluteButton>
        <MutableKeywordList keywordList={keywordList} deleteKeyword={removeKeyword} />
      </StWhiteWrapper>
      <StTitleWrapper>
        <span>{targetUser.profileName}</span>
        <span>님이 받은 키워드</span>
      </StTitleWrapper>
      <ImmutableKeywordList
        keywordList={userKeywordList}
        viewMode="linear"
        onItemClick={(keyword: Keyword) => addKeyword(keyword)}
      />
    </StAbsoluteWrapper>
  );
}

export default TeamIssueKeyword;
