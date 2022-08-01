import { forwardRef, useState } from 'react';

import { resizeImage } from '@utils/image';
import { StDefaultChildren, StImageUpload, StThumbnail, StThumbnailWrapper } from './style';
import { getOrientation } from 'get-orientation';

interface ImageUploadProps {
  file: File | null | undefined;
  setFile: (image: File) => void;
  defaultThumbnail?: string;
  styles: React.CSSProperties;
  children: React.ReactElement | string;
  defaultChildren?: {
    src: string;
    styles: React.CSSProperties;
  };
  onClickInput: () => void;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  ref: React.ForwardedRef<HTMLInputElement>;
}

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>((props, ref) => {
  const {
    children: emptyImage,
    defaultChildren,
    styles,
    openBottomSheet,
    closeBottomSheet,
    onClickInput,
    file,
    setFile,
    defaultThumbnail = '',
  } = props;
  const [thumbnail, setThumbnail] = useState(defaultThumbnail);

  const clickImageUpload = () => {
    if (file instanceof File || (defaultThumbnail.length && file === undefined)) {
      openBottomSheet();
    } else {
      onClickInput();
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null && e.target.files.length > 0) {
      const file = e.target.files[0];
      const orientation = await getOrientation(file);
      console.log(orientation);
      const { imageBlob, resizedImageFile } = await resizeImage(file, 500);
      setFile(resizedImageFile);
      setThumbnail(URL.createObjectURL(imageBlob));
      closeBottomSheet();
    }
  };

  return (
    <StImageUpload onClick={clickImageUpload}>
      <input
        hidden={true}
        ref={ref}
        type="file"
        onChange={handleFileInput}
        accept="image/jpeg, image/png, image/gif"
      />
      <StThumbnailWrapper styles={styles}>
        {file === null || (!(file instanceof File) && defaultThumbnail === '') ? (
          emptyImage
        ) : (
          <StThumbnail src={file === undefined ? defaultThumbnail : thumbnail} styles={styles} />
        )}
      </StThumbnailWrapper>
      {defaultChildren && (
        <StDefaultChildren src={defaultChildren.src} styles={defaultChildren.styles} />
      )}
    </StImageUpload>
  );
});

export default ImageUpload;
