import {
  StTitle,
  StTeamRegister,
  StTextarea,
  StSubmitButton,
  StAbsoluteWrapper,
  StIcPencil,
} from './style';
import { imgEmptyProfile, ImgTeamAdd } from '@assets/images';
import CommonInput from '@components/common/CommonInput';
import CommonLabel from '@components/common/CommonLabel';
import ProfileList from '@components/ProfileList';
import PhotoUpload from '@components/common/FileUpload';
import {
  selectedUserListState,
  teamDescriptionState,
  teamImageState,
  teamNameState,
} from '@stores/team';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';

function TeamRegister() {
  const [image, setImage] = useRecoilState(teamImageState);
  const [teamName, setTeamName] = useRecoilState(teamNameState);
  const [description, setDescription] = useRecoilState(teamDescriptionState);
  const resetImage = useResetRecoilState(teamImageState);
  const resetName = useResetRecoilState(teamNameState);
  const resetDescription = useResetRecoilState(teamDescriptionState);
  const navigate = useNavigate();
  const selectedUserList = useRecoilValue(selectedUserListState);
  const { id, username, profileImage } = useLoginUser();

  const submitTeamInfo = async () => {
    const form = new FormData();
    form.append('teamName', teamName);
    image && form.append('image', image);
    description && form.append('description', description);
    selectedUserList.length &&
      form.append('userIdList', `[${selectedUserList.map((user) => user.id).join(', ')}]`);
    await api.teamService.postTeamInfo(form);
    resetTeamInfo();
  };

  const resetTeamInfo = () => {
    resetImage();
    resetName();
    resetDescription();
  };

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
      <CommonInput
        value={teamName}
        onChange={(value) => setTeamName(value)}
        width="100%"
        placeholder="직접 입력해주세요"
      />
      <CommonLabel content="팀에 관해 간략한 설명해주세요" marginTop="44px" />
      <StTextarea
        placeholder="직접 입력해주세요"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
      />
      <CommonLabel content="팀원을 추가해주세요" marginTop="44px" marginBottom="18px" />
      <ProfileList
        isSquare={false}
        profileListData={[
          { id: id, profileName: username, profileImage: profileImage ?? imgEmptyProfile },
          ...selectedUserList,
        ]}
        onAddClick={() => navigate('/team/register/members')}
      />
      <StSubmitButton onClick={submitTeamInfo}>완료</StSubmitButton>
    </StTeamRegister>
  );
}

export default TeamRegister;
