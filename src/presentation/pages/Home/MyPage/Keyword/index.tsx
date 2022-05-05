import { useCallback, useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { api } from '@api/index';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonNavigation from '@components/common/Navigation';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MyPageEditBottomSheet from '@components/common/BottomSheet/MyPageEdit';
import { KEYWORD_PAGE } from '@utils/constant';
import { StMyKeyword, StMyKeywordHeader } from './style';
import { IcMeatball } from '@assets/icons';
import CommonLoader from '@components/common/Loader';

function MyKeyword() {
  const { userID } = useParams();
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  if (!userID) return <></>;

  const fetchKeywordsByPage = useCallback(async ({ pageParam = 0 }) => {
    const response = await api.userService.getMyKeywordList(pageParam);
    return {
      totalCount: response.totalCount,
      result: response.keywordList,
      nextPage: pageParam + KEYWORD_PAGE,
      isLast: response.keywordList.length < KEYWORD_PAGE,
    };
  }, []);

  const {
    data: userKeywordList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('myKeywordList', fetchKeywordsByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <>
      <CommonNavigation title="My 키워드" />
      <StMyKeyword>
        <StMyKeywordHeader>
          <div>
            <span>My 키워드</span>
            <span>{userKeywordList?.pages[0].totalCount}</span>
          </div>
          <IcMeatball onClick={() => setIsBottomSheetOpened(true)} />
        </StMyKeywordHeader>
        {userKeywordList?.pages && userKeywordList.pages.length > 0 ? (
          <>
            <ImmutableKeywordList
              keywordList={userKeywordList.pages.map((page) => page.result).flat()}
              viewMode={'linear'}
              onItemClick={() => {
                return;
              }}
            />
            {isFetchingNextPage && <CommonLoader />}
          </>
        ) : (
          <></>
        )}
        <MyPageEditBottomSheet
          isOpened={isBottomSheetOpened}
          closeBottomSheet={() => setIsBottomSheetOpened(false)}
          type="keyword"
          userID={userID}
        />
      </StMyKeyword>
    </>
  );
}

export default MyKeyword;
