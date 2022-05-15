import { useRef, useState } from 'react';

export default function useImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bottomSheetOpened, setBottomSheetOpened] = useState(false);
  const [isImageDeleted, setIsImageDeleted] = useState(false);

  const clickFileInputRef = () => fileInputRef.current && fileInputRef.current.click();

  const removeImage = () => {
    setIsImageDeleted(true);
    setImage(null);
    setBottomSheetOpened(false);
  };

  const openBottomSheet = () => setBottomSheetOpened(true);
  const closeBottomSheet = () => setBottomSheetOpened(false);

  const cancelDelete = () => {
    setBottomSheetOpened(false);
    setIsImageDeleted(false);
  };

  return {
    image,
    setImage,
    fileInputRef,
    bottomSheetOpened,
    isImageDeleted,
    clickFileInputRef,
    removeImage,
    openBottomSheet,
    closeBottomSheet,
    cancelDelete,
  };
}
