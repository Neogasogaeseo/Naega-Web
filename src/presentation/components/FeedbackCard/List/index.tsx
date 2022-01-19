import { FeedbackDetail } from '@api/types/team';
import React from 'react';
import FeedbackCardItem from '../Item';

type FeedbackCardListProps = {
  feedbacks: FeedbackDetail[];
};

function FeedbackCardList(props: FeedbackCardListProps) {
  const { feedbacks } = props;
  return (
    <>
      {feedbacks.map((feedback) => (
        <FeedbackCardItem key={feedback.id} {...feedback} />
      ))}
    </>
  );
}

export default FeedbackCardList;
