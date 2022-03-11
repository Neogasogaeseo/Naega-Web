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
        content={formData.subtitle}
        title={formData.title}
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
