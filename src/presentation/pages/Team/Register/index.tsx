import TeamRegisterTitle from '@components/TeamRegisterTitle';
import { StTeamRegister, StImgTeamAdd, StTextarea, StSubmitButton } from './style';
import { imgTeamAdd } from '@assets/images';
import CommonInput from '@components/common/CommonInput';
import CommonLabel from '@components/common/CommonLabel';
import ProfileList, { ProfileListData } from '@components/ProfileList';
import { useState } from 'react';
import PhotoUpload from '@components/common/FileUpload';

function TeamRegister() {
  const [image, setImage] = useState<File | null>();
  const tempMemberList: ProfileListData[] = [
    {
      id: 0,
      profileImage:
        'https://user-images.githubusercontent.com/73823388/148749098-3e775179-8814-4237-948a-35c1702a2ae7.png',
      profileName: 'finn',
    },
  ];
  const tempAddMember = () => console.log(image);
  return (
    <StTeamRegister>
      <TeamRegisterTitle title="팀 등록하기" />
      <PhotoUpload width="104px" height="104px" setFile={setImage}>
        <StImgTeamAdd src={imgTeamAdd} />
      </PhotoUpload>
      <CommonLabel content="팀명을 입력해주세요" marginTop="32px" marginBottom="18px" />
      <CommonInput width="100%" placeholder="직접 입력해주세요" />
      <CommonLabel content="팀에 관해 간략한 설명해주세요" marginTop="44px" />
      <StTextarea placeholder="직접 입력해주세요" />
      <CommonLabel content="팀원을 추가해주세요" marginTop="44px" marginBottom="18px" />
      <ProfileList isSquare={false} profileListData={tempMemberList} onAddClick={tempAddMember} />
      <StSubmitButton>완료</StSubmitButton>
    </StTeamRegister>
  );
}

export default TeamRegister;
