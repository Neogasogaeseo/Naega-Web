import { forwardRef, useState } from 'react';
import { getOrientation } from 'get-orientation';

import { resizeImage } from '@utils/image';
import { StDefaultChildren, StImageUpload, StThumbnail, StThumbnailWrapper } from './style';

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

  const applyRotation = (file: File, orientation: number, maxWidth: number) =>
    new Promise<string>((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        const url = reader.result as string;
        const image = new Image();

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          let { width, height } = image;
          const [outputWidth, outputHeight] =
            orientation >= 5 && orientation <= 8 ? [height, width] : [width, height];
          const scale = outputWidth > maxWidth ? maxWidth / outputWidth : 1;
          width = width * scale;
          height = height * scale;
          canvas.width = outputWidth * scale;
          canvas.height = outputHeight * scale;

          switch (orientation) {
            case 2:
              context?.transform(-1, 0, 0, 1, width, 0);
              break;
            case 3:
              context?.transform(-1, 0, 0, -1, width, height);
              break;
            case 4:
              context?.transform(1, 0, 0, -1, 0, height);
              break;
            case 5:
              context?.transform(0, 1, 1, 0, 0, 0);
              break;
            case 6:
              context?.transform(0, 1, -1, 0, height, 0);
              break;
            case 7:
              context?.transform(0, -1, -1, 0, height, width);
              break;
            case 8:
              context?.transform(0, -1, 1, 0, 0, width);
              break;
            default:
              break;
          }

          context?.drawImage(image, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg'));
        };

        image.src = url;
      };

      reader.readAsDataURL(file);
    }).then(async (data) => {
      const byteString = atob(data.split(',')[1]);
      const mimeString = data.split(',')[0].split(':')[1].split(';')[0];
      let n = byteString.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = byteString.charCodeAt(n);
      }

      const tempFile = new File([u8arr], file.name, { type: mimeString });

      const { resizedImageFile } = await resizeImage(tempFile, 500);
      setFile(resizedImageFile);
      setThumbnail(data);
      return data;
    });

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null && e.target.files.length > 0) {
      const file = e.target.files[0];
      const orientation = await getOrientation(file);
      applyRotation(file, orientation, 500);
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
