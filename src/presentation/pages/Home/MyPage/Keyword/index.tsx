import { useCallback, useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { api } from '@api/index';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonNavigation from '@components/common/Navigation';
import MyPageEditBottomSheet from '@components/common/BottomSheet/MyPageEdit';
import { KEYWORD_PAGE } from '@utils/constant';
import { StMyKeyword, StMyKeywordHeader } from './style';
import { IcMeatball } from '@assets/icons';
import CommonLoader from '@components/common/Loader';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';

function MyKeyword() {
  const { userID } = useParams();
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  if (!userID) return <></>;

  const fetchKeywordsByPage = useCallback(async ({ pageParam = 0 }) => {
    const response = await api.userService.getMyKeywordList(pageParam);
    return {
      result: response,
      nextPage: pageParam + KEYWORD_PAGE,
      isLast: response.length < KEYWORD_PAGE,
    };
  }, []);

  const {
    data: userKeywordList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('keywords', fetchKeywordsByPage, {
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
            <span>24</span>
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
