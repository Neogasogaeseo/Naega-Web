import {
  StTitle,
  StTeamRegister,
  StTextarea,
  StSubmitButton,
  StAbsoluteWrapper,
  StIcPencil,
} from './style';
import { ImgTeamAdd } from '@assets/images';
import CommonInput from '@components/common/CommonInput';
import CommonLabel from '@components/common/CommonLabel';
import ProfileList from '@components/ProfileList';
import { useState } from 'react';
import PhotoUpload from '@components/common/FileUpload';
import { selectedMemberListState } from '@stores/team';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

function TeamRegister() {
  const [image, setImage] = useState<File | null>();
  console.log(image);
  const navigate = useNavigate();
  const selectedMemberList = useRecoilValue(selectedMemberListState);
  return (
    <StTeamRegister>
      <StTitle>팀 등록하기</StTitle>
      <StAbsoluteWrapper>
        <PhotoUpload width="104px" height="104px" borderRadius="36px" setFile={setImage}>
          <ImgTeamAdd />
        </PhotoUpload>
        {!image && <StIcPencil />}
      </StAbsoluteWrapper>
      <CommonLabel content="팀명을 입력해주세요" marginTop="32px" marginBottom="18px" />
      <CommonInput width="100%" placeholder="직접 입력해주세요" />
      <CommonLabel content="팀에 관해 간략한 설명해주세요" marginTop="44px" />
      <StTextarea placeholder="직접 입력해주세요" />
      <CommonLabel content="팀원을 추가해주세요" marginTop="44px" marginBottom="18px" />
      <ProfileList
        isSquare={false}
        profileListData={selectedMemberList}
        onAddClick={() => navigate('/team/register/members')}
      />
      <StSubmitButton>완료</StSubmitButton>
    </StTeamRegister>
  );
}

export default TeamRegister;
