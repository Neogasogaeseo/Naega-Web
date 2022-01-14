import { api } from '@api/index';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { StAbsoluteWrapper, StTitleWrapper, StWhiteWrapper } from './style';

interface Keyword {
  id: string;
  content: string;
  color?: string;
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
  const [newKeywordContent, setNewKeywordContent] = useState('');

  if (!targetUser) history.back();

  useEffect(() => {
    (async () => {
      const data = await api.userService.getKeywords(targetUser.id);
      setUserKeywordList(data);
    })();
  }, []);

  const createKeyword = async () => {
    if (newKeywordContent === '') return;
    const newKeyword = await api.userService.postKeyword(targetUser.id, newKeywordContent);
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
          submitButton={{ value: '생성', onClick: createKeyword }}
        />
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
