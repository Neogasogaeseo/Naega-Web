import { api } from '@api/index';
import { icCamera } from '@assets/icons';
import FileUpload from '@components/common/FileUpload';
import CommonInput from '@components/common/Input';
import CommonNavigation from '@components/common/Navigation';
import SelectBox from '@components/common/SelectBox';
import { useToast } from '@hooks/useToast';
import {
  StPhotoUploadImage,
  StPhotoUploadMiddleDesc,
  StUploadContainer,
} from '@pages/Team/Issue/Edit/style';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { StTitle, StSubTitle, StForm, StFormTitle, StTextarea, StButton } from '../style';

function ServiceCenterPage() {
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const { data: categories } = useQuery(
    'service-category',
    api.reportService.getServiceCenterCategories,
  );
  const [selectedItemID, setSelectedItemID] = useState<number | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (selectedItemID === undefined && categories !== undefined) {
      setSelectedItemID(categories[0].id);
    }
  }, [categories]);

  const sendServiceCenterRequest = async () => {
    if (!selectedItemID) return;
    const response = await api.reportService.postReport(selectedItemID, title, content, image);
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
          <FileUpload width="100%" height="149px" setFile={setImage} borderRadius="16px">
            <StUploadContainer>
              <StPhotoUploadImage src={icCamera} />
              <StPhotoUploadMiddleDesc>파일을 선택해서 업로드해주세요</StPhotoUploadMiddleDesc>
            </StUploadContainer>
          </FileUpload>
        </div>
        <StButton
          disabled={title.trim() === '' || content.trim() === ''}
          onClick={sendServiceCenterRequest}
        >
          완료
        </StButton>
      </StForm>
    </>
  );
}

export default ServiceCenterPage;
