import React, { useEffect, useRef, useState } from 'react';
import { StImgPreview, StPhotoUpload, StUploadBtn } from './style';

interface PhotoUploadProps {
  children: React.ReactElement | string;
  width: string;
  height: string;
  setFile: (e: File) => void;
}

function PhotoUpload(props: PhotoUploadProps): React.ReactElement {
  const { children, width, height, setFile } = props;
  const [newFile, setNewFile] = useState<File | null>(null);
  const [fileThumbnail, setFileThumbnail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };
  useEffect(() => {
    newFile && setFile(newFile);
  }, [newFile, setFile]);

  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const imgFileForm = /(.*?)\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|bmp|BMP)$/;
      // 이미지파일
      if (file?.name?.match(imgFileForm)) {
        //파일 확장자 체크
        setNewFile(file);
        setFileThumbnail(URL.createObjectURL(file));
      } else {
        alert('이미지 파일을 첨부해주세요');
      }
    }
  };

  return (
    <StPhotoUpload>
      <input
        hidden={true}
        ref={inputRef}
        type="file"
        onChange={fileInputHandler}
        accept="imgFileForm"
      />
      <StUploadBtn onClick={buttonHandler} width={width} height={height}>
        {!newFile ? ( //파일이 없는 경우
          children
        ) : (
          //업로드된 파일이 사진일 경우
          <StImgPreview src={fileThumbnail} width={width} height={height} />
        )}
      </StUploadBtn>
    </StPhotoUpload>
  );
}

export default PhotoUpload;
