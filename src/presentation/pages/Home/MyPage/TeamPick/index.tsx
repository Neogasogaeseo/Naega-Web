import { useInfiniteQuery, useQuery } from 'react-query';
import { useCallback, useEffect, useState } from 'react';

import { api } from '@api/index';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonLoader from '@components/common/Loader';
import CommonNavigation from '@components/common/Navigation';
import MyPickEmptyView from '@components/common/Empty/MyPick';
import MySelectableList from '@components/MySelectableList';
import FeedbackCardList from '@components/FeedbackCard/List';
import { PICK_PAGE } from '@utils/constant';
import { StMyTeamPick, StMyTeamList, StMyTeamPickList } from './style';
import { MyDetail } from '@api/types/user';

function MyTeamPick() {
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [selectedTeam, setSelectedTeam] = useState<MyDetail | null>(null);

  const { data: myTeamInfo } = useQuery('myTeamInfo', api.userService.getMyTeamInfo);

  const fetchFeedbacksByPage = useCallback(
    async ({ pageParam = 0 }) => {
      const response = selectedTeam
        ? await api.userService.getMyFeedbackInfo(pageParam, selectedTeam.id)
        : await api.userService.getMyFeedbackInfo(pageParam);
      return {
        feedbackList: response.feedbackList,
        nextPage: pageParam + PICK_PAGE,
        isLast: response.feedbackList.length < PICK_PAGE,
      };
    },
    [selectedTeam && selectedTeam.id],
  );

  const {
    data: feedbackInfo,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['feedbackInfo', selectedTeam?.id], fetchFeedbacksByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <>
      <CommonNavigation title="MY 팀원소개서" />
      <StMyTeamPick>
        <header>
          팀원소개서에 팀원이 남겨준 피드백들 중<br />
          <span>My 프로필에 걸어두고 싶은 피드백</span>을 <span>픽</span>해주세요!
        </header>
        {myTeamInfo && myTeamInfo.teamList.length > 0 && (
          <StMyTeamList>
            <MySelectableList
              items={myTeamInfo.teamList}
              isSquare={true}
              selectedItem={selectedTeam}
              setSelectedItem={setSelectedTeam}
            />
            <div>{selectedTeam?.title ? selectedTeam?.title + ' 팀' : '전체'}</div>
          </StMyTeamList>
        )}
        {feedbackInfo?.pages &&
        feedbackInfo.pages.map((page) => page.feedbackList).flat().length ? (
          <StMyTeamPickList>
            <FeedbackCardList
              feedbacks={feedbackInfo.pages.map((page) => page.feedbackList).flat()}
              selectedTeam={selectedTeam}
            />
          </StMyTeamPickList>
        ) : (
          <MyPickEmptyView pickType="team" />
        )}
        {isFetchingNextPage && <CommonLoader />}
      </StMyTeamPick>
    </>
  );
}

export default MyTeamPick;
