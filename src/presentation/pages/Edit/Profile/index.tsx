import { useState } from 'react';

import { useLoginUser } from '@hooks/useLoginUser';
import CommonInput from '@components/common/Input';
import CommonLabel from '@components/common/Label';
import CommonNavigation from '@components/common/Navigation';
import FileUpload from '@components/common/FileUpload';
import { StInputWrapper, StMyProfileEdit, StProfileImg } from './style';
import { IcMypageEdit } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';

function MyProfileEdit() {
  const [image, setImage] = useState<File | null>(null);
  const { username, userID, profileImage } = useLoginUser();

  return (
    <>
      <CommonNavigation title="프로필 수정" />
      <StMyProfileEdit>
        <StProfileImg>
          <FileUpload width="118px" height="118px" setFile={setImage} borderRadius="50%">
            <>
              <img src={profileImage || imgEmptyProfile} />
              <IcMypageEdit
                onClick={() => {
                  console.log(image);
                }}
              />
            </>
          </FileUpload>
        </StProfileImg>
        <StInputWrapper>
          <CommonLabel content="아이디" marginTop="52px" marginBottom="20px" />
          <CommonInput width="100%" placeholder={userID} maxLength={15} />
          <CommonLabel content="이름" marginTop="46px" marginBottom="20px" />
          <CommonInput width="100%" placeholder={username} />
        </StInputWrapper>
        <button disabled={true}>완료</button>
      </StMyProfileEdit>
    </>
  );
}

export default MyProfileEdit;
