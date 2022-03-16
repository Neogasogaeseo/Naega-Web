import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { StLinkButton, StNeogaLink } from './style';
import { api } from '@api/index';
import QuestionCard from '@components/common/QuestionCard';
import { IcLinkCoral, IcLinkWhite } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { DOMAIN } from '@utils/constant';
import { copyClipboard } from '@utils/copyClipboard';

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
      <div>
        <QuestionCard
          content={formData && formData.subtitle}
          title={formData && formData.title}
          image="https://user-images.githubusercontent.com/73823388/157658161-1dab67ec-d994-4668-bec0-e1dda28cf2f9.png"
        >
          <StLinkButton onClick={createLink} isCreated={isCreated}>
            <IcLinkCoral />
            <div>링크 생성하기</div>
          </StLinkButton>
        </QuestionCard>
        <QuestionCard isFront={false}>
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
        </QuestionCard>
      </div>
    </StNeogaLink>
  );
}
