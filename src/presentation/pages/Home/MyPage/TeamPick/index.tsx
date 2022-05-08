import { useInfiniteQuery } from 'react-query';
import { useCallback, useEffect, useState } from 'react';

import { api } from '@api/index';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonLoader from '@components/common/Loader';
import CommonNavigation from '@components/common/Navigation';
import MyPickEmptyView from '@components/common/Empty/MyPick';
import FeedbackCardList from '@components/FeedbackCard/List';
import PickerList from '@components/common/PickerList';
import { PICK_PAGE } from '@utils/constant';
import { StMyTeamPick, StMyTeamPickList } from './style';


function MyTeamPick() {
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [teamID, setTeamID] = useState<null | number>(null);

  const fetchFeedbacksByPage = useCallback(
    async ({ pageParam = 0 }) => {
      const response = teamID
        ? await api.userService.getMyFeedbackInfo(teamID, pageParam)
        : await api.userService.getMyFeedbackInfo(pageParam);
      return {
        teamList: response.teamList,
        feedbackList: response.feedbackList,
        nextPage: pageParam + PICK_PAGE,
        isLast: response.feedbackList.length < PICK_PAGE,
      };
    },
    [teamID],
  );

  const {
    data: feedbackInfo,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['feedbackInfo', teamID], fetchFeedbacksByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <>
      <CommonNavigation title="팀원소개서 픽 하기" />
      <StMyTeamPick>
        <header>
          팀원소개서에 팀원이 남겨준 피드백들 중<br />
          <span>My 프로필에 걸어두고 싶은 피드백</span>을 <span>픽</span>해주세요!
        </header>
        {feedbackInfo?.pages && (
          <PickerList
            teamList={feedbackInfo.pages.map((page) => page.teamList).flat()}
            isSquare={true}
            setID={setTeamID}
          />
        )}
        {feedbackInfo?.pages && (
          <StMyTeamPickList>
            {feedbackInfo.pages.length > 0 ? (
              <FeedbackCardList
                feedbacks={feedbackInfo.pages.map((page) => page.feedbackList).flat()}
              />
            ) : (
              <MyPickEmptyView pickType="team" />
            )}
          </StMyTeamPickList>
        )}
        {isFetchingNextPage && <CommonLoader />}
      </StMyTeamPick>
    </>
  );
}

export default MyTeamPick;
