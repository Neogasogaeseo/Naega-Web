import { useToast } from '@hooks/useToast';
import { checkBrowser } from '@utils/browser';
import { resizeImage } from '@utils/image';
import React, { useEffect, useRef, useState } from 'react';
import { StImgPreview, StFileUpload, StUploadBtn } from './style';

interface FileUploadProps {
  children: React.ReactElement | string;
  width: string;
  height: string;
  borderRadius?: string;
  setFile: (e: File) => void;
}

function FileUpload(props: FileUploadProps): React.ReactElement {
  const { children, width, height, borderRadius = '0px', setFile } = props;
  const imgFileForm = /(.*?)\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/;
  const [newFile, setNewFile] = useState<File | null>(null);
  const [fileThumbnail, setFileThumbnail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { fireToast } = useToast();

  const buttonHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    newFile && setFile(newFile);
  }, [newFile]);

  const fileInputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (!file) return fireToast({ content: '이미지 파일을 첨부해주세요' });
      if (file.name.match(imgFileForm)) {
        if (checkBrowser('Internet Explorer')) {
          setNewFile(file);
          setFileThumbnail(URL.createObjectURL(file));
        } else {
          const { imageBlob, resizedImageFile } = await resizeImage(file, 500);
          setNewFile(resizedImageFile);
          setFileThumbnail(URL.createObjectURL(imageBlob));
        }
      } else {
        fireToast({ content: '이미지 파일을 첨부해주세요' });
      }
    }
  };

  return (
    <StFileUpload>
      <input
        hidden={true}
        ref={inputRef}
        type="file"
        onChange={fileInputHandler}
        accept="image/jpeg, image/png, image/gif"
      />
      <StUploadBtn onClick={buttonHandler} width={width} height={height}>
        {!newFile ? ( //파일이 없는 경우
          children
        ) : (
          //업로드된 파일이 사진일 경우
          <StImgPreview
            src={fileThumbnail}
            width={width}
            height={height}
            borderRadius={borderRadius}
          />
        )}
      </StUploadBtn>
    </StFileUpload>
  );
}

export default FileUpload;
