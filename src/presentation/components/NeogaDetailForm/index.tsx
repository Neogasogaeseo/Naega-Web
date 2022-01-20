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
import { ResultFormList } from '@api/types/neoga';
import { imgEmptyFeedback } from '@assets/images';
import { useParams } from 'react-router-dom';
import { ResultDetailList } from '@api/types/neoga';
import {getNeogaResult} from '@infrastructure/remote/neoga-result';
import {useNavigate} from 'react-router-dom';

function NeogaDetailForm() {
  const navigate = useNavigate();
  const { formID } = useParams();
  const [resultKeywordList, setResultKeywordList] = useState<ResultDetailList>();
  const [resultList, setResultList] = useState<ResultFormList[]>([]);
  const [resultBoolean, setResultBoolean] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(false);

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

  const onClickCopyLink = () => {
    navigate(`/neososeoform/${resultKeywordList&&resultKeywordList.q}`);
  }

if(!resultKeywordList)
return <></>
  return (
    <StNeogaDetailForm>
      <div>
        <StHeader>
          <StTitle>
            {resultKeywordList.title} <br />
          </StTitle>
        </StHeader>
        <StLink>
          <img src={icLink} />
          <p onClick={onClickCopyLink}>링크 복사하기</p>
        </StLink>
        <StDate>{resultKeywordList.createdAt} 에 생성</StDate>
        <StQuestion>
          <span>Q.</span>{resultKeywordList.subtitle}
        </StQuestion>
      </div>
      {resultBoolean ? (
        <>
          <StKeyword>
            <p>키워드모음</p>
            {!lookMoreButton && (
              <ImmutableKeywordList
                keywordList={resultKeywordList?resultKeywordList.keywordlists.slice(0, 7):[]}
                onItemClick={() => null}
              />
            )}
            <StMoreWrapper>
              {lookMoreButton && resultKeywordList?.keywordlists.length > 7 ? (
                <>
                  <ImmutableKeywordList keywordList={resultKeywordList?.keywordlists??[]} onItemClick={() => null} />
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
                  {/* <ImmutableKeywordList keywordList={resultKeywordList} onItemClick={() => null} /> */}
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
