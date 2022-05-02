import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { useLoginUser } from '@hooks/useLoginUser';
import NeogaResultCard from '@components/common/NeogaResultCard';
import NeogaCreateCardItem from '@components/NeogaCreateCard/Item';
import { StNeogaResult } from './style';
import { imgLogo } from '@assets/images';

function NeogaResult() {
  const navigate = useNavigate();
  const { username } = useLoginUser();
  const { data: cardItem } = useQuery('neogaResultCardItem', api.neogaService.getMostFormCard);
  const replyList = cardItem?.resultList.filter(
    (result) => result.answer && result.answer.length > 0,
  );
  const noReplyList = cardItem?.resultList.filter(
    (result) => result.answer && result.answer.length == 0,
  );

  return (
    <StNeogaResult>
      <Link to="/home">
        <img src={imgLogo} alt="로고" />
      </Link>
      <h1>{username}님이 만든 너가소개서</h1>
      <h2>내가 생성한 너가소개서의 답변을 확인하세요</h2>
      {replyList && replyList.map((card) => <NeogaResultCard key={card.id} {...card} />)}
      {noReplyList &&
        noReplyList.map(({ id, title, subtitle, darkIconImage }) => (
          <NeogaCreateCardItem
            key={id}
            idx={id}
            title={title}
            content={subtitle}
            src={darkIconImage}
            onClick={() => navigate(`/neoga/${id}/detail/form`)}
          />
        ))}
    </StNeogaResult>
  );
}

export default NeogaResult;
