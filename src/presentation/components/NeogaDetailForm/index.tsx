/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
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
        <StDate>{date}</StDate>
      </StHeader>
      <StKeyword>
        <p>키워드모음</p>
      </StKeyword>
      <StFeedWrapper>
        <StFeedTitle>5개의 답변 피드</StFeedTitle>
        <StFeedNickname>동네친구 수진</StFeedNickname>
        <StFeedContent>
          강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자
        </StFeedContent>
        <ImmutableKeywordList
          keywordList={keywordList}
          onItemClick={() => {
            return;
          }}
        />
        <hr />
      </StFeedWrapper>
      <StButton type="submit">링크 복사하기</StButton>
    </StNeogaDetailForm>
  );
}

export default NeogaDetailForm;
