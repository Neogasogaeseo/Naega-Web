import { useQueryClient } from 'react-query';

import { api } from '@api/index';
import { icPick, icTrash } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { usePickNeososeoAnswer } from '@queries/user';
import BottomSheet from '..';

type NeososeoPickerBottomSheetProps = {
  opened: boolean;
  close: () => void;
  isPinned: boolean;
  id: number;
  formID: number;
};

function NeososeoPickerBottomSheet(props: NeososeoPickerBottomSheetProps) {
  const { opened, close, isPinned, id, formID } = props;
  const { fireToast } = useToast();
  const queryClient = useQueryClient();
  const { mutate: pickAnswer } = usePickNeososeoAnswer(id, {
    onSuccess: () => {
      fireToast({
        content: isPinned ? '답변의 픽이 취소되었습니다' : 'MY에서 픽한 답변을 확인할 수 있어요',
      });
      queryClient.invalidateQueries(['nssFeedbacksDetail', formID]);
      close();
    },
  });

  const removeAnswer = async () => {
    const response = await api.neogaService.deleteAnswer(id);
    if (response.isSuccess) {
      fireToast({ content: '삭제 완료' });
      queryClient.invalidateQueries(['nssFeedbacksDetail', formID]);
      close();
    }
  };

  return (
    <BottomSheet
      buttonList={[
        { icon: icPick, label: isPinned ? '픽 취소하기' : '픽 하기', onClick: pickAnswer },
        { icon: icTrash, label: '삭제하기', onClick: removeAnswer },
      ]}
      closeBottomSheet={close}
      isOpened={opened}
    />
  );
}

export default NeososeoPickerBottomSheet;
