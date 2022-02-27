import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getNeogaResult, getNeogaFeedbackResult } from '@infrastructure/remote/neoga-result';
import { ResultFeedback } from '@api/types/neoga';
import { ResultDetail } from '@api/types/neoga';
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
  StDivisionLine,
} from './style';
import { icLink, IcArrowDown, IcArrowUp } from '@assets/icons/index';

function NeogaDetailForm() {
  const { formID } = useParams();
  const [resultDetail, setResultDetail] = useState<ResultDetail>();
  const [resultFeedback, setResultFeedback] = useState<ResultFeedback | null>(null);
  const [lookMoreButton, setLookMoreButton] = useState(false);
  const link = `${DOMAIN}/neososeoform/${resultDetail && resultDetail.q}`;
  const { fireToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!formID) return;
    if (isNaN(+formID)) return;
    (async () => {
      const data = await getNeogaResult(+formID);
      if (!data) navigate('/home');
      else setResultDetail(data);
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

  if (!resultDetail) return <></>;
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
