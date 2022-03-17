import { useNavigate } from 'react-router-dom';

import BottomSheet from '..';
import { icEdit } from '@assets/icons';

type ProfileEditBottomSheetProps = {
  isOpened: boolean;
  closeBottomSheet: () => void;
  userID: string;
};

function ProfileEditBottomSheet(props: ProfileEditBottomSheetProps) {
  const { isOpened, closeBottomSheet, userID } = props;
  const navigate = useNavigate();

  return (
    <BottomSheet
      buttonList={[
        {
          icon: icEdit,
          label: '수정하기',
          onClick: () => {
            navigate(`/edit/profile/${userID}`);
          },
        },
      ]}
      closeBottomSheet={closeBottomSheet}
      isOpened={isOpened}
    />
  );
}

export default ProfileEditBottomSheet;
