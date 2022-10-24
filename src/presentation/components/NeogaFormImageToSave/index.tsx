import React from 'react';

import NeogaFormTicket from '@components/NeogaFormTicket';
import { StLogo, StNeogaFormImageToSave } from './style';
import { NeososeoFormData } from '@api/types/neososeo-form';
import { imgCharacterLogo, imgEmptyProfileSmall } from '@assets/images';

interface NeogaFormImageToSaveProps {
  formData: NeososeoFormData;
}

export const NeogaFormImageToSave = React.forwardRef<HTMLDivElement, NeogaFormImageToSaveProps>(
  (props, ref) => {
    const { title, content, imageSub, userName, createdAt, userProfileImage } = props.formData;
    return (
      <StNeogaFormImageToSave ref={ref}>
        <div>
          <img src={userProfileImage?.length ? userProfileImage : imgEmptyProfileSmall} />
          <div>
            <div>{`${userName}님의 너가소개서`}</div>
            <div>{createdAt}</div>
          </div>
        </div>
        <NeogaFormTicket image={imageSub} title={title} content={content} isSmall>
          <StLogo src={imgCharacterLogo} />
        </NeogaFormTicket>
      </StNeogaFormImageToSave>
    );
  },
);
