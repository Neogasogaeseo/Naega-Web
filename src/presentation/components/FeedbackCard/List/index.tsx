import { FeedbackDetail } from '@api/types/team';
import FeedbackCardItem from '../Item';

type FeedbackCardListProps = {
  feedbacks: FeedbackDetail[];
  onFeedbackClicked?: (
    feedbackID: number,
    isMine: boolean,
    isForMe: boolean,
    isPinned: boolean,
  ) => void;
};

function FeedbackCardList(props: FeedbackCardListProps) {
  const { feedbacks, onFeedbackClicked } = props;
  return (
    <>
      {feedbacks.map((feedback) => (
        <FeedbackCardItem key={feedback.id} {...feedback} onClick={onFeedbackClicked} />
      ))}
    </>
  );
}

export default FeedbackCardList;
