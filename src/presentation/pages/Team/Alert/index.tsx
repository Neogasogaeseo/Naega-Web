import { api } from '@api/index';
import CommonLoader from '@components/common/Loader';
import CommonNavigation from '@components/common/Navigation';
import TeamNoticeItem from '@components/TeamNoticeItem';
import { useScrollHeight } from '@hooks/useScrollHeight';
import { NOTICE_PAGE } from '@utils/constant';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { StTeamNoticeItemContainer } from './style';

function TeamAlert() {
  const { isBottomReached, isInitialState } = useScrollHeight();

  const fetchNoticeByPage = useCallback(async ({ pageParam = 0 }) => {
    const response = await api.teamService.getNotice(pageParam);
    return {
      result: response,
      nextPage: pageParam + NOTICE_PAGE,
      isLast: response.length < NOTICE_PAGE,
      id: pageParam,
    };
  }, []);
  const {
    data: noticeList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('notice', fetchNoticeByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <>
      <CommonNavigation isBack={true} title="알림" />
      <StTeamNoticeItemContainer>
        {noticeList?.pages
          .map((page) => page.result)
          .flat()
          .map((notice) => (
            <TeamNoticeItem key={notice.teamID} {...notice} />
          ))}
        {isFetchingNextPage && <CommonLoader />}
      </StTeamNoticeItemContainer>
    </>
  );
}

export default TeamAlert;
