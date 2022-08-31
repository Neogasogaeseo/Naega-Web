import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import { StLinkButton, StNeogaLink, StWrapper } from './style';
import { api } from '@api/index';
import NeogaFormTicket from '@components/NeogaFormTicket';
import { IcLinkWhite, IcPulsCoral } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { DOMAIN } from '@utils/constant';
import { copyClipboard } from '@utils/copyClipboard';
import CommonHeader from '@components/common/Header';
import { imgCreatedLink } from '@assets/images';
import { useGetFormInfo } from '@hooks/queries/neososeo-form';
import { NeogaFormImageToSave } from '@components/NeogaFormImageToSave';

export default function NeogaLink() {
  const VIEW_MODE = { CREATED: 'created', NEW: 'new' };

  // const navigate = useNavigate();
  const { formID, viewMode } = useParams();
  const [isCreated, setIsCreated] = useState(viewMode === VIEW_MODE.CREATED);
  const { fireToast } = useToast();
  const [q, setQ] = useState<string | undefined>();
  const { data: formData } = useQuery(
    ['formData', formID],
    () => api.neogaService.getCreateFormInfo(Number(formID)),
    { enabled: viewMode === VIEW_MODE.NEW, useErrorBoundary: true, retry: 1 },
  );
  const { data: createdFormData } = useGetFormInfo(q ?? '', {
    enabled: typeof q === 'string' && q.length > 0,
  });
  const imageToSaveRef = useRef<HTMLDivElement>(null);

  const createQ = async () => {
    if (!formID || isNaN(+formID)) return;
    const { q, isCreated } = await api.neogaService.createForm(+formID);
    setQ(q);
    setIsCreated(isCreated);
  };

  const saveImage = async () => {
    const blob = await domtoimage.toBlob(imageToSaveRef.current as Node);
    saveAs(blob, 'neoga_created_form.png');
  };

  useEffect(() => {
    // if (!(viewMode === VIEW_MODE.NEW || viewMode === VIEW_MODE.CREATED)) navigate('/');
    // if (viewMode === VIEW_MODE.CREATED) createQ();
    setQ('4c799e4b1e0c38b340ce7cb50556eae440db7a6e8a1277e5fe');
  }, []);

  useEffect(() => setIsCreated(isCreated), [q]);

  return (
    <StWrapper>
      {createdFormData && <NeogaFormImageToSave formData={createdFormData} ref={imageToSaveRef} />}
      <StNeogaLink isCreated={isCreated}>
        <CommonHeader />
        <div>
          <NeogaFormTicket
            content={formData?.subtitle ?? ''}
            title={formData?.title ?? ''}
            image={formData?.image ?? ''}
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
        <button onClick={saveImage}>이미지 저장 임시 버튼</button>
      </StNeogaLink>
    </StWrapper>
  );
}
