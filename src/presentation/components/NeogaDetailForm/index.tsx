import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getNeogaResult, getNeogaFeedbackResult } from '@infrastructure/remote/neoga-result';
import { ResultFeedbackList } from '@api/types/neoga';
import { ResultDetailList } from '@api/types/neoga';
import { useToast } from '@hooks/useToast';
import { copyClipboard } from '@utils/copyClipboard';
import { DOMAIN } from '@utils/constant';
import NeososeoFormHeader from '@components/common/NeososeoFormHeader';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import NeogaDetailFormEmptyView from '@components/common/Empty/NeogaDetailForm';
import NeogaDetailFormCard from './Card';
import {
  StNeogaDetailForm,
  StDate,
  StKeyword,
  StFeedTitle,
  StQuestion,
  StLink,
  StMoreWrapper,
  StMoreButton,
} from './style';
import { icLink, IcArrowDown, IcArrowUp } from '@assets/icons/index';

function NeogaDetailForm() {
  const { formID } = useParams();
  const [resultDetailList, setResultDetailList] = useState<ResultDetailList>();
  const [resultFeedback, setResultFeedback] = useState<ResultFeedbackList | null>(null);
  const [lookMoreButton, setLookMoreButton] = useState(false);
  const link = `${DOMAIN}/neososeoform/${resultDetailList && resultDetailList.q}`;
  const { fireToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!formID) return;
    if (isNaN(+formID)) return;
    (async () => {
      const data = await getNeogaResult(+formID);
      if (!data) navigate('/home');
      else setResultDetailList(data);
    })();
  }, []);

  useEffect(() => {
    if (!formID) return;
    if (isNaN(+formID)) return;
    (async () => {
      const data = await getNeogaFeedbackResult(+formID);
      if (!data) navigate('/home');
      else setResultFeedback(data);
    })();
  }, []);

  if (!resultDetailList) return <></>;
  return (
    <StNeogaDetailForm>
      <div>
        <NeososeoFormHeader title={resultDetailList.title} image={resultDetailList.darkIconImage} />
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
        <StDate>{resultDetailList.createdAt} 에 생성</StDate>
        <StQuestion>
          <span>Q.</span>
          {resultDetailList.subtitle}
        </StQuestion>
      </div>
      {resultFeedback && resultFeedback.answer.length > 0 ? (
        <>
          <StKeyword>
            {resultDetailList.keywordList.length !== 0 && <p>내가 받은 키워드</p>}
            {!lookMoreButton && (
              <ImmutableKeywordList
                keywordList={resultDetailList ? resultDetailList.keywordList.slice(0, 7) : []}
                onItemClick={() => null}
              />
            )}
            <StMoreWrapper>
              {lookMoreButton && resultDetailList?.keywordList.length > 7 ? (
                <>
                  <ImmutableKeywordList
                    keywordList={resultDetailList?.keywordList ?? []}
                    onItemClick={() => null}
                  />
                  <hr />
                  <StMoreButton
                    onClick={() => {
                      setLookMoreButton(false);
                    }}
                  >
                    접기<img src={IcArrowUp}></img>
                  </StMoreButton>
                </>
              ) : (
                resultDetailList.keywordList.length > 7 && (
                  <>
                    <hr />
                    <StMoreButton
                      onClick={() => {
                        setLookMoreButton(true);
                      }}
                    >
                      더보기<img src={IcArrowDown}></img>
                    </StMoreButton>
                  </>
                )
              )}
            </StMoreWrapper>
          </StKeyword>
          <hr />
          <StFeedTitle>
            <span>
              {resultFeedback?.answerCount !== undefined ? resultFeedback.answerCount : 0}개
            </span>
            의 답변을 받았어요
          </StFeedTitle>
          {resultFeedback.answer.map((feedback) => (
            <NeogaDetailFormCard key={feedback.id} {...feedback} />
          ))}
        </>
      ) : (
        <NeogaDetailFormEmptyView link={link} />
      )}
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
