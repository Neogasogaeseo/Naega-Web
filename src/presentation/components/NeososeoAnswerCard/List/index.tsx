import { AnswerDetail, MyDetail } from '@api/types/user';
import NeososeoAnswerCardItem from '../Item';

interface NeososeoAnswerCardListProps {
  answers: AnswerDetail[];
  selectedForm?: MyDetail | null;
}

function NeososeoAnswerCardList(props: NeososeoAnswerCardListProps) {
  const { answers, selectedForm } = props;
  return (
    <>
      {answers.map((answer) => (
        <NeososeoAnswerCardItem key={answer.id} selectedForm={selectedForm} {...answer} />
      ))}
    </>
  );
}

export default NeososeoAnswerCardList;
