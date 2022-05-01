import { api } from '@api/index';
import React from 'react';
import CommonModal from '..';

type DeleteFeedbackModalProps = {
  isOpened: boolean;
  closeModal(): void;
  feedbackID: number;
};

function DeleteFeedbackModal(props: DeleteFeedbackModalProps) {
  const { closeModal, feedbackID, isOpened } = props;
  const deleteFeedback = () => {
    api.teamService.deleteFeedback(feedbackID);
    closeModal();
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
