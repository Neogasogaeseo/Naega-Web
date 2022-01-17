import { ImgCreatedLink, ImgNewLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StLinkResultLayout, StLinkBox } from '../style';
import { useNavigate, useParams } from 'react-router-dom';
import useCopyClipboard from '@hooks/useCopyClipboard';
import { useEffect } from 'react';
import { useToast } from '@hooks/useToast';

export default function NeogaLinkResult() {
  const { formId, type } = useParams();
  const navigate = useNavigate();
  const [isCopy, setIsCopy, copyClipboard] = useCopyClipboard();
  const { fireToast } = useToast();

  const iv = 'qmffkqmffk';
  const q = 'qmffhqmffh';
  const link = `http://localhost:3000/neososeoform/${iv}/${q}`;

  useEffect(() => {
    if (isCopy) {
      fireToast({ content: '링크가 클립보드에 저장되었습니다.', bottom: 190 });
      setIsCopy(false);
    }
  }, [isCopy]);
  useEffect(() => {
    if (!(type === 'new' || type === 'created')) navigate('/');
  }, []);

  return (
    <StLinkResultLayout>
      {type === 'new' ? <ImgNewLink /> : <ImgCreatedLink />}
      <div>
        <div>{type === 'new' ? '링크 생성 완료!' : '이미 생성된 링크예요!'}</div>
        <div>해당 링크를 복사하여 공유해주세요</div>
      </div>
      <StLinkBox>
        <input type="text" value={link} disabled />
        <div></div>
        <IcLinkCopy onClick={() => copyClipboard(link)} />
      </StLinkBox>
      <button onClick={() => navigate(`/neoga/${formId}/detail/form`)}>
        {type === 'new' ? '완료' : '답변 보러가기'}
      </button>
    </StLinkResultLayout>
  );
}
