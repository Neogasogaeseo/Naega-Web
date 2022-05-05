import { FeedbackDetail } from '@api/types/team';
import FeedbackCardItem from '../Item';

type FeedbackCardListProps = {
  feedbacks: FeedbackDetail[];
  openBottomSheet?: (
    feedbackID: number,
    isMine: boolean,
    isForMe: boolean,
    isPinned: boolean,
  ) => void;
  parentPage?: 'teamsoseo' | 'mypage';
};

function FeedbackCardList(props: FeedbackCardListProps) {
  const { feedbacks, openBottomSheet, parentPage = 'mypage' } = props;

  return (
    <>
      {feedbacks.map((feedback) => (
        <FeedbackCardItem
          key={feedback.id}
          {...feedback}
          openBottomSheet={openBottomSheet}
          parentPage={parentPage}
        />
      ))}
    </>
  );
}

export default FeedbackCardList;
