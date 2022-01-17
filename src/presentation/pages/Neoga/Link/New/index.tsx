import { ImgNewLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StLinkResultLayout, StLinkBox } from '../style';
import { useParams, useNavigate } from 'react-router';

export default function NeogaLinkNew() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const iv = 'qmffkqmffk';
  const q = 'qmffhqmffh';
  return (
    <StLinkResultLayout>
      <ImgNewLink />
      <div>
        <div>링크 생성 완료!</div>
        <div>해당 링크를 복사하여 공유해주세요</div>
      </div>
      <StLinkBox>
        <input type="text" value={`http://localhost:3000/neososeoform/${iv}/${q}`} disabled />
        <div></div>
        <IcLinkCopy />
      </StLinkBox>
      <button onClick={() => navigate(`/neoga/${formId}/detail/form`)}>완료</button>
    </StLinkResultLayout>
  );
}
