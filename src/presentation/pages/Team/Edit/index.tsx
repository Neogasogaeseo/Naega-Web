import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CommonNavigation from '@components/common/Navigation';
import { StTextarea } from '../Register/style';
import CommonLabel from '@components/common/Label';
import CommonInput from '@components/common/Input';
import { StTeamEdit, StRelativeWrapper } from './style';
import { api } from '@api/index';
import { ImgTeamDefault } from '@assets/images';
import CommonModal from '@components/common/Modal';
import BottomSheet from '@components/common/BottomSheet';
import useImageUpload from '@hooks/useImageUpload';
import ImageUpload from '@components/common/ImageUpload';
import { icPencil } from '@assets/icons';
import { useDeleteTeam } from '@queries/team';

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

  const { mutate: deleteTeam } = useDeleteTeam(Number(teamID));

  const { mutate: editTeamInfo } = useMutation(
    async () => {
      if (!teamID) return;
      await api.teamService.editTeamInfo({
        id: Number(teamID),
        name: name,
        description: description,
        image: image,
      });
    },
    {
      onSuccess: () => {
        navigate(-1);
        return queryClient.invalidateQueries('teamEditInfo');
      },
    },
  );

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
        title="?????? ?????????????????????????"
        description={'?????? ???????????? ????????? ????????? ??????' + '\n' + '???????????? ????????? ??? ????????????.'}
        onClickConfirm={() =>
          deleteTeam(Number(teamID), {
            onSuccess: () => {
              setIsOpenModal(false);
              navigate('/home/team');
            },
          })
        }
        onClickCancel={() => setIsOpenModal(false)}
      />
      <CommonNavigation
        submitButton={{
          content: '??????',
          onClick: editTeamInfo,
        }}
      />
      <StTeamEdit>
        <div>??? ????????????</div>
        <ImageUpload
          styles={{
            width: '88px',
            height: '88px',
            borderRadius: '36px',
          }}
          defaultThumbnail={teamInfo?.image === null ? '' : teamInfo?.image}
          defaultChildren={{ src: icPencil, styles: { width: '24px' } }}
          {...imageUploadProps}
        >
          <ImgTeamDefault />
        </ImageUpload>
        <CommonLabel content="??? ??????" marginTop="32px" marginBottom="18px" />
        <CommonInput
          value={name}
          width="100%"
          placeholder="??? ????????? ??????????????????"
          onChange={(name) => setName(name)}
        />
        <CommonLabel content="?????? ?????? ????????? ??????????????????" marginTop="44px" />
        <StTextarea
          placeholder="????????? ??????????????????"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
        <button onClick={() => setIsOpenModal(true)}>??? ????????????</button>
        <div>?????? ???????????? ?????? ????????? ???????????? ?????? ????????? ??? ????????????</div>
      </StTeamEdit>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </StRelativeWrapper>
  );
}
