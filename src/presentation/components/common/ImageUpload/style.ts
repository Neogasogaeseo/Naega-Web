import styled from 'styled-components';

export const StThumbnail = styled.img<{
  width: string;
  height: string;
  borderRadius: string;
}>`
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
`;

export const StImageUpload = styled.div`
  cursor: pointer;
  position: relative;
`;

export const StThumbnailWrapper = styled.div<{
  width: string;
  height: string;
  borderRadius: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
`;

export const StDefaultChildren = styled.img<{
  bottom?: string;
  right?: string;
  width: string;
  height?: string;
}>`
  position: absolute;
  bottom: ${(props) => props.bottom ?? 0};
  right: ${(props) => props.right ?? 0};
  width: ${(props) => props.width};
  height: ${(props) => props.height ?? props.width};
`;
