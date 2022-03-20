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
import { useEffect } from 'react';
import CommonNavigation from '@components/common/CommonNavigation';

function TeamRegister() {
  const [isMemberSelectMode, setIsMemberSelectMode] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const resetSelectedUserList = useResetRecoilState(selectedUserListState);

  const navigate = useNavigate();
  const selectedUserList = useRecoilValue(selectedUserListState);
  const { id, username, profileImage } = useLoginUser();

  const closeMembers = () => {
    setIsMemberSelectMode(false);
  };

  const submitTeamInfo = async () => {
    const form = new FormData();
    form.append('teamName', name);
    image && form.append('image', image);
    description && form.append('description', description);
    selectedUserList.length &&
      form.append('userIdList', `[${selectedUserList.map((user) => user.id).join(', ')}]`);
    await api.teamService.postTeamInfo(form);
  };

  useEffect(() => {
    return resetSelectedUserList();
  }, []);

  return (
    <StTeamRegister>
      {isMemberSelectMode && <TeamMembers onClickSubmitButton={closeMembers} />}
      <>
        <CommonNavigation />
        <StTeamRegisterWrapper>
          <StTitle>팀 등록하기</StTitle>
          <StAbsoluteWrapper>
            <PhotoUpload width="88px" height="88px" borderRadius="36px" setFile={setImage}>
              <ImgTeamAdd />
            </PhotoUpload>
            <StIcPencil />
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
            onAddClick={() => setIsMemberSelectMode(true)}
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
      </>
    </StTeamRegister>
  );
}

export default TeamRegister;
