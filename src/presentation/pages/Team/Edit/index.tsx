import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CommonNavigation from '@components/common/Navigation';
import { StPhotoUploadWrapper, StIcPencil, StTextarea } from '../Register/style';
import PhotoUpload from '@components/common/FileUpload';
import CommonLabel from '@components/common/Label';
import CommonInput from '@components/common/Input';
import { StTeamEdit, StTeamImage, StRelativeWrapper } from './style';
import { api } from '@api/index';
import { ImgTeamDefault } from '@assets/images';
import CommonModal from '@components/common/Modal';

// TODO 팀 정보 get 에러바운더리 - api 명세서 나와야 할 수 있음
export default function TeamEdit() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const { data: teamInfo, isSuccess } = useQuery(['teamEditInfo', teamID], () =>
    api.teamServiceMock.getTeamEditInfo(Number(teamID)),
  );
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

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
        isOpen={isOpenModal}
        title="팀을 삭제하시겠습니까?"
        description={'팀을 삭제하면 관련된 정보가 모두' + '\n' + '사라지며 복구할 수 없습니다.'}
        onClickConfirm={() => setIsOpenModal(false)}
        onClickCancel={() => setIsOpenModal(false)}
      />
      <CommonNavigation submitButton={{ content: '완료', onClick: () => console.log(image) }} />
      <StTeamEdit>
        <div>팀 수정하기</div>
        <StPhotoUploadWrapper>
          <PhotoUpload width="88px" height="88px" borderRadius="36px" setFile={setImage}>
            {teamInfo && teamInfo.image ? (
              <StTeamImage src={teamInfo?.image} alt="팀 이미지" />
            ) : (
              <ImgTeamDefault />
            )}
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
    </StRelativeWrapper>
  );
}
