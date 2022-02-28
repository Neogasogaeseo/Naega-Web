import {
  StTeamRegister,
  StTitle,
  StTeamRegisterWrapper,
  StTextarea,
  StSubmitButton,
  StAbsoluteWrapper,
  StIcPencil,
} from './style';
import { imgEmptyProfile, ImgTeamAdd } from '@assets/images';
import CommonInput from '@components/common/CommonInput';
import CommonLabel from '@components/common/CommonLabel';
import ProfileList from '@components/common/ProfileList';
import PhotoUpload from '@components/common/FileUpload';
import TeamMembers from '@components/TeamMembers';
import { selectedUserListState } from '@stores/team';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';
import { useState } from 'react';

function TeamRegister() {
  const [isVisibleMembers, setIsVisibleMembers] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const resetSelectedUserList = useResetRecoilState(selectedUserListState);

  const navigate = useNavigate();
  const selectedUserList = useRecoilValue(selectedUserListState);
  const { id, username, profileImage } = useLoginUser();

  const closeMembers = () => {
    setIsVisibleMembers(false);
  };

  const submitTeamInfo = async () => {
    const form = new FormData();
    form.append('teamName', name);
    image && form.append('image', image);
    description && form.append('description', description);
    selectedUserList.length &&
      form.append('userIdList', `[${selectedUserList.map((user) => user.id).join(', ')}]`);
    await api.teamService.postTeamInfo(form);
    resetTeamInfo();
  };

  const resetTeamInfo = () => {
    setImage(null);
    setName('');
    setDescription('');
    resetSelectedUserList();
  };

  return (
    <StTeamRegister isVisibleMembers={isVisibleMembers}>
      <TeamMembers onClickSubmitButton={closeMembers} />
      <StTeamRegisterWrapper>
        <StTitle>팀 등록하기</StTitle>
        <StAbsoluteWrapper>
          <PhotoUpload width="104px" height="104px" borderRadius="36px" setFile={setImage}>
            <ImgTeamAdd />
          </PhotoUpload>
          {!image && <StIcPencil />}
        </StAbsoluteWrapper>
        <CommonLabel content="팀 이름" marginTop="32px" marginBottom="18px" />
        <CommonInput
          value={name}
          width="100%"
          placeholder="팀 이름을 입력해주세요"
          onChange={(name) => setName(name)}
        />
        <CommonLabel content="팀에 관해 간략히 설명해주세요" marginTop="44px" />
        <StTextarea
          placeholder="설명을 입력해주세요"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
        <CommonLabel content="팀원을 추가해주세요" marginTop="44px" marginBottom="18px" />
        <ProfileList
          isSquare={false}
          profileList={[
            { id: id, profileName: username, profileImage: profileImage ?? imgEmptyProfile },
            ...selectedUserList,
          ]}
          onAddClick={() => setIsVisibleMembers(true)}
        />
        <StSubmitButton
          onClick={() => {
            submitTeamInfo();
            navigate('/home/team');
          }}
          isActive={name.length > 0}
        >
          완료
        </StSubmitButton>
      </StTeamRegisterWrapper>
    </StTeamRegister>
  );
}

export default TeamRegister;
