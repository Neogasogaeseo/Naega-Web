import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useToast } from '@hooks/useToast';
import { copyClipboard } from '@utils/copyClipboard';
import { DOMAIN } from '@utils/constant';
import NeososeoFormHeader from '@components/common/NeososeoFormHeader';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import NeogaDetailFormEmptyView from '@components/common/Empty/NeogaDetailForm';
import {
  StNeogaDetailForm,
  StDate,
  StKeyword,
  StFeedTitle,
  StQuestion,
  StLink,
  StMoreWrapper,
  StMoreButton,
  StDivisionLine,
} from './style';
import { icLink, IcArrowDown, IcArrowUp } from '@assets/icons/index';
import { api } from '@api/index';
import NeogaDetailFormCard from '@components/NeogaDetailFormCard';
import NeososeoPickerBottomSheet from '@components/common/BottomSheet/NeososeoPicker';

function NeogaDetailForm() {
  const { formID } = useParams();
  const [lookMoreButton, setLookMoreButton] = useState(false);
  const [bottomSheetOpened, setBottomSheetOpened] = useState(false);
  const [bottomSheetState, setBottomSheetState] = useState<{ id: number; isPinned: boolean }>({
    id: 0,
    isPinned: false,
  });

  const { fireToast } = useToast();
  const navigate = useNavigate();

  if (!formID || isNaN(+formID)) navigate('/home');

  const { data: resultDetail } = useQuery(
    ['nssDetail', formID],
    () => api.neogaService.getNeososeoInfo(+(formID ?? 0)),
    { useErrorBoundary: true, retry: 1 },
  );
  const link = `${DOMAIN}/neososeoform/${resultDetail?.q ?? ''}`;

  const { data: resultFeedback, refetch: refetchFeedbacks } = useQuery(
    ['nssFeedbacksDetail', formID],
    () => api.neogaService.getNeososeoFeedback(+(formID ?? 0)),
    { useErrorBoundary: true, retry: 1 },
  );

  const openBottomSheet = (isPinned: boolean, id: number) => {
    setBottomSheetState({ id, isPinned });
    setBottomSheetOpened(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpened(false);
    refetchFeedbacks();
  };

  if (!resultDetail) return <>로딩중</>;
  return (
    <StNeogaDetailForm>
      <div>
        <NeososeoFormHeader title={resultDetail.title} image={resultDetail.darkIconImage} />
        <StLink>
          <img src={icLink} />
          <p
            onClick={() =>
              copyClipboard(link, () => fireToast({ content: '링크가 클립보드에 저장되었습니다.' }))
            }
          >
            링크 복사하기
          </p>
        </StLink>
        <StDate>{resultDetail.createdAt} 에 생성</StDate>
        <StQuestion>
          <span>Q.</span>
          {resultDetail.subtitle}
        </StQuestion>
      </div>
      {resultFeedback && resultFeedback.answerList.length > 0 ? (
        <>
          <StKeyword>
            {resultDetail.keywordList.length !== 0 && <p>내가 받은 키워드</p>}
            {!lookMoreButton && (
              <ImmutableKeywordList
                keywordList={resultDetail ? resultDetail.keywordList.slice(0, 7) : []}
                onItemClick={() => null}
              />
            )}
            <StMoreWrapper>
              {lookMoreButton && resultDetail?.keywordList.length > 7 ? (
                <>
                  <ImmutableKeywordList
                    keywordList={resultDetail?.keywordList ?? []}
                    onItemClick={() => null}
                  />
                  <StMoreButton
                    onClick={() => {
                      setLookMoreButton(false);
                    }}
                  >
                    접기
                    <img src={IcArrowUp} />
                  </StMoreButton>
                </>
              ) : (
                resultDetail.keywordList.length > 7 && (
                  <>
                    <StMoreButton
                      onClick={() => {
                        setLookMoreButton(true);
                      }}
                    >
                      더보기
                      <img src={IcArrowDown} />
                    </StMoreButton>
                  </>
                )
              )}
            </StMoreWrapper>
          </StKeyword>
          <StDivisionLine />
          <StFeedTitle>
            <span>
              {resultFeedback?.answerCount !== undefined ? resultFeedback.answerCount : 0}개
            </span>
            의 답변을 받았어요
          </StFeedTitle>
          {resultFeedback.answerList.map((feedback) => (
            <NeogaDetailFormCard
              key={feedback.id}
              {...feedback}
              openBottomSheet={openBottomSheet}
            />
          ))}
        </>
      ) : (
        <NeogaDetailFormEmptyView link={link} />
      )}
      <NeososeoPickerBottomSheet
        opened={bottomSheetOpened}
        close={closeBottomSheet}
        {...bottomSheetState}
      />
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
