import { imgEmptyProfile } from '@assets/images';
import { StNeogaResultCard, StNeogaCardHeader, StNeogaCardLine, StNeogaNoReply } from './style';
import NeogaResultComment from '../NeogaResultComment';
import { useNavigate } from 'react-router-dom';
import { NeogaAnswerList } from '@api/types/neoga';

interface NeogaResultCardProps {
  id: number;
  title: string;
  darkIconImage: string;
  createdAt: string;
  answer?: NeogaAnswerList[];
}

function NeogaResultCard(props: NeogaResultCardProps) {
  const { id, title, darkIconImage, createdAt, answer } = props;
  const navigate = useNavigate();

  return (
    <StNeogaResultCard onClick={() => navigate(`/neoga/${id}/detail/form`)}>
      <StNeogaCardHeader>
        <img src={darkIconImage || imgEmptyProfile} />
        <div>
          <div>{title}</div>
          <div>{createdAt}</div>
        </div>
      </StNeogaCardHeader>
      <StNeogaCardLine />
      <div>
        {answer && answer?.length !== 0 ? (
          answer.map((answer) => <NeogaResultComment key={answer.id} {...answer} />)
        ) : (
          <StNeogaNoReply>
            <div>아직 답변이 없어요</div>
            <div>링크를 공유해 답변을 받아보세요</div>
          </StNeogaNoReply>
        )}
      </div>
    </StNeogaResultCard>
  );
}

export default NeogaResultCard;
