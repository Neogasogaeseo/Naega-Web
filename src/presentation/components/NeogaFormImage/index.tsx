import React from 'react';

import NeogaFormTicket from '@components/NeogaFormTicket';
import { StLogo, StNeogaFormImage } from './style';
import { NeososeoFormData } from '@api/types/neososeo-form';
import { imgCharacterLogo } from '@assets/images';

interface NeogaFormImageProps {
  formData: NeososeoFormData;
}

export const NeogaFormImage = React.forwardRef<HTMLDivElement, NeogaFormImageProps>(
  (props, ref) => {
    const { title, content, imageSub, userName, createdAt, userProfileImage } = props.formData;
    return (
      <StNeogaFormImage ref={ref}>
        <div>
          <img src={userProfileImage} />
          <div>
            <div>{`${userName}님의 너가소개서`}</div>
            <div>{createdAt}</div>
          </div>
        </div>
        <NeogaFormTicket image={imageSub} title={title} content={content}>
          <StLogo src={imgCharacterLogo} />
        </NeogaFormTicket>
      </StNeogaFormImage>
    );
  },
);
