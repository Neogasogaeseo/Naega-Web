import React from 'react';
import { useParams } from 'react-router';
import { useQueryClient } from 'react-query';

import { api } from '@api/index';
import { icEdit, icPick, icTrash } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import BottomSheet from '..';

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
  if (!isMine && !isForMe) return <></>;

  const bookmarkFeedback = async () => {
    const response = await api.teamService.postFeedbackBookmark(id.toString());
    if (response.isSuccess) {
      if (isPinned) fireToast({ content: '픽한 답변 삭제 완료' });
      else fireToast({ content: 'MY에서 픽한 피드백을 확인할 수 있어요' });
      queryClient.invalidateQueries(['issueDetailData', `${teamID}-${issueID}`]);
      close();
    }
  };

  const removeFeedback = () => {
    openFeedbackDeleteModal();
  };

  const editFeedback = async () => {
    console.log('피드백 수정');
  };

  const removeIssue = async () => {
    openIssueDeleteModal();
  };

  const editIssue = async () => {
    console.log('이슈 수정');
  };

  const buttonList =
    mode === 'issue'
      ? [
          { icon: icEdit, label: '수정하기', onClick: editIssue },
          { icon: icTrash, label: '삭제하기', onClick: removeIssue },
        ]
      : isForMe
      ? [{ icon: icPick, label: isPinned ? '픽 취소하기' : '픽 하기', onClick: bookmarkFeedback }]
      : [
          { icon: icEdit, label: '수정하기', onClick: editFeedback },
          { icon: icTrash, label: '삭제하기', onClick: removeFeedback },
        ];

  return <BottomSheet buttonList={buttonList} closeBottomSheet={close} isOpened={opened} />;
}

export default TeamsoseoPickerBottomSheet;
