import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import CommonNavigation from '@components/common/Navigation';
import { StPhotoUploadWrapper, StIcPencil, StTextarea } from '../Register/style';
import PhotoUpload from '@components/common/FileUpload';
import CommonLabel from '@components/common/Label';
import CommonInput from '@components/common/Input';
import { StTeamEdit, StTeamImage, StRelativeWrapper } from './style';
import { api } from '@api/index';
import { ImgTeamDefault } from '@assets/images';
import CommonModal from '@components/common/Modal';
import BottomSheet from '@components/common/BottomSheet';
import { icEdit, icTrash } from '@assets/icons';

export default function TeamEdit() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bottomSheetOpened, setBottomSheetOpened] = useState(false);
  const [isImageDeleted, setIsImageDeleted] = useState(false);

  const { data: teamInfo, isSuccess } = useQuery(
    'teamEditInfo',
    async () => await api.teamService.getTeamEditInfo(Number(teamID)),
    {
      useErrorBoundary: true,
      retry: 1,
    },
  );

  const editTeamInfo = async () => {
    if (!teamID) return;
    await api.teamService.editTeamInfo({
      id: Number(teamID),
      name: name,
      description: description,
      image: image,
    });
  };
  const { mutate } = useMutation(editTeamInfo, {
    onSuccess: () => {
      navigate(-1);
      return queryClient.invalidateQueries('teamEditInfo');
    },
  });

  const removeImage = () => {
    setIsImageDeleted(true);
    setImage(null);
    setBottomSheetOpened(false);
  };

  const getImageThumbnail = () => {
    if (teamInfo && teamInfo.image) {
      console.log('먀?');
      return isImageDeleted ? (
        <ImgTeamDefault />
      ) : (
        <StTeamImage src={teamInfo.image} alt="팀 이미지" />
      );
    }
    return <ImgTeamDefault />;
  };

  useEffect(() => {
    if (isSuccess && teamInfo) {
      setName(teamInfo.name);
      setDescription(teamInfo.description);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!teamID || (teamID && isNaN(+teamID))) navigate('/home');
  }, []);

  return (
    <StRelativeWrapper>
      <CommonModal
        isOpened={isOpenModal}
        title="팀을 삭제하시겠습니까?"
        description={'팀을 삭제하면 관련된 정보가 모두' + '\n' + '사라지며 복구할 수 없습니다.'}
        onClickConfirm={async () => {
          setIsOpenModal(false);
          navigate('/home/team');
          teamID && (await api.teamService.deleteTeam(+teamID));
        }}
        onClickCancel={() => setIsOpenModal(false)}
      />
      <CommonNavigation
        submitButton={{
          content: '완료',
          onClick: mutate,
        }}
      />
      <StTeamEdit>
        <div>팀 수정하기</div>
        <StPhotoUploadWrapper
          onClick={() =>
            image
              ? setBottomSheetOpened(true)
              : fileInputRef.current && fileInputRef.current.click()
          }
        >
          <PhotoUpload
            ref={fileInputRef}
            width="88px"
            height="88px"
            borderRadius="36px"
            setFile={setImage}
            isDeleted={isImageDeleted}
            cancelDelete={() => {
              setBottomSheetOpened(false);
              setIsImageDeleted(false);
            }}
          >
            {getImageThumbnail()}
          </PhotoUpload>
          <StIcPencil />
        </StPhotoUploadWrapper>
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
        <button onClick={() => setIsOpenModal(true)}>팀 삭제하기</button>
        <div>팀을 삭제하면 모든 정보가 사라지며 다시 복구할 수 없습니다</div>
      </StTeamEdit>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={[
          {
            icon: icEdit,
            label: '이미지 수정하기',
            onClick: () => fileInputRef.current && fileInputRef.current.click(),
          },
          { icon: icTrash, label: '이미지 삭제하기', onClick: removeImage },
        ]}
        closeBottomSheet={() => setBottomSheetOpened(false)}
      />
    </StRelativeWrapper>
  );
}
