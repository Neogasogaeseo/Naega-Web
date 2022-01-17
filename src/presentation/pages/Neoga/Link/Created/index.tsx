import { ImgCreatedLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StLinkResultLayout, StLinkBox } from '../style';
import { useNavigate, useParams } from 'react-router-dom';
import useCopyClipboard from '@hooks/useCopyClipboard';
import { useEffect } from 'react';

export default function NeogaLinkCreated() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [isCopy, copyClipboard] = useCopyClipboard();
  const iv = 'qmffkqmffk';
  const q = 'qmffhqmffh';
  const link = `http://localhost:3000/neososeoform/${iv}/${q}`;

  useEffect(() => {
    if (isCopy) {
      console.log('toast');
    }
  }, [isCopy]);
  return (
    <StLinkResultLayout>
      <ImgCreatedLink />
      <div>
        <div>이미 생성된 링크예요!</div>
        <div>해당 링크를 복사하여 공유해주세요</div>
      </div>
      <StLinkBox>
        <input type="text" value={link} disabled />
        <div></div>
        <IcLinkCopy onClick={() => copyClipboard(link)} />
      </StLinkBox>
      <button onClick={() => navigate(`/neoga/${formId}/detail/form`)}>답변 보러가기</button>
    </StLinkResultLayout>
  );
}
