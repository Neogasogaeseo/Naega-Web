import { api } from '@api/index';
import { useEffect, useState } from 'react';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import {icLink} from '@assets/icons/index';
import {
  StNeogaDetailForm,
  StTitle,
  StButton,
  StDate,
  StHeader,
  StKeyword,
  StFeedWrapper,
  StFeedNickname,
  StFeedContent,
  StFeedTitle,
  StQuestion,
  StLink,
  StFeedName,
  StFeedDate,
} from './style';
import { Keywordlists, ResultFormList } from '@api/types/neoga';


function NeogaDetailForm() {
  const [resultKeywordList,setResultKeywordList] = useState<Keywordlists[]>([]);
  const [resultList, setResultList] = useState<ResultFormList[]>([]);

    useEffect(()=>{
      (async ()=>{
        const data= await api.neogaService.getResultTemplates();
        setResultKeywordList(data);
        console.log(resultKeywordList.length);
      })();
    },[resultKeywordList]);

    useEffect(()=>{
      (async ()=>{
        const data= await api.neogaService.getAllResultListTemplates();
        setResultList(data);
      })();
    },[resultList]);

  return (
    <StNeogaDetailForm>
      <div>
      <StHeader>
        <StTitle>
          2022, 임인년 <br />
          강쥐에게 기대하는 모습은?
        </StTitle>
      </StHeader>
      <StLink><img src={icLink}/><p>링크 복사하기</p></StLink>
      <StDate>2021-01-17 에 생성</StDate>
      <StQuestion><p>Q.</p>나와 함께하며 당신이 닮고 싶었던 능력이 있었을까요 ?
      </StQuestion>
      </div>
      <StKeyword>
        <p>키워드모음</p>
        <ImmutableKeywordList keywordList={resultKeywordList} onItemClick={() => null} />
      </StKeyword>
      <hr />
      <StFeedTitle>
          <p>5개</p>의 답변 피드
      </StFeedTitle>
      {
        resultList.map((data)=>{
          return(
            <>
            <StFeedWrapper>
            <StFeedNickname><StFeedName>{data.category}·<p>{data.writer}</p></StFeedName>
            <StFeedDate>{data.createdAt}</StFeedDate></StFeedNickname>
            <StFeedContent>
              {data.content}
            </StFeedContent>
            <ImmutableKeywordList keywordList={resultKeywordList} onItemClick={() => null} />
            <hr/>
          </StFeedWrapper>
          </>
          )
        })
      }
      <StButton type="submit">링크 복사하기</StButton>
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
