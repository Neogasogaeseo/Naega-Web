import { ImgNewLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StLinkResultLayout, StLinkBox } from '../style';
import { useParams, useNavigate } from 'react-router';
import useCopyClipboard from '@hooks/useCopyClipboard';
import { useEffect } from 'react';

export default function NeogaLinkNew() {
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
      <ImgNewLink />
      <div>
        <div>링크 생성 완료!</div>
        <div>해당 링크를 복사하여 공유해주세요</div>
      </div>
      <StLinkBox>
        <input type="text" value={link} disabled />
        <div></div>
        <IcLinkCopy onClick={() => copyClipboard(link)} />
      </StLinkBox>
      <button onClick={() => navigate(`/neoga/${formId}/detail/form`)}>완료</button>
    </StLinkResultLayout>
  );
}
