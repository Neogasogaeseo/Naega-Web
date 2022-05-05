import { useCallback, useState, useEffect } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonNavigation from '@components/common/Navigation';
import CommonModal from '@components/common/Modal';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import CommonLoader from '@components/common/Loader';
import { KEYWORD_PAGE } from '@utils/constant';
import { StRelativeWrapper, StMyKeywordDelete, StMyKeywordHeader, StLoaderWrapper } from './style';
import { useRecoilValue } from 'recoil';
import { selectedKeywordState } from '@stores/login-user';

function MyKeywordDelete() {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { userID } = useParams();
  const { isBottomReached, isInitialState } = useScrollHeight();
  const keywordID = useRecoilValue(selectedKeywordState);
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
    <StRelativeWrapper>
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
        submitButton={{ content: '완료', onClick: () => navigate(`/home/mypage/${userID}`) }}
      />
      <StMyKeywordDelete>
        <StMyKeywordHeader>
          <div>
            <span>My 키워드</span>
            <span>{myKeywordList?.pages[0].totalCount}</span>
          </div>
        </StMyKeywordHeader>
        {myKeywordList?.pages && myKeywordList.pages.length > 0 ? (
          <>
            <MutableKeywordList
              keywordList={myKeywordList.pages.map((page) => page.result).flat()}
              viewMode={'linear'}
              deleteMyKeyword={() => setIsOpenModal(true)}
              isMine={true}
            />
            <StLoaderWrapper>{isFetchingNextPage && <CommonLoader />}</StLoaderWrapper>
          </>
        ) : (
          <></>
        )}
      </StMyKeywordDelete>
    </StRelativeWrapper>
  );
}

export default MyKeywordDelete;
