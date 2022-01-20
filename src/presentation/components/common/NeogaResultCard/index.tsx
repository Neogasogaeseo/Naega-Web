import { Keyword } from '@api/types/user';
import { icNoReply } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { StNeogaResultCard, StNeogaCardHeader, StNeogaCardLine, StNeogaNoReply } from './style';
import NeogaResultComment from '../NeogaResultComment';

function NeogaResultCard() {
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  // 임시 변수
  const userID = 1;
  const isData = true;

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getResultKeywords(userID); // getResultKeywords와 userID는 임시
      setKeywordList(data.slice(0, 2));
    })();
  }, [keywordList]);

  return (
    <StNeogaResultCard>
      <StNeogaCardHeader>
        <img src={imgEmptyProfile} />
        <div>
          <div>너가 닮고 싶은 나의 일잘러 모습</div>
          <div>2022-01-12</div>
        </div>
      </StNeogaCardHeader>
      <StNeogaCardLine />
      <div>
        {isData ? (
          <>
            <NeogaResultComment keywordList={keywordList} />
            <NeogaResultComment keywordList={keywordList} />
          </>
        ) : (
          <StNeogaNoReply>
            <img src={icNoReply} />
            아직 답변이 없어요
          </StNeogaNoReply>
        )}
      </div>
    </StNeogaResultCard>
  );
}

export default NeogaResultCard;
