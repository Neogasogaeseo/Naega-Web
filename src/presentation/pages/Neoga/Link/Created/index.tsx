import { ImgCreatedLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StLinkResultLayout, StLinkBox } from '../style';
import { useNavigate, useParams } from 'react-router-dom';

export default function NeogaLinkCreated() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const iv = 'qmffkqmffk';
  const q = 'qmffhqmffh';
  return (
    <StLinkResultLayout>
      <ImgCreatedLink />
      <div>
        <div>이미 생성된 링크예요!</div>
        <div>해당 링크를 복사하여 공유해주세요</div>
      </div>
      <StLinkBox>
        <input type="text" value={`http://localhost:3000/neososeoform/${iv}/${q}`} disabled />
        <div></div>
        <IcLinkCopy />
      </StLinkBox>
      <button onClick={() => navigate(`/neoga/${formId}/detail/form`)}>답변 보러가기</button>
    </StLinkResultLayout>
  );
}
