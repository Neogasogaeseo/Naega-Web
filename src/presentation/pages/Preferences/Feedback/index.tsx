import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useLocation } from 'react-router';
import { api } from '@api/index';
import CommonInput from '@components/common/Input';
import CommonNavigation from '@components/common/Navigation';
import SelectBox from '@components/common/SelectBox';
import { useToast } from '@hooks/useToast';
import { StButton, StForm, StFormTitle, StSubTitle, StTextarea, StTitle } from '../style';

function FeedbackPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryState = location.state;
  const { fireToast } = useToast();
  const { data: categories } = useQuery(
    'feedback-category',
    api.reportService.getFeedbackCategories,
  );
  const [selectedItemID, setSelectedItemID] = useState<number | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedItemID === undefined && categories !== undefined) {
      setSelectedItemID(categories[0].id);
    }
    if (categoryState && categories !== undefined) {
      setSelectedItemID(categories[2].id);
    }
  }, [categories]);

  const sendServiceCenterRequest = async () => {
    if (!selectedItemID) return;
    const response = await api.reportService.postReport(selectedItemID, title, content);
    if (response.isSuccess) {
      fireToast({ content: '문의가 성공적으로 등록되었습니다.' });
      navigate('/preferences');
    }
  };

  return (
    <>
      <CommonNavigation />
      <StTitle>너소서 팀에게</StTitle>
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

export default FeedbackPage;
