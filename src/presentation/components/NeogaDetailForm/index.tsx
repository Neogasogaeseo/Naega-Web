/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
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
  StIcon,
  StLink
} from './style';

interface Keyword {
  id: string;
  content: string;
  color: string;
}

function NeogaDetailForm() {
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = currDate.getMonth() + 1;
  const today = currDate.getDate();
  const date =
    year + '-' + `${month < 10 ? '0' + month.toString() : month.toString()}` + '-' + today;
  return (
    <StNeogaDetailForm>
      <StHeader>
        <StTitle>
          2022, 임인년 <br />
          강쥐에게 기대하는 모습은?
        </StTitle>
        <StIcon></StIcon>
      </StHeader>
      <StLink><img src={icLink}/>링크 복사하기</StLink>
      <StDate>{date}에 생성</StDate>
      <StQuestion><p>Q.</p>나와 함께하며 당신이 닮고 싶었던 능력이 있었을까요 ?
      </StQuestion>
      <StKeyword>
        <p>키워드모음</p>
      </StKeyword>
      <hr />
      <StFeedWrapper>
        <StFeedTitle>
          <p>5개</p>의 답변 피드
        </StFeedTitle>
        <StFeedNickname>동네친구 <p>수진</p></StFeedNickname>
        <StFeedContent>
          강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자
        </StFeedContent>
        <ImmutableKeywordList
          keywordList={keywordList}
          onItemClick={() => {
            return;
          }}
        />
      </StFeedWrapper>
      <StButton type="submit">링크 복사하기</StButton>
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
