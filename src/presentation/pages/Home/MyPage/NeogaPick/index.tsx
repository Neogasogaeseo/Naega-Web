import { useInfiniteQuery, useQuery } from 'react-query';
import { useCallback, useEffect, useState } from 'react';

import { api } from '@api/index';
import { MyDetail } from '@api/types/user';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonLoader from '@components/common/Loader';
import CommonNavigation from '@components/common/Navigation';
import MySelectableList from '@components/MySelectableList';
import MyPickEmptyView from '@components/common/Empty/MyPick';
import NeososeoAnswerCardList from '@components/NeososeoAnswerCard/List';
import { PICK_PAGE } from '@utils/constant';
import { StMyNeogaPick, StMyNeogaFormList, StMyNeogaPickList } from './style';

function MyNeogaPick() {
  const { isBottomReached, isInitialState } = useScrollHeight();
  const [selectedForm, setSelectedForm] = useState<MyDetail | null>(null);

  const { data: myFormInfo } = useQuery('myFormInfo', api.userService.getMyFormInfo);

  const fetchAnswersByPage = useCallback(
    async ({ pageParam = 0 }) => {
      const response = selectedForm
        ? await api.userService.getMyAnswerInfo(pageParam, selectedForm.id)
        : await api.userService.getMyAnswerInfo(pageParam);
      return {
        answerList: response.answerList,
        nextPage: pageParam + PICK_PAGE,
        isLast: response.answerList.length < PICK_PAGE,
      };
    },
    [selectedForm && selectedForm.id],
  );

  const {
    data: answerInfo,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['answerInfo', selectedForm?.id], fetchAnswersByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
  });

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <>
      <CommonNavigation title="너가소개서 픽 하기" />
      <StMyNeogaPick>
        <header>
          너가소개서에 지인이 남겨준 답변들 중<br />
          <span>My 프로필에 걸어두고 싶은 답변</span>을 <span>픽</span>해주세요!
        </header>
        {myFormInfo && myFormInfo.formList.length > 0 && (
          <StMyNeogaFormList>
            <MySelectableList
              items={myFormInfo.formList}
              isSquare={false}
              selectedItem={selectedForm}
              setSelectedItem={setSelectedForm}
            />
          </StMyNeogaFormList>
        )}
        {answerInfo?.pages && answerInfo.pages.map((page) => page.answerList).flat().length ? (
          <StMyNeogaPickList>
            <NeososeoAnswerCardList
              answers={answerInfo.pages.map((page) => page.answerList).flat()}
            />
          </StMyNeogaPickList>
        ) : (
          <MyPickEmptyView pickType="neoga" />
        )}
        {isFetchingNextPage && <CommonLoader />}
      </StMyNeogaPick>
    </>
  );
}

export default MyNeogaPick;
