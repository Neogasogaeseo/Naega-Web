import { ImgCreatedLink, ImgNewLink } from '@assets/images';
import { IcLinkCopy } from '@assets/icons';
import { StNeogaLinkResult, StLinkBox } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { copyClipboard } from '@utils/copyClipboard';
import { useEffect } from 'react';
import { useToast } from '@hooks/useToast';
import { api } from '@api/index';
import { useState } from 'react';
import { DOMAIN } from '@utils/constant';

export default function NeogaLinkResult() {
  const { formID, type } = useParams();
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const [link, setLink] = useState<string>('');

  const createLink = async () => {
    if (!formID || !type) return;
    if (isNaN(+formID)) return;
    const { q, isCreated } = await api.neogaService.postCreateForm(+formID);
    setLink(`${DOMAIN}/neososeoform/${q}`);
    if (isCreated) navigate(`/neoga/create/${formID}/created`);
  };

  useEffect(() => {
    if (!(type === 'new' || type === 'created')) navigate('/');
    createLink();
  }, [formID, type]);

  return (
    <StNeogaLinkResult>
      {type === 'new' ? <ImgNewLink /> : <ImgCreatedLink />}
      <div>
        <div>{type === 'new' ? '설문 링크 생성 완료!' : '이미 생성된 설문이에요'}</div>
        <div>링크를 복사해서 친구들에게 공유해보세요</div>
      </div>
      <StLinkBox>
        <input type="text" value={link} disabled />
        <div></div>
        <IcLinkCopy
          onClick={() =>
            copyClipboard(
              link,
              () => fireToast({ content: '링크가 클립보드에 저장되었습니다.', bottom: 190 }),
              () => fireToast({ content: '다시 시도해주세요.', bottom: 190 }),
            )
          }
        />
      </StLinkBox>
      <button onClick={() => navigate(`/neoga/${formID}/detail/form`)}>
        {type === 'new' ? '완료' : '답변 보러가기'}
      </button>
    </StNeogaLinkResult>
  );
}
