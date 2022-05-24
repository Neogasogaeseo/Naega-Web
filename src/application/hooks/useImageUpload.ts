import { icEdit, icTrash } from '@assets/icons';
import { useRef, useState } from 'react';

export default function useImageUpload() {
  const [image, setImage] = useState<File | null | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bottomSheetOpened, setBottomSheetOpened] = useState(false);

  const clickFileInputRef = () => fileInputRef.current && fileInputRef.current.click();

  const removeImage = () => {
    setImage(null);
    setBottomSheetOpened(false);
  };

  const openBottomSheet = () => setBottomSheetOpened(true);
  const closeBottomSheet = () => setBottomSheetOpened(false);
  const bottomSheetButtonList = [
    {
      icon: icEdit,
      label: '이미지 수정하기',
      onClick: clickFileInputRef,
    },
    { icon: icTrash, label: '이미지 삭제하기', onClick: removeImage },
  ];

  const imageUploadProps = {
    ref: fileInputRef,
    openBottomSheet: openBottomSheet,
    closeBottomSheet: closeBottomSheet,
    onClickInput: clickFileInputRef,
    file: image,
    setFile: setImage,
  };

  return {
    image,
    bottomSheetOpened,
    imageUploadProps,
    closeBottomSheet,
    bottomSheetButtonList,
  };
}
