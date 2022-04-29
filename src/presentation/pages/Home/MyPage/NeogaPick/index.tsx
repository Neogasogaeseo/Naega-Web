import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import CommonNavigation from '@components/common/Navigation';
import MyPickEmptyView from '@components/common/Empty/MyPick';
import NeososeoAnswerCardList from '@components/NeososeoAnswerCard/List';
import { StMyNeogaPick, StMyNeogaPickList } from './style';

function MyNeogaPick() {
  const { userID } = useParams();
  const { data: neososeoBookmark, isLoading: isNSSBookmarkLoading } = useQuery(
    ['nssBookmark', userID],
    () => api.userService.getNeososeoBookmark(userID ?? ''),
    { useErrorBoundary: true, retry: 1 },
  );

  return (
    <>
      <CommonNavigation title="너가소개서 픽 하기" />
      <StMyNeogaPick>
        <header>
          너가소개서에 지인이 남겨준 답변들 중<br />
          <span>My 프로필에 걸어두고 싶은 답변</span>을 <span>픽</span>해주세요!
        </header>
        {isNSSBookmarkLoading ? (
          <div>너가소개서 픽 하기 정보 로딩중</div>
        ) : (
          neososeoBookmark && (
            <StMyNeogaPickList>
              {neososeoBookmark.count > 0 ? (
                <NeososeoAnswerCardList answers={neososeoBookmark.answerList} />
              ) : (
                <MyPickEmptyView pickType="neoga" />
              )}
            </StMyNeogaPickList>
          )
        )}
      </StMyNeogaPick>
    </>
  );
}

export default MyNeogaPick;
