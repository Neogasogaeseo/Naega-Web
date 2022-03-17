import { useNavigate } from 'react-router-dom';

import BottomSheet from '..';
import { icEdit } from '@assets/icons';

type MyPageEditBottomSheetProps = {
  isOpened: boolean;
  closeBottomSheet: () => void;
  type: string;
  userID?: string;
};

function MyPageEditBottomSheet(props: MyPageEditBottomSheetProps) {
  const { isOpened, closeBottomSheet, type, userID } = props;
  const navigate = useNavigate();

  const navigateToEditPage = () => {
    type === 'profile'
      ? navigate(`/edit/${type}/${userID}`)
      : navigate(`/edit/delete/${type}/${userID}`);
  };

  return (
    <BottomSheet
      buttonList={[
        {
          icon: icEdit,
          label: '수정하기',
          onClick: navigateToEditPage,
        },
      ]}
      closeBottomSheet={closeBottomSheet}
      isOpened={isOpened}
    />
  );
}

export default MyPageEditBottomSheet;
