import { useMutation, useQuery } from 'react-query';
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
import { useDeleteTeam } from '@hooks/queries/team';
import FormItem from '@components/common/FormItem';

export default function TeamEdit() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();

  const { data: teamInfo } = useQuery(
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
      onSuccess: () => navigate(-1),
    },
  );

  useEffect(() => {
    if (teamInfo) {
      setName(teamInfo.name);
      setDescription(teamInfo.description);
    }
  }, [teamInfo]);

  useEffect(() => {
    if (!teamID || (teamID && isNaN(+teamID))) navigate('/home');
  }, []);

  return (
    <StRelativeWrapper>
      <CommonModal
        isOpened={isOpenModal}
        title="팀을 삭제하시겠습니까?"
        description={'팀을 삭제하면 관련된 정보가 모두' + '\n' + '사라지며 복구할 수 없습니다.'}
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
          content: '완료',
          onClick: editTeamInfo,
        }}
      />
      <StTeamEdit>
        <div>팀 수정하기</div>
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            maxLength={70}
          />
        </FormItem>
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
