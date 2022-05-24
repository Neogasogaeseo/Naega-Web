import React from 'react';
import { api } from '@api/index';
import { icPick, icTrash } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import BottomSheet from '..';

type NeososeoPickerBottomSheetProps = {
  opened: boolean;
  close: () => void;
  isPinned: boolean;
  id: number;
};

function NeososeoPickerBottomSheet(props: NeososeoPickerBottomSheetProps) {
  const { opened, close, isPinned, id } = props;
  const { fireToast } = useToast();

  const bookmarkAnswer = async () => {
    const response = await api.neogaService.postAnswerBookmark(id);
    if (response.isSuccess) {
      if (isPinned) fireToast({ content: '답변의 픽이 취소되었습니다' });
      else fireToast({ content: 'MY에서 픽한 답변을 확인할 수 있어요' });
      close();
    }
  };

  const removeAnswer = async () => {
    const response = await api.neogaService.deleteAnswer(id);
    if (response.isSuccess) {
      fireToast({ content: '삭제 완료' });
      close();
    }
  };

  return (
    <BottomSheet
      buttonList={[
        { icon: icPick, label: isPinned ? '픽 취소하기' : '픽 하기', onClick: bookmarkAnswer },
        { icon: icTrash, label: '삭제하기', onClick: removeAnswer },
      ]}
      closeBottomSheet={close}
      isOpened={opened}
    />
  );
}

export default NeososeoPickerBottomSheet;
