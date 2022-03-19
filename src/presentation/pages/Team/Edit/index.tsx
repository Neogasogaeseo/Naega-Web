import CommonNavigation from '@components/common/CommonNavigation';
import { StAbsoluteWrapper, StIcPencil, StTextarea } from '../Register/style';
import PhotoUpload from '@components/common/FileUpload';
import { ImgTeamAdd } from '@assets/images';
import CommonLabel from '@components/common/CommonLabel';
import CommonInput from '@components/common/CommonInput';
import { useState } from 'react';
import { StTeamEdit } from './style';

export default function TeamEdit() {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  return (
    <>
      <CommonNavigation submitButton={{ content: '완료', onClick: () => console.log(image) }} />
      <StTeamEdit>
        <div>팀 수정하기</div>
        <StAbsoluteWrapper>
          <PhotoUpload width="104px" height="104px" borderRadius="36px" setFile={setImage}>
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
        <button>팀 삭제하기</button>
        <div>팀을 삭제하면 모든 정보가 사라지며 다시 복구할 수 없습니다</div>
      </StTeamEdit>
    </>
  );
}
