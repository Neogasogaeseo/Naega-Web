import { useInfiniteQuery, useQuery } from 'react-query';
import { useCallback, useEffect, useState } from 'react';

import { api } from '@api/index';
import { MyDetail } from '@api/types/user';
import { useScrollHeight } from '@hooks/useScrollHeight';
import CommonNavigation from '@components/common/Navigation';
import MySelectableList from '@components/MySelectableList';
import MyPickEmptyView from '@components/common/Empty/MyPick';
import NeososeoAnswerCardList from '@components/NeososeoAnswerCard/List';
import { PAGES } from '@utils/constant';
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
        nextPage: pageParam + PAGES.PICK,
        isLast: response.answerList.length < PAGES.PICK,
      };
    },
    [selectedForm && selectedForm.id],
  );

  const { data: answerInfo, fetchNextPage } = useInfiniteQuery(
    ['answerInfo', selectedForm?.id],
    fetchAnswersByPage,
    {
      getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    },
  );

  useEffect(() => {
    if (!isInitialState) fetchNextPage();
  }, [isBottomReached, isInitialState]);

  return (
    <>
      <CommonNavigation title="MY 너가소개서" />
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
            <div>{selectedForm?.title ?? '전체'}</div>
          </StMyNeogaFormList>
        )}
        {answerInfo?.pages && answerInfo.pages.map((page) => page.answerList).flat().length ? (
          <StMyNeogaPickList>
            <NeososeoAnswerCardList
              answers={answerInfo.pages.map((page) => page.answerList).flat()}
              selectedForm={selectedForm}
            />
          </StMyNeogaPickList>
        ) : (
          <MyPickEmptyView pickType="neoga" />
        )}
      </StMyNeogaPick>
    </>
  );
}

export default MyNeogaPick;
