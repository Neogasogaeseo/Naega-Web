import { ImgCreatedLink, ImgNewLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StNeogaLinkResult, StLinkBox } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import useCopyClipboard from '@hooks/useCopyClipboard';
import { useEffect } from 'react';
import { useToast } from '@hooks/useToast';
import { api } from '@api/index';
import { useState } from 'react';

export default function NeogaLinkResult() {
  const { formID, type } = useParams();
  const navigate = useNavigate();
  const [isCopy, setIsCopy, copyClipboard] = useCopyClipboard();
  const { fireToast } = useToast();
  const [link, setLink] = useState<string>('');

  const createLink = async () => {
    if (!formID || !type) return;
    if (isNaN(+formID)) return;
    const q = await api.neososeoFormService.postCreateForm(Number(formID), () =>
      navigate(`/neoga/create/${formID}/created`),
    );
    setLink(`http://localhost:3000/neososeoform/${q}`);
  };

  useEffect(() => {
    if (isCopy) {
      fireToast({ content: '링크가 클립보드에 저장되었습니다.', bottom: 190 });
      setIsCopy(false);
    } else {
      fireToast({ content: '다시 시도해주세요.', bottom: 190 });
    }
  }, [isCopy]);
  useEffect(() => {
    createLink();
  }, [formID, type]);
  useEffect(() => {
    if (!(type === 'new' || type === 'created')) navigate('/');
    createLink();
  }, []);

  return (
    <StNeogaLinkResult>
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
      <button onClick={() => navigate(`/neoga/${formID}/detail/form`)}>
        {type === 'new' ? '완료' : '답변 보러가기'}
      </button>
    </StNeogaLinkResult>
  );
}
