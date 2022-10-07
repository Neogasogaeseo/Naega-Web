import { FeedbackDetail, FeedbackEditInfo } from '@api/types/team';
import { MyDetail } from '@api/types/user';
import FeedbackCardItem from '../Item';

type FeedbackCardListProps = {
  feedbacks: FeedbackDetail[];
  openBottomSheet?: (
    feedbackID: number,
    feedback: FeedbackEditInfo,
    isMine: boolean,
    isForMe: boolean,
    isPinned: boolean,
  ) => void;
  parentPage?: 'teamsoseo' | 'mypage' | 'myteamsoseo';
  selectedTeam?: MyDetail | null;
};

function FeedbackCardList(props: FeedbackCardListProps) {
  const { feedbacks, openBottomSheet, parentPage = 'mypage', selectedTeam } = props;

  return (
    <>
      {feedbacks.map((feedback) => (
        <FeedbackCardItem
          key={feedback.id}
          {...feedback}
          openBottomSheet={openBottomSheet}
          parentPage={parentPage}
          selectedTeam={selectedTeam}
        />
      ))}
    </>
  );
}

export default FeedbackCardList;
