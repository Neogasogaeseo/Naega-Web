import { FeedbackDetail } from '@api/types/team';
import ExpandListButton from '@components/common/ExpandListButton';
import { useState } from 'react';
import FeedbackCardList from '../List';

type FeedbackCardExpandableListProps = {
  feedbacks: FeedbackDetail[];
  firstShown?: number;
};

function FeedbackCardExpandableList(props: FeedbackCardExpandableListProps) {
  const { feedbacks, firstShown = 2 } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <FeedbackCardList feedbacks={feedbacks.slice(0, firstShown)} />
      {firstShown < feedbacks.length && (
        <>
          {isExpanded && <FeedbackCardList feedbacks={feedbacks.slice(firstShown)} />}
          <ExpandListButton
            onClick={() => setIsExpanded((prev) => !prev)}
            isExpanded={isExpanded}
          />
        </>
      )}
    </>
  );
}

export default FeedbackCardExpandableList;
