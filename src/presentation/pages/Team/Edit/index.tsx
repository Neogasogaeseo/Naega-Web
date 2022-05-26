import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CommonNavigation from '@components/common/Navigation';
import { StIcPencil, StTextarea } from '../Register/style';
import CommonLabel from '@components/common/Label';
import CommonInput from '@components/common/Input';
import { StTeamEdit, StRelativeWrapper } from './style';
import { api } from '@api/index';
import { ImgTeamDefault } from '@assets/images';
import CommonModal from '@components/common/Modal';
import BottomSheet from '@components/common/BottomSheet';
import useImageUpload from '@hooks/useImageUpload';
import ImageUpload from '@components/common/ImageUpload';

export default function TeamEdit() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();

  const { data: teamInfo, isSuccess } = useQuery(
    ['teamEditInfo', teamID],
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
        <div>
          <ImageUpload
            styles={{
              width: '88px',
              height: '88px',
              borderRadius: '36px',
            }}
            defaultThumbnail={teamInfo?.image === null ? '' : teamInfo?.image}
            {...imageUploadProps}
          >
            <ImgTeamDefault />
          </ImageUpload>
          <StIcPencil />
        </div>
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
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </StRelativeWrapper>
  );
}
