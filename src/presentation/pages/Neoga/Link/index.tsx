import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { StLinkButton, StNeogaLink } from './style';
import { api } from '@api/index';
import NeogaFormTicket from '@components/NeogaFormTicket';
import { IcLinkWhite, IcPulsCoral } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { DOMAIN } from '@utils/constant';
import { copyClipboard } from '@utils/copyClipboard';
import CommonHeader from '@components/common/Header';
import { imgCreatedLink } from '@assets/images';

export default function NeogaLink() {
  const VIEW_MODE = { CREATED: 'created', NEW: 'new' };

  const navigate = useNavigate();
  const { formID, viewMode } = useParams();
  const [isCreated, setIsCreated] = useState(viewMode === VIEW_MODE.CREATED);
  const { fireToast } = useToast();
  const [q, setQ] = useState<string | undefined>();
  const { data: formData } = useQuery(
    ['formData', formID],
    () => api.neogaService.getCreateFormInfo(Number(formID)),
    { enabled: viewMode === VIEW_MODE.NEW, useErrorBoundary: true, retry: 1 },
  );

  const createQ = async () => {
    if (!formID || isNaN(+formID)) return;
    const { q, isCreated } = await api.neogaService.createForm(+formID);
    setQ(q);
    setIsCreated(isCreated);
  };

  useEffect(() => {
    if (!(viewMode === VIEW_MODE.NEW || viewMode === VIEW_MODE.CREATED)) navigate('/');
    if (viewMode === VIEW_MODE.CREATED) createQ();
  }, []);

  return (
    <StNeogaLink isCreated={isCreated}>
      <CommonHeader />
      <div>
        <NeogaFormTicket
          content={(formData && formData.subtitle) ?? ''}
          title={(formData && formData.title) ?? ''}
          image={(formData && formData.image) ?? ''}
        >
          <StLinkButton onClick={createQ} isCreated={isCreated}>
            <IcPulsCoral />
            <div>링크 생성하기</div>
          </StLinkButton>
        </NeogaFormTicket>
        <NeogaFormTicket
          content="너가소개서 생성 완료!"
          title={'링크를 복사해서' + '\n' + '친구들에게 공유해보세요'}
          image={imgCreatedLink}
          theme="CORAL"
        >
          <StLinkButton
            onClick={() =>
              copyClipboard(
                `${DOMAIN}/neososeoform/${q}`,
                () => fireToast({ content: '링크가 클립보드에 저장되었습니다.' }),
                () => fireToast({ content: '다시 시도해주세요.' }),
              )
            }
            isCreated={isCreated}
          >
            <IcLinkWhite />
            <div>링크 복사하기</div>
          </StLinkButton>
        </NeogaFormTicket>
      </div>
    </StNeogaLink>
  );
}
