import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import KeywordEmptyView from '@components/common/Empty/Keyword';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { StAbsoluteWrapper, StTitleWrapper, StWhiteWrapper, StHeader } from './style';

interface OutletContextProps {
  keywordList: Keyword[];
  targetUser: { id: number; profileName: string };
  addKeyword: (keyword: Keyword) => void;
  removeKeyword: (keyword: Keyword) => void;
}

function TeamIssueKeyword() {
  const { keywordList, removeKeyword, addKeyword, targetUser } =
    useOutletContext<OutletContextProps>();
  const [userKeywordList, setUserKeywordList] = useState<Keyword[]>([]);
  const [newKeywordContent, setNewKeywordContent] = useState('');
  const navigate = useNavigate();

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
      <StHeader>
        <div>키워드 입력</div>
        <div onClick={() => navigate(-1)}>완료</div>
      </StHeader>
      <StWhiteWrapper>
        <CommonInput
          width="100%"
          placeholder="새로 입력하고 싶은 키워드를 작성해주세요"
          value={newKeywordContent}
          onChange={(value: string) => setNewKeywordContent(value)}
          onSubmit={createKeyword}
          submitButtonValue="생성"
        />
        <MutableKeywordList keywordList={keywordList} deleteKeyword={removeKeyword} />
      </StWhiteWrapper>
      <StTitleWrapper>
        <span>{targetUser.profileName}</span>
        <span>님이 받은 키워드</span>
      </StTitleWrapper>
      {userKeywordList.length > 0 ? (
        <ImmutableKeywordList
          keywordList={userKeywordList}
          viewMode="linear"
          onItemClick={(keyword: Keyword) => addKeyword(keyword)}
        />
      ) : (
        <KeywordEmptyView />
      )}
    </StAbsoluteWrapper>
  );
}

export default TeamIssueKeyword;
