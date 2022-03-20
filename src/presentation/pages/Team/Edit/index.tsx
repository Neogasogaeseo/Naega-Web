import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CommonNavigation from '@components/common/CommonNavigation';
import { StAbsoluteWrapper, StIcPencil, StTextarea } from '../Register/style';
import PhotoUpload from '@components/common/FileUpload';
import CommonLabel from '@components/common/CommonLabel';
import CommonInput from '@components/common/CommonInput';
import { StTeamEdit, StTeamImage } from './style';
import { api } from '@api/index';
import { ImgTeamAdd } from '@assets/images';

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
    <>
      <CommonNavigation submitButton={{ content: '완료', onClick: () => console.log(image) }} />
      <StTeamEdit>
        <div>팀 수정하기</div>
        <StAbsoluteWrapper>
          <PhotoUpload width="88px" height="88px" borderRadius="36px" setFile={setImage}>
            {teamInfo && teamInfo.image ? (
              <StTeamImage src={teamInfo?.image} alt="팀 이미지" />
            ) : (
              <ImgTeamAdd />
            )}
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
        <button>팀 삭제하기</button>
        <div>팀을 삭제하면 모든 정보가 사라지며 다시 복구할 수 없습니다</div>
      </StTeamEdit>
    </>
  );
}
