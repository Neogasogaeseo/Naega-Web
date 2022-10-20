import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import {
  StAnswerButton,
  StCopyButton,
  StFormTicketWrapper,
  StNeogaLink,
  StSaveButton,
  StSaveNotice,
  StWrapper,
  StAbsoluteWrapper,
} from './style';
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
  const [formCode, setFormCode] = useState<string | undefined>();
  const { data: formData } = useQuery(
    ['formData', formID],
    () => api.neogaService.getCreateFormInfo(Number(formID)),
    { enabled: viewMode === VIEW_MODE.NEW, useErrorBoundary: true, retry: 1 },
  );
  const { data: createdFormData } = useGetFormInfo(formCode ?? '', {
    enabled: typeof formCode === 'string' && formCode.length > 0,
  });
  const imageToSaveRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const createFormCode = async () => {
    if (!formID || isNaN(+formID)) return;
    const { formCode, isCreated } = await api.neogaService.createForm(+formID);
    setFormCode(formCode);
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
    } else fireToast({ content: '이미지 저장에 실패했습니다', bottom: 122 });
  };

  const goAnswerPage = () =>
    createdFormData && navigate(`/neoga/${createdFormData.formID}/detail/form`);

  useEffect(() => {
    if (!(viewMode === VIEW_MODE.NEW || viewMode === VIEW_MODE.CREATED)) navigate('/');
    if (viewMode === VIEW_MODE.CREATED) createFormCode();
  }, []);

  return (
    <StWrapper>
      {createdFormData && <NeogaFormImageToSave formData={createdFormData} ref={imageToSaveRef} />}
      <StNeogaLink>
        <div>
          <CommonHeader />
          <StFormTicketWrapper isCreated={isCreated}>
            <StAbsoluteWrapper>
              <NeogaFormTicket
                content={formData?.subtitle ?? ''}
                title={formData?.title ?? ''}
                image={formData?.image ?? ''}
              >
                <StCopyButton onClick={createFormCode}>
                  <IcPulsCoral />
                  <div>링크 생성하기</div>
                </StCopyButton>
              </NeogaFormTicket>
            </StAbsoluteWrapper>
            <StAbsoluteWrapper>
              <NeogaFormTicket
                content="너가소개서 생성 완료!"
                title={'링크를 복사해서' + '\n' + '친구들에게 공유해보세요'}
                image={imgBrowserLink}
              >
                <StCopyButton
                  onClick={() =>
                    copyClipboard(
                      `${DOMAIN}/neososeoform/${formCode}`,
                      () =>
                        fireToast({ content: '링크가 클립보드에 저장되었습니다.', bottom: 122 }),
                      () => fireToast({ content: '다시 시도해주세요.', bottom: 122 }),
                    )
                  }
                >
                  <IcLinkCoral />
                  <div>링크 복사하기</div>
                </StCopyButton>
              </NeogaFormTicket>
            </StAbsoluteWrapper>
          </StFormTicketWrapper>
          <StSaveNotice isCreated={isCreated}>
            <div>
              <div>이미지를 저장해보세요</div>
              <div>이미지를 저장한 후 공유해보세요</div>
            </div>
            <StSaveButton onClick={saveImage}>이미지 저장</StSaveButton>
          </StSaveNotice>
        </div>
        <StAnswerButton isCreated={isCreated} onClick={goAnswerPage}>
          답변 보러가기
        </StAnswerButton>
      </StNeogaLink>
    </StWrapper>
  );
}
