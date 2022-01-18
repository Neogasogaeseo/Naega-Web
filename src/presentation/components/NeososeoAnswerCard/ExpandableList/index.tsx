import { AnswerDetail } from '@api/types/user';
import ExpandListButton from '@components/common/ExpandListButton';
import { useState } from 'react';
import NeososeoAnswerCardList from '../List';

type NeososeoAnswerCardExpandableListProps = {
  answers: AnswerDetail[];
  firstShown?: number;
};

function NeososeoAnswerCardExpandableList(props: NeososeoAnswerCardExpandableListProps) {
  const { answers, firstShown = 2 } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <NeososeoAnswerCardList answers={answers.slice(0, firstShown)} />
      {firstShown < answers.length && (
        <>
          {isExpanded && <NeososeoAnswerCardList answers={answers.slice(firstShown)} />}
          <ExpandListButton
            onClick={() => setIsExpanded((prev) => !prev)}
            isExpanded={isExpanded}
          />
        </>
      )}
    </>
  );
}

export default NeososeoAnswerCardExpandableList;
