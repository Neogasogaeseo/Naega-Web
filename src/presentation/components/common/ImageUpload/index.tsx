import { forwardRef, useState } from 'react';

import { checkBrowser } from '@utils/browser';
import { resizeImage } from '@utils/image';
import { StImageUpload, StThumbnail, StUploadButton } from './style';

interface ImageUploadProps {
  image: File | string | null;
  style: {
    width: string;
    height: string;
    borderRadius?: string;
  };
  children: React.ReactElement | string;
  onClickInput: () => void;
  setImage: (image: File) => void;
  openBottomSheet: () => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
}
const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>((props, ref) => {
  const { children: emptyImage, style, openBottomSheet, onClickInput, image, setImage } = props;
  const { width, height, borderRadius = '0px' } = style;
  const [imageThumbnail, setImageThumbnail] = useState('');

  const clickImageUpload = () => {
    if (image) {
      openBottomSheet();
    } else {
      onClickInput();
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (checkBrowser('Internet Explorer')) {
        setImage(file);
        setImageThumbnail(URL.createObjectURL(file));
      } else {
        const { imageBlob, resizedImageFile } = await resizeImage(file, 500);
        setImage(resizedImageFile);
        setImageThumbnail(URL.createObjectURL(imageBlob));
      }
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
      <StUploadButton width={width} height={height}>
        {image ? (
          <StThumbnail
            src={typeof image === 'string' ? image : imageThumbnail}
            width={width}
            height={height}
            borderRadius={borderRadius}
          />
        ) : (
          emptyImage
        )}
      </StUploadButton>
    </StImageUpload>
  );
});

export default ImageUpload;
