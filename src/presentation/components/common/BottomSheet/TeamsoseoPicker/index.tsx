import React from 'react';
import { api } from '@api/index';
import { icEdit, icPick, icTrash } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import BottomSheet from '..';

type TeamsoseoPickerBottomSheetProps = {
  opened: boolean;
  close: () => void;
  isMine: boolean;
  isForMe: boolean;
  isPinned: boolean;
  feedbackID: number;
};

function TeamsoseoPickerBottomSheet(props: TeamsoseoPickerBottomSheetProps) {
  const { opened, close, isPinned, isMine, isForMe, feedbackID } = props;
  const { fireToast } = useToast();
  if (!isMine && !isForMe) return <></>;

  const bookmarkAnswer = async () => {
    const response = await api.teamService.postFeedbackBookmark(feedbackID.toString());
    if (response.isSuccess) {
      if (isPinned) fireToast({ content: '픽한 답변 삭제 완료' });
      else fireToast({ content: 'MY에서 픽한 피드백을 확인할 수 있어요' });
      close();
    }
  };

  const removeAnswer = async () => {
    console.log('삭제');
  };

  const editAnswer = async () => {
    console.log('수정');
  };

  const buttonList = isForMe
    ? [{ icon: icPick, label: isPinned ? '픽 취소하기' : '픽 하기', onClick: bookmarkAnswer }]
    : [
        { icon: icEdit, label: '수정하기', onClick: editAnswer },
        { icon: icTrash, label: '삭제하기', onClick: removeAnswer },
      ];

  return <BottomSheet buttonList={buttonList} closeBottomSheet={close} isOpened={opened} />;
}

export default TeamsoseoPickerBottomSheet;
