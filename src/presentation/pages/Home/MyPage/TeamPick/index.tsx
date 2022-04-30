import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import CommonNavigation from '@components/common/Navigation';
import MyPickEmptyView from '@components/common/Empty/MyPick';
import FeedbackCardList from '@components/FeedbackCard/List';
import { StMyTeamPick, StMyTeamPickList } from './style';

function MyTeamPick() {
  const { userID } = useParams();
  const { data: feedbackBookmark, isLoading: isTSSBookmarkLoading } = useQuery(
    ['tssBookmark', userID],
    () => api.userService.getFeedbackBookmark(userID ?? ''),
    { useErrorBoundary: true, retry: 1 },
  );

  return (
    <>
      <CommonNavigation title="팀원소개서 픽 하기" />
      <StMyTeamPick>
        <header>
          팀원소개서에 팀원이 남겨준 피드백들 중<br />
          <span>My 프로필에 걸어두고 싶은 피드백</span>을 <span>픽</span>해주세요!
        </header>
        {isTSSBookmarkLoading ? (
          <div>팀소서 북마크 정보 로딩중</div>
        ) : (
          feedbackBookmark && (
            <StMyTeamPickList>
              {feedbackBookmark.feedbackList.length > 0 ? (
                <FeedbackCardList feedbacks={feedbackBookmark.feedbackList} />
              ) : (
                <MyPickEmptyView pickType="team" />
              )}
            </StMyTeamPickList>
          )
        )}
      </StMyTeamPick>
    </>
  );
}

export default MyTeamPick;
