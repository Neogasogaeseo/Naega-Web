import styled from 'styled-components';

export const StImgPreview = styled.img<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  border-radius: 16px;
`;

export const StUploadBtn = styled.button<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
`;

export const StPhotoUpload = styled.div`
  cursor: pointer;
`;
