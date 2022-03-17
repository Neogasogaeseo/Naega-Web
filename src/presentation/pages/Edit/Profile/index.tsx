import { useState } from 'react';

import CommonInput from '@components/common/CommonInput';
import CommonLabel from '@components/common/CommonLabel';
import CommonNavigation from '@components/common/CommonNavigation';
import FileUpload from '@components/common/FileUpload';
import { StMyProfileEdit, StProfileImg } from './style';
import { icEmail, IcMypageEdit } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';

function MyProfileEdit() {
  const [image, setImage] = useState<File | null>(null);

  return (
    <>
      <CommonNavigation title="프로필 수정" />
      <StMyProfileEdit>
        <StProfileImg>
          <FileUpload width="118px" height="118px" setFile={setImage} borderRadius="50%">
            <>
              <img src={imgEmptyProfile} />
              <IcMypageEdit
                onClick={() => {
                  console.log(image);
                }}
              />
            </>
          </FileUpload>
        </StProfileImg>
        <CommonLabel content="아이디" marginTop="52px" marginBottom="20px" />
        <CommonInput width="100%" placeholder="neososeo_team" maxLength={15} img={icEmail} />
        <CommonLabel content="이름" marginTop="46px" marginBottom="20px" />
        <CommonInput width="100%" placeholder="이름을 입력해주세요" />
        <button>완료</button>
      </StMyProfileEdit>
    </>
  );
}

export default MyProfileEdit;
