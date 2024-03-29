import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useOutletContext, Navigate } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import CommonInput from '@components/common/Input';
import CommonLoader from '@components/common/Loader';
import KeywordEmptyView from '@components/common/Empty/Keyword';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useScrollHeight } from '@hooks/useScrollHeight';
import { PAGES } from '@utils/constant';
import { StAbsoluteWrapper, StTitleWrapper, StWhiteWrapper, StHeader } from './style';

interface OutletContextProps {
  keywordList: Keyword[];
  targetUser: { id: number; profileName: string };
  addKeyword: (keyword: Keyword) => void;
  removeKeyword: (keyword: Keyword) => void;
}

function TeamIssueKeyword() {
  const navigate = useNavigate();
  const [createdKeywordIDs, setCreatedKeywordIDs] = useState<string[]>([]);
  const { keywordList, removeKeyword, addKeyword, targetUser } =
    useOutletContext<OutletContextProps>();
  if (targetUser === null) return <Navigate to="../" />;

  const [isKeywordCreating, setIsKeywordCreating] = useState(false);
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [newKeywordContent, setNewKeywordContent] = useState('');
  const fetchKeywordsByPage = useCallback(async ({ pageParam = 0 }) => {
    const response = await api.userService.getKeywords(targetUser.id, pageParam);
    return {
      result: response,
      nextPage: pageParam + PAGES.KEYWORD,
      isLast: response.length < PAGES.KEYWORD,
    };
  }, []);

  const {
    data: userKeywordList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('keywords', fetchKeywordsByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  const createKeyword = async () => {
    if (newKeywordContent === '') return;
    setIsKeywordCreating(true);
    const newKeyword = await api.userService.postKeyword(targetUser.id, newKeywordContent);
    addKeyword(newKeyword);
    setCreatedKeywordIDs((prev) => [...prev, newKeyword.id]);
    setNewKeywordContent('');
    setIsKeywordCreating(false);
  };

  const deleteKeyword = (keyword: Keyword) => {
    if (createdKeywordIDs.includes(keyword.id)) {
      api.userService.undoPostKeyword(keyword.id);
      setCreatedKeywordIDs((prev) => prev.filter((id) => id !== keyword.id));
    }
    removeKeyword(keyword);
  };

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <StAbsoluteWrapper>
      <StHeader>
        <div>키워드 입력</div>
        <div onClick={() => navigate(-1)}>완료</div>
      </StHeader>
      <StWhiteWrapper>
        <CommonInput
          width="100%"
          placeholder="새 키워드를 입력해주세요"
          value={newKeywordContent}
          onChange={(value: string) => setNewKeywordContent(value)}
          onSubmit={createKeyword}
          submitButtonValue="생성"
          submitButtonDisabled={isKeywordCreating || newKeywordContent === ''}
        />
        <MutableKeywordList keywordList={keywordList} deleteKeyword={deleteKeyword} />
      </StWhiteWrapper>
      <StTitleWrapper>
        <span>{targetUser.profileName}</span>
        <span> 님이 받은 키워드</span>
      </StTitleWrapper>
      {userKeywordList?.pages &&
      userKeywordList.pages.map((page) => page.result).flat().length > 0 ? (
        <>
          <ImmutableKeywordList
            keywordList={userKeywordList.pages.map((page) => page.result).flat()}
            viewMode="linear"
            onItemClick={(keyword: Keyword) => addKeyword(keyword)}
          />
          {isFetchingNextPage && <CommonLoader />}
        </>
      ) : (
        <KeywordEmptyView />
      )}
    </StAbsoluteWrapper>
  );
}

export default TeamIssueKeyword;
