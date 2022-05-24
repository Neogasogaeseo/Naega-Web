import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { api } from '@api/index';
import { useToast } from '@hooks/useToast';
import { useLoginUser } from '@hooks/useLoginUser';
import BottomSheet from '..';
import { icEdit, icTrash } from '@assets/icons';

type MyPageEditBottomSheetProps = {
  isOpened: boolean;
  closeBottomSheet: () => void;
  type: 'profile' | 'keyword';
  setIsDeletePage?: (value: boolean) => void;
};

function MyPageEditBottomSheet(props: MyPageEditBottomSheetProps) {
  const { isOpened, closeBottomSheet, type, setIsDeletePage } = props;
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const { userID: profileId, username: name } = useLoginUser();
  const queryClient = useQueryClient();

  const editMyKeyword = () => {
    closeBottomSheet();
    setIsDeletePage && setIsDeletePage(true);
  };

  const navigateToEditPage = () => {
    navigate(`/edit/profile/${profileId}`);
  };

  const deleteProfileImage = async () => {
    try {
      const form = new FormData();
      form.append('profileId', profileId);
      form.append('name', name);
      form.append('image', '');
      const response = await api.userService.editUserProfile(form);
      if (response.isSuccess) {
        queryClient.invalidateQueries('userInfo');
        closeBottomSheet();
        fireToast({ content: '프로필 이미지 삭제 완료' });
      }
    } catch (error) {
      console.error(error);
      navigate('/');
    }
  };

  return (
    <BottomSheet
      buttonList={
        type === 'profile'
          ? [
              {
                icon: icEdit,
                label: '수정하기',
                onClick: navigateToEditPage,
              },
              {
                icon: icTrash,
                label: '기본 이미지로 변경',
                onClick: deleteProfileImage,
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
