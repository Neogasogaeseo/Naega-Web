import { useEffect, useState } from 'react';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { icLink, IcArrowDown, IcArrowUp } from '@assets/icons/index';
import { ResultFeedList } from '@api/types/neoga';
import { imgEmptyFeedback } from '@assets/images';
import { ResultDetailList } from '@api/types/neoga';
import { getNeogaResult, getNeogaFeedbackResult } from '@infrastructure/remote/neoga-result';
import { useToast } from '@hooks/useToast';
import { copyClipboard } from '@utils/copyClipboard';
import { useParams } from 'react-router-dom';

import {
  StNeogaDetailForm,
  StTitle,
  StDate,
  StHeader,
  StKeyword,
  StFeedWrapper,
  StFeedHeader,
  StFeedContent,
  StFeedTitle,
  StQuestion,
  StLink,
  StFeedName,
  StFeedDate,
  StEmptyFeedback,
  StButton,
  StMoreWrapper,
  StMoreButton,
  StIcon,
} from './style';
import { DOMAIN } from '@utils/constant';

function NeogaDetailForm() {
  const { formID } = useParams();
  const [resultKeywordList, setResultKeywordList] = useState<ResultDetailList>();
  const [resultFeedback, setResultFeedback] = useState<ResultFeedList | null>(null);
  const [resultBoolean, setResultBoolean] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(false);
  const link = `${DOMAIN}/neososeoform/${resultKeywordList && resultKeywordList.q}`;
  const { fireToast } = useToast();

  useEffect(() => {
    if (!formID) return;
    if (isNaN(+formID)) return;
    (async () => {
      const data = await getNeogaResult(+formID);
      setResultBoolean(true);
      setResultKeywordList(data);
    })();
  }, []);

  useEffect(() => {
    if (!formID) return;
    if (isNaN(+formID)) return;
    (async () => {
      const data = await getNeogaFeedbackResult(+formID);
      setResultBoolean(true);
      setResultFeedback(data);
    })();
  }, []);

  const onClickMore = () => {
    setLookMoreButton(true);
  };

  const onClickFold = () => {
    setLookMoreButton(false);
  };

  if (!resultKeywordList) return <></>;
  return (
    <StNeogaDetailForm>
      <div>
        <StHeader>
          <StTitle>
            {resultKeywordList.title} <br />
          </StTitle>
          <StIcon>
            <img src={resultKeywordList.darkIconImage} />
          </StIcon>
        </StHeader>
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
        <StDate>{resultKeywordList.createdAt} 에 생성</StDate>
        <StQuestion>
          <span>Q.</span>
          {resultKeywordList.subtitle}
        </StQuestion>
      </div>
      {resultBoolean ? (
        <>
          <StKeyword>
            <p>키워드모음</p>
            {!lookMoreButton && (
              <ImmutableKeywordList
                keywordList={resultKeywordList ? resultKeywordList.keywordlists.slice(0, 7) : []}
                onItemClick={() => null}
              />
            )}
            <StMoreWrapper>
              {lookMoreButton && resultKeywordList?.keywordlists.length > 7 ? (
                <>
                  <ImmutableKeywordList
                    keywordList={resultKeywordList?.keywordlists ?? []}
                    onItemClick={() => null}
                  />
                  <hr />
                  <StMoreButton onClick={onClickFold}>
                    접기<img src={IcArrowUp}></img>
                  </StMoreButton>
                </>
              ) : (
                resultKeywordList.keywordlists.length > 7 && (
                  <>
                    <hr />
                    <StMoreButton onClick={onClickMore}>
                      더보기<img src={IcArrowDown}></img>
                    </StMoreButton>
                  </>
                )
              )}
            </StMoreWrapper>
          </StKeyword>
          <hr />
          <StFeedTitle>
            <span>{resultFeedback?.answerCount}개</span>의 답변 피드
          </StFeedTitle>
          {resultFeedback &&
            resultFeedback.answer.map((feedback: any) => {
              return (
                <>
                  <StFeedWrapper>
                    <StFeedHeader>
                      <StFeedName>
                        {feedback.name}
                        <p>·</p>
                        <span>{feedback.relationship}</span>
                      </StFeedName>
                      <StFeedDate>{feedback.createdAt}</StFeedDate>
                    </StFeedHeader>
                    <StFeedContent>{feedback.content}</StFeedContent>
                    <ImmutableKeywordList
                      keywordList={feedback.keywords}
                      onItemClick={() => null}
                    />
                    <hr />
                  </StFeedWrapper>
                </>
              );
            })}
        </>
      ) : (
        <StEmptyFeedback>
          <img src={imgEmptyFeedback} alt="" />
          <StButton
            onClick={() =>
              copyClipboard(link, () => fireToast({ content: '링크가 클립보드에 저장되었습니다.' }))
            }
          >
            링크 복사하기
          </StButton>
        </StEmptyFeedback>
      )}
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
