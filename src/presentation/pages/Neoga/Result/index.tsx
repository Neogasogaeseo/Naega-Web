import { imgLogo } from '@assets/images';
import NeogaResultCard from '@components/common/NeogaResultCard';
import { useLoginUser } from '@hooks/useLoginUser';
import { Link } from 'react-router-dom';
import { StNeogaResult } from './style';
import { api } from '@api/index';
import { useEffect, useState } from 'react';
import { NeogaResultCardItem } from '@api/types/neoga';

function NeogaResult() {
  const { username } = useLoginUser();
  const [cardItem, setCardItem] = useState<NeogaResultCardItem>();

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getFormResultCard();
      setCardItem(data);
    })();
  }, []);

  return (
    <StNeogaResult>
      <Link to="/home">
        <img src={imgLogo} />
      </Link>
      <h1>{username}님이 만든 너가소개서</h1>
      <h2>내가 생성한 너가소개서를 확인하세요</h2>
      {cardItem && cardItem.resultList.map((result) => (
        <NeogaResultCard key={result.id} {...result} />
      ))}
    </StNeogaResult>
  );
}

export default NeogaResult;
