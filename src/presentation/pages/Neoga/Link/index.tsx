import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { StLinkButton, StNeogaLink } from './style';
import { api } from '@api/index';
import FormCard from '@components/common/FormCard';
import { IcLinkWhite, IcPulsCoral } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { DOMAIN } from '@utils/constant';
import { copyClipboard } from '@utils/copyClipboard';
import CommonHeader from '@components/common/CommonHeader';

export default function NeogaLink() {
  const CREATED = 'created';
  const NEW = 'new';

  const navigate = useNavigate();
  const { formID, viewMode } = useParams();
  const [isCreated, setIsCreated] = useState(viewMode === CREATED);
  const { fireToast } = useToast();
  const [link, setLink] = useState<string>('');
  const { data: formData } = useQuery(
    ['formData', formID],
    () => api.neogaService.getCreateFormInfo(Number(formID)),
    { enabled: viewMode === NEW, useErrorBoundary: true, retry: 1 },
  );

  const createLink = async () => {
    if (!formID || isNaN(+formID)) return;
    const { q, isCreated } = await api.neogaService.postCreateForm(+formID);
    setLink(`${DOMAIN}/neososeoform/${q}`);
    setIsCreated(isCreated);
  };

  useEffect(() => {
    if (!(viewMode === NEW || viewMode === CREATED)) navigate('/');
    if (viewMode === CREATED) createLink();
  }, []);

  return (
    <StNeogaLink isCreated={isCreated}>
      <CommonHeader />
      <div>
        <FormCard
          content={formData && formData.subtitle}
          title={formData && formData.title}
          image={formData && formData.image}
        >
          <StLinkButton onClick={createLink} isCreated={isCreated}>
            <IcPulsCoral />
            <div>링크 생성하기</div>
          </StLinkButton>
        </FormCard>
        <FormCard isFront={false}>
          <StLinkButton
            onClick={() =>
              copyClipboard(
                link,
                () => fireToast({ content: '링크가 클립보드에 저장되었습니다.' }),
                () => fireToast({ content: '다시 시도해주세요.' }),
              )
            }
            isCreated={isCreated}
          >
            <IcLinkWhite />
            <div>링크 복사하기</div>
          </StLinkButton>
        </FormCard>
      </div>
    </StNeogaLink>
  );
}
