import { api } from '@api/index';
import { useNavigate } from 'react-router';
import CommonModal from '..';

type DeleteIssueModalProps = {
  isOpened: boolean;
  closeModal(): void;
  issueID: number;
};

function DeleteIssueModal(props: DeleteIssueModalProps) {
  const { closeModal, issueID, isOpened } = props;
  const navigate = useNavigate();
  const deleteIssue = async () => {
    const response = await api.teamService.deleteIssue(issueID);
    if (response.isSuccess) {
      navigate(-1);
    }
  };
  return (
    <CommonModal
      title="이슈를 삭제하시겠습니까?"
      onClickCancel={closeModal}
      onClickConfirm={deleteIssue}
      isOpened={isOpened}
      isCoral={false}
    />
  );
}

export default DeleteIssueModal;
