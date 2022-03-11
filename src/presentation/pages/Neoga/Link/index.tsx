import { StLinkCreateButton, StNeogaLink } from './style';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@api/index';
import { useState } from 'react';
import { CreateFormInfo } from '@api/types/neoga';
import QuestionCard from '@components/common/QuestionCard';
import { IcLinkCoral } from '@assets/icons';

export default function NeogaLink() {
  const { formID } = useParams();
  const [formData, setFormData] = useState<Omit<CreateFormInfo, 'id'>>({
    title: '',
    subtitle: '',
    image: '',
  });
  console.log(formData); // 서버 데이터 수정 필요한 상태라 일단 안쓰고 sample 데이터 넣겠습니다

  useEffect(() => {
    if (formID && !isNaN(+formID))
      (async () => {
        const formData = await api.neogaService.getCreateFormInfo(Number(formID));
        setFormData(formData);
      })();
  }, []);

  return (
    <StNeogaLink>
      <QuestionCard
        content="나와 함께하며 당신이 닮고 싶은 능력이 있었나요?"
        title="너가 닮고 싶은 나의 일잘러 모습"
        image="https://user-images.githubusercontent.com/73823388/157658161-1dab67ec-d994-4668-bec0-e1dda28cf2f9.png"
      >
        <StLinkCreateButton>
          <IcLinkCoral />
          <div>링크 생성하기</div>
        </StLinkCreateButton>
      </QuestionCard>
    </StNeogaLink>
  );
}
