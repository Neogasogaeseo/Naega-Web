import { api } from '@api/index';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router';
import CommonModal from '..';

type DeleteFeedbackModalProps = {
  isOpened: boolean;
  closeModal(): void;
  closeBottomSheet(): void;
  feedbackID: number;
};

function DeleteFeedbackModal(props: DeleteFeedbackModalProps) {
  const { closeModal, closeBottomSheet, feedbackID, isOpened } = props;
  const { teamID, issueID } = useParams();
  const queryClient = useQueryClient();
  const deleteFeedback = async () => {
    const response = await api.teamService.deleteFeedback(feedbackID);
    return response.isSuccess;
  };
  const { mutate: mutateDeleteFeedback } = useMutation(deleteFeedback, {
    onSuccess: () => {
      closeModal();
      closeBottomSheet();
      return queryClient.invalidateQueries(['issueDetailData', `${teamID}-${issueID}`]);
    },
  });
  return (
    <CommonModal
      title="피드백을 삭제하시겠습니까?"
      onClickCancel={closeModal}
      onClickConfirm={mutateDeleteFeedback}
      isOpened={isOpened}
      isCoral={false}
    />
  );
}

export default DeleteFeedbackModal;
