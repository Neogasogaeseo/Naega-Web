import { useParams } from 'react-router';
import { useQueryClient } from 'react-query';

import { icEdit, icPick, icTrash } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import BottomSheet from '..';
import { useNavigate } from 'react-router-dom';
import { usePickTeamFeedback } from '@queries/team';

type TeamsoseoPickerBottomSheetProps = {
  opened: boolean;
  close: () => void;
  openFeedbackDeleteModal: () => void;
  openIssueDeleteModal: () => void;
  isMine: boolean;
  isForMe: boolean;
  isPinned: boolean;
  id: number;
  mode: 'issue' | 'feedback';
};

function TeamsoseoPickerBottomSheet(props: TeamsoseoPickerBottomSheetProps) {
  const {
    opened,
    close,
    openFeedbackDeleteModal,
    openIssueDeleteModal,
    isMine,
    isForMe,
    id,
    isPinned,
    mode,
  } = props;
  const { teamID, issueID } = useParams();
  const { fireToast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (!isMine && !isForMe) return <></>;

  const { mutate: pickFeedback } = usePickTeamFeedback(id, {
    onSuccess: () => {
      fireToast({
        content: isPinned
          ? '피드백의 픽이 취소되었습니다'
          : 'MY에서 픽한 피드백을 확인할 수 있어요',
      });
      queryClient.invalidateQueries(['issueDetailData', `${teamID}-${issueID}`]);
      close();
    },
  });

  const removeFeedback = () => {
    openFeedbackDeleteModal();
  };

  const editFeedback = async () => {
    navigate(`/team/${teamID}/${issueID}/feedback/edit`);
  };

  const removeIssue = async () => {
    openIssueDeleteModal();
  };

  const editIssue = async () => {
    navigate(`/team/${teamID}/${issueID}/edit`);
  };

  const buttonList =
    mode === 'issue'
      ? [
          { icon: icEdit, label: '수정하기', onClick: editIssue },
          { icon: icTrash, label: '삭제하기', onClick: removeIssue },
        ]
      : isForMe
      ? [
          {
            icon: icPick,
            label: isPinned ? '픽 취소하기' : '픽 하기',
            onClick: () => pickFeedback(),
          },
        ]
      : [
          { icon: icEdit, label: '수정하기', onClick: editFeedback },
          { icon: icTrash, label: '삭제하기', onClick: removeFeedback },
        ];

  return <BottomSheet buttonList={buttonList} closeBottomSheet={close} isOpened={opened} />;
}

export default TeamsoseoPickerBottomSheet;
