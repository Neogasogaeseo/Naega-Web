import { AnswerDetail } from '@api/types/user';
import NeososeoAnswerCardItem from '../Item';

type NeososeoAnswerCardListProps = { answers: AnswerDetail[] };

function NeososeoAnswerCardList(props: NeososeoAnswerCardListProps) {
  const { answers } = props;
  return (
    <>
      {answers.map((answer) => (
        <NeososeoAnswerCardItem key={answer.id} {...answer} />
      ))}
    </>
  );
}

export default NeososeoAnswerCardList;
