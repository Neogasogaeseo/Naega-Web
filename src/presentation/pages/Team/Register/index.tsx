import { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { StWrapper, StTitle, StTextarea, StSubmitButton, StTeamRegister } from './style';
import { imgEmptyProfile, ImgTeamDefault } from '@assets/images';
import CommonInput from '@components/common/Input';
import CommonLabel from '@components/common/Label';
import ProfileList from '@components/common/ProfileList';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';
import CommonNavigation from '@components/common/Navigation';
import { selectedUserListState } from '@stores/team';
import TeamMemberAddForRegister from '@components/TeamMemberAdd/ForRegister';
import { useMutation, useQueryClient } from 'react-query';
import { TeamProfileData } from '@api/types/team';
import ImageUpload from '@components/common/ImageUpload';
import useImageUpload from '@hooks/useImageUpload';
import BottomSheet from '@components/common/BottomSheet';
import { icPencil } from '@assets/icons';
import FormItem from '@components/common/FormItem';

function TeamRegister() {
  const [isMemberSelectMode, setIsMemberSelectMode] = useState(false);
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const navigate = useNavigate();
  const { id, username, profileImage } = useLoginUser();
  const queryClient = useQueryClient();

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
    return await api.teamService.postTeamInfo(form);
  };
  const { mutate } = useMutation(submitTeamInfo, {
    onSuccess: (data) => {
      data &&
        queryClient.setQueryData<TeamProfileData | undefined>(
          'teamProfileData',
          (old) =>
            old && {
              profileList: [
                { id: data.id, profileImage: data.image, profileName: name },
                ...old.profileList,
              ],
            },
        );
    },
  });

  useEffect(() => () => setSelectedUserList([]), []);

  return (
    <StWrapper>
      {isMemberSelectMode ? (
        <TeamMemberAddForRegister onClickSubmitButton={closeMembers} />
      ) : (
        <StTeamRegister>
          <CommonNavigation />
          <div>
            <StTitle>팀 등록하기</StTitle>
            <ImageUpload
              styles={{
                width: '88px',
                height: '88px',
                borderRadius: '30px',
              }}
              defaultChildren={{
                src: icPencil,
                styles: { width: '24px' },
              }}
              {...imageUploadProps}
            >
              <ImgTeamDefault />
            </ImageUpload>
            <CommonLabel content="팀 이름" marginTop="32px" marginBottom="18px" />
            <CommonInput
              value={name}
              width="100%"
              placeholder="팀 이름을 입력해주세요"
              onChange={(name) => setName(name)}
              maxLength={8}
            />
            <CommonLabel content="팀에 관해 간략히 설명해주세요" marginTop="44px" />
            <FormItem value={description} maxLength={70}>
              <StTextarea
                placeholder="설명을 입력해주세요"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setDescription(e.target.value)
                }
                maxLength={70}
              />
            </FormItem>

            <CommonLabel content="팀원을 추가해주세요" marginTop="44px" marginBottom="18px" />
            <ProfileList
              isSquare={false}
              profileList={[
                { id: id, profileName: username, profileImage: profileImage ?? imgEmptyProfile },
                ...selectedUserList.map((user) => ({
                  id: user.id,
                  profileName: user.name,
                  profileImage: user.image ?? imgEmptyProfile,
                })),
              ]}
              onAddClick={() => setIsMemberSelectMode(true)}
            />
            <StSubmitButton
              onClick={() => {
                mutate();
                navigate('/home/team');
              }}
              isActive={name.length > 0}
            >
              완료
            </StSubmitButton>
          </div>
        </StTeamRegister>
      )}
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </StWrapper>
  );
}

export default TeamRegister;
