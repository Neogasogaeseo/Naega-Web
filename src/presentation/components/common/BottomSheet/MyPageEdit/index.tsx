import { useNavigate } from 'react-router-dom';

import BottomSheet from '..';
import { icEdit } from '@assets/icons';

type MyPageEditBottomSheetProps = {
  isOpened: boolean;
  closeBottomSheet: () => void;
  type: 'profile' | 'keyword';
  setIsDeletePage?: (value: boolean) => void;
};

function MyPageEditBottomSheet(props: MyPageEditBottomSheetProps) {
  const { isOpened, closeBottomSheet, type, setIsDeletePage } = props;
  const navigate = useNavigate();

  const editMyKeyword = () => {
    closeBottomSheet();
    setIsDeletePage && setIsDeletePage(true);
  };

  const navigateToEditPage = () => {
    navigate(`/mypage/edit`);
  };

  return (
    <BottomSheet
      buttonList={
        type === 'profile'
          ? [
              {
                icon: icEdit,
                label: '프로필 수정하기',
                onClick: navigateToEditPage,
              },
            ]
          : [
              {
                icon: icEdit,
                label: '수정하기',
                onClick: editMyKeyword,
              },
            ]
      }
      closeBottomSheet={closeBottomSheet}
      isOpened={isOpened}
    />
  );
}

export default MyPageEditBottomSheet;
