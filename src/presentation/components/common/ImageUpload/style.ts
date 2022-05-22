import styled from 'styled-components';

export const StThumbnail = styled.img<{
  width: string;
  height: string;
  borderRadius: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
`;

export const StUploadButton = styled.button<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
`;

export const StImageUpload = styled.div`
  cursor: pointer;
`;
