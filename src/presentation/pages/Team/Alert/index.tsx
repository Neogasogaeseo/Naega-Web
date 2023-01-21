import { api } from '@api/index';
import CommonNavigation from '@components/common/Navigation';
import TeamNoticeItem from '@components/TeamNoticeItem';
import { useScrollHeight } from '@hooks/useScrollHeight';
import { PAGES } from '@utils/constant';
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
      nextPage: pageParam + PAGES.NOTICE,
      isLast: response.length < PAGES.NOTICE,
      id: pageParam,
    };
  }, []);
  const { data: noticeList, fetchNextPage } = useInfiniteQuery('notice', fetchNoticeByPage, {
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
      </StTeamNoticeItemContainer>
    </>
  );
}

export default TeamAlert;
