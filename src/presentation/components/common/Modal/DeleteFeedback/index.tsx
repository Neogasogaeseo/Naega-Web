import { api } from '@api/index';
import CommonModal from '..';

type DeleteFeedbackModalProps = {
  isOpened: boolean;
  closeModal(): void;
  closeBottomSheet(): void;
  feedbackID: number;
};

function DeleteFeedbackModal(props: DeleteFeedbackModalProps) {
  const { closeModal, closeBottomSheet, feedbackID, isOpened } = props;
  const deleteFeedback = async () => {
    const response = await api.teamService.deleteFeedback(feedbackID);
    if (response.isSuccess) {
      closeModal();
      closeBottomSheet();
    }
  };
  return (
    <CommonModal
      title="피드백을 삭제하시겠습니까?"
      onClickCancel={closeModal}
      onClickConfirm={deleteFeedback}
      isOpened={isOpened}
    />
  );
}

export default DeleteFeedbackModal;
