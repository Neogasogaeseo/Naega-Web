import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router';

import { api } from '@api/index';
import { IcCamera } from '@assets/icons';
import CommonInput from '@components/common/Input';
import CommonNavigation from '@components/common/Navigation';
import SelectBox from '@components/common/SelectBox';
import BottomSheet from '@components/common/BottomSheet';
import ImageUpload from '@components/common/ImageUpload';
import useImageUpload from '@hooks/useImageUpload';
import { useToast } from '@hooks/useToast';
import { StTitle, StSubTitle, StForm, StFormTitle, StTextarea, StButton } from '../style';
import { StUploadContainer } from '@pages/Team/Issue/NewIssue/style';

interface CustomizedLinkState {
  isError: boolean;
}

function ServiceCenterPage() {
  const location = useLocation();
  const state = location.state as CustomizedLinkState;
  const { isError } = state;
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const { data: categories } = useQuery(
    'service-category',
    api.reportService.getServiceCenterCategories,
  );
  const [email, setEmail] = useState('');
  const [selectedItemID, setSelectedItemID] = useState<number | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();

  useEffect(() => {
    if (categories !== undefined) {
      if (selectedItemID === undefined) {
        setSelectedItemID(categories[0].id);
      }
      if (isError) {
        setSelectedItemID(categories[2].id);
      }
    }
  }, [categories]);

  const sendServiceCenterRequest = async () => {
    if (!selectedItemID) return;
    const response = await api.reportService.postReport(
      selectedItemID,
      title,
      content,
      email,
      image === null ? undefined : image,
    );
    if (response.isSuccess) {
      fireToast({ content: '문의가 성공적으로 등록되었습니다.' });
      navigate('/preferences');
    }
  };

  return (
    <>
      <CommonNavigation />
      <StTitle>고객센터</StTitle>
      <StSubTitle>고객센터에 문의할 사항 보내기</StSubTitle>
      <StForm>
        <div>
          <StFormTitle>답변 받을 이메일</StFormTitle>
          <CommonInput
            width="100%"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(value: string) => setEmail(value)}
          />
        </div>
        <div>
          <StFormTitle>문의사항의 카테고리를 선택해주세요</StFormTitle>
          {categories && selectedItemID && (
            <SelectBox
              items={categories}
              selectedItemID={selectedItemID}
              onItemClick={(id: number) => setSelectedItemID(id)}
            />
          )}
        </div>
        <div>
          <StFormTitle>문의사항</StFormTitle>
          <CommonInput
            width="100%"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(value: string) => setTitle(value)}
          />
          <StTextarea
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          />
        </div>
        <div>
          <StFormTitle>이슈와 관련된 사진을 업로드해주세요 (선택)</StFormTitle>
          <ImageUpload
            styles={{
              width: '100%',
              height: '149px',
              borderRadius: '16px',
            }}
            {...imageUploadProps}
          >
            <StUploadContainer>
              <IcCamera />
              <div>파일을 선택해서 업로드해주세요</div>
            </StUploadContainer>
          </ImageUpload>
        </div>
        <StButton
          disabled={email.trim() === '' || title.trim() === '' || content.trim() === ''}
          onClick={sendServiceCenterRequest}
        >
          완료
        </StButton>
      </StForm>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </>
  );
}

export default ServiceCenterPage;
