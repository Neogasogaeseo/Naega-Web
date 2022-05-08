import { useCallback, useState, useEffect } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

import { api } from '@api/index';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonNavigation from '@components/common/Navigation';
import CommonModal from '@components/common/Modal';
import CommonLoader from '@components/common/Loader';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MyPageEditBottomSheet from '@components/common/BottomSheet/MyPageEdit';
import { KEYWORD_PAGE } from '@utils/constant';
import { StMyKeyword, StMyKeywordHeader, StLoaderWrapper } from './style';
import { IcMeatball } from '@assets/icons';

function MyKeyword() {
  const { userID } = useParams();
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [isDeletePage, setIsDeletePage] = useState(false);
  const [keywordID, setKeywordID] = useState(-1);
  const queryClient = useQueryClient();

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
    data: myKeywordList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('myKeywordList', fetchKeywordsByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <StMyKeyword>
      <CommonModal
        isOpened={isOpenModal}
        title="키워드를 삭제하시겠습니까?"
        description={'키워드를 삭제하면 전체 게시글에서' + '\n' + '해당 키워드가 모두 삭제됩니다.'}
        onClickConfirm={async () => {
          keywordID && (await api.userService.deleteMyKeyword(keywordID));
          queryClient.invalidateQueries('myKeywordList');
          setIsOpenModal(false);
        }}
        onClickCancel={() => setIsOpenModal(false)}
      />
      <CommonNavigation
        title="My 키워드"
        submitButton={{
          content: isDeletePage ? '완료' : '',
          onClick: isDeletePage
            ? () => setIsDeletePage(false)
            : () => {
                return;
              },
        }}
      />
      <StMyKeywordHeader>
        <div>
          <span>My 키워드</span>
          <span>{myKeywordList?.pages[0].totalCount}</span>
        </div>
        <IcMeatball onClick={() => setIsBottomSheetOpened(true)} />
      </StMyKeywordHeader>
      {myKeywordList?.pages && myKeywordList.pages.length > 0 ? (
        <>
          {isDeletePage ? (
            <MutableKeywordList
              keywordList={myKeywordList.pages.map((page) => page.result).flat()}
              viewMode={'linear'}
              deleteMyKeyword={() => setIsOpenModal(true)}
              isMine={true}
              setKeywordID={setKeywordID}
            />
          ) : (
            <ImmutableKeywordList
              keywordList={myKeywordList.pages.map((page) => page.result).flat()}
              viewMode={'linear'}
              isMine={true}
              onItemClick={() => {
                return;
              }}
            />
          )}
          <StLoaderWrapper>{isFetchingNextPage && <CommonLoader />}</StLoaderWrapper>
        </>
      ) : (
        <></>
      )}
      <MyPageEditBottomSheet
        isOpened={isBottomSheetOpened}
        closeBottomSheet={() => setIsBottomSheetOpened(false)}
        type="keyword"
        setIsDeletePage={setIsDeletePage}
      />
    </StMyKeyword>
  );
}

export default MyKeyword;
