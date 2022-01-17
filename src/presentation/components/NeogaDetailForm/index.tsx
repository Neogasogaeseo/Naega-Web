import { api } from '@api/index';
import { useEffect, useState } from 'react';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { icLink, IcArrowDown, IcArrowUp } from '@assets/icons/index';
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
} from './style';
import { Keywordlists, ResultFormList } from '@api/types/neoga';
import { imgEmptyFeedback } from '@assets/images';
import { useParams } from 'react-router-dom';

function NeogaDetailForm() {
  const {formID} = useParams();
  const [resultKeywordList, setResultKeywordList] = useState<Keywordlists[]>([]);
  const [resultList, setResultList] = useState<ResultFormList[]>([]);
  const [resultBoolean, setResultBoolean] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(false);

  useEffect(() => {
    if(!formID) return;
    if(isNaN(+formID)) return;
    (async () => {
      const data = await api.neogaService.getResultKeywords(+formID);
      setResultBoolean(true);
      setResultKeywordList(data);
    })();
  }, [resultKeywordList]);

  useEffect(() => {
    if(!formID) return;
    if(isNaN(+formID)) return;
    (async () => {
      const data = await api.neogaService.getAllResultListTemplates(+formID);
      setResultBoolean(true);
      setResultList(data);
    })();
  }, [resultList]);

  const onClickMore = () => {
    setLookMoreButton(true);
  };

  const onClickFold = () => {
    setLookMoreButton(false);
  };

  return (
    <StNeogaDetailForm>
      <div>
        <StHeader>
          <StTitle>
            2022, 임인년 <br />
            강쥐에게 기대하는 모습은?
          </StTitle>
        </StHeader>
        <StLink>
          <img src={icLink} />
          <p>링크 복사하기</p>
        </StLink>
        <StDate>2021-01-17 에 생성</StDate>
        <StQuestion>
          <span>Q.</span>나와 함께하며 당신이 닮고 싶었던 능력이 있었을까요 ?
        </StQuestion>
      </div>
      {resultBoolean ? (
        <>
          <StKeyword>
            <p>키워드모음</p>
            {!lookMoreButton && (
              <ImmutableKeywordList
                keywordList={resultKeywordList.slice(0, 7)}
                onItemClick={() => null}
              />
            )}
            <StMoreWrapper>
              {lookMoreButton && resultKeywordList.length > 7 ? (
                <>
                  <ImmutableKeywordList keywordList={resultKeywordList} onItemClick={() => null} />
                  <hr />
                  <StMoreButton onClick={onClickFold}>
                    접기<img src={IcArrowUp}></img>
                  </StMoreButton>
                </>
              ) : resultKeywordList.length > 7 && (
                <>
                  <hr />
                  <StMoreButton onClick={onClickMore}>
                    더보기<img src={IcArrowDown}></img>
                  </StMoreButton>
                </>
              )}
            </StMoreWrapper>
          </StKeyword>
          <hr />
          <StFeedTitle>
            <span>5개</span>의 답변 피드
          </StFeedTitle>
          {resultList.map((data) => {
            return (
              <>
                <StFeedWrapper>
                  <StFeedHeader>
                    <StFeedName>
                      {data.category}·<span>{data.writer}</span>
                    </StFeedName>
                    <StFeedDate>{data.createdAt}</StFeedDate>
                  </StFeedHeader>
                  <StFeedContent>{data.content}</StFeedContent>
                  <ImmutableKeywordList keywordList={resultKeywordList} onItemClick={() => null} />
                  <hr />
                </StFeedWrapper>
              </>
            );
          })}
        </>
      ) : (
          <StEmptyFeedback>
            <img src={imgEmptyFeedback} alt="" />
            <StButton>링크 복사하기</StButton>
          </StEmptyFeedback>
      )}
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
