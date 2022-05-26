import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { useLoginUser } from '@hooks/useLoginUser';
import NeogaResultCard from '@components/common/NeogaResultCard';
import NeogaCreateCardItem from '@components/NeogaCreateCard/Item';
import { StNeogaResult } from './style';
import CommonHeader from '@components/common/Header';

function NeogaResult() {
  const navigate = useNavigate();
  const { username } = useLoginUser();
  const { data: cardItem } = useQuery('neogaResultCardItem', api.neogaService.getAllFormCard);

  return (
    <>
      <CommonHeader />
      <StNeogaResult>
        <h1>{username}님이 만든 너가소개서</h1>
        <h2>내가 생성한 너가소개서의 답변을 확인하세요</h2>
        {cardItem?.resultList.map(({ id, title, subtitle, darkIconImage, createdAt, answer }) =>
          answer && answer.length > 0 ? (
            <NeogaResultCard
              key={id}
              id={id}
              title={title}
              darkIconImage={darkIconImage}
              createdAt={createdAt}
              answer={answer}
            />
          ) : (
            <NeogaCreateCardItem
              key={id}
              idx={id}
              title={title}
              content={subtitle}
              src={darkIconImage}
              onClick={() => navigate(`/neoga/${id}/detail/form`)}
            />
          ),
        )}
      </StNeogaResult>
    </>
  );
}

export default NeogaResult;
