import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import { StCopyButton, StNeogaLink, StSaveButton, StSaveNotice, StWrapper } from './style';
import { api } from '@api/index';
import NeogaFormTicket from '@components/NeogaFormTicket';
import { IcLinkCoral, IcPulsCoral } from '@assets/icons';
import { useToast } from '@hooks/useToast';
import { DOMAIN } from '@utils/constant';
import { copyClipboard } from '@utils/copyClipboard';
import CommonHeader from '@components/common/Header';
import { imgBrowserLink } from '@assets/images';
import { useGetFormInfo } from '@hooks/queries/neososeo-form';
import { NeogaFormImageToSave } from '@components/NeogaFormImageToSave';

export default function NeogaLink() {
  const VIEW_MODE = { CREATED: 'created', NEW: 'new' };

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
    if (!createdFormData) return;
    const canvas =
      imageToSaveRef.current &&
      (await html2canvas(imageToSaveRef.current, {
        useCORS: true,
      }));
    if (canvas) {
      canvas.toBlob((blob) => blob && saveAs(blob, 'neoga_created_form.png'));
    } else fireToast({ content: '이미지 저장에 실패했습니다' });
  };

  useEffect(() => {
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
            <StCopyButton onClick={createQ}>
              <IcPulsCoral />
              <div>링크 생성하기</div>
            </StCopyButton>
          </NeogaFormTicket>
          <NeogaFormTicket
            content="너가소개서 생성 완료!"
            title={'링크를 복사해서' + '\n' + '친구들에게 공유해보세요'}
            image={imgBrowserLink}
          >
            <StCopyButton
              onClick={() =>
                copyClipboard(
                  `${DOMAIN}/neososeoform/${q}`,
                  () => fireToast({ content: '링크가 클립보드에 저장되었습니다.' }),
                  () => fireToast({ content: '다시 시도해주세요.' }),
                )
              }
            >
              <IcLinkCoral />
              <div>링크 복사하기</div>
            </StCopyButton>
          </NeogaFormTicket>
        </div>
        <StSaveNotice>
          <div>
            <div>이미지를 저장해보세요</div>
            <div>이미지를 저장한 후 공유해보세요</div>
          </div>
          <StSaveButton onClick={saveImage}>이미지 저장</StSaveButton>
        </StSaveNotice>
      </StNeogaLink>
    </StWrapper>
  );
}
