import { StLinkButton, StNeogaLink } from './style';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@api/index';
import { useState } from 'react';
import { CreateFormInfo } from '@api/types/neoga';
import QuestionCard from '@components/common/QuestionCard';
import { IcLinkCoral, IcLinkWhite } from '@assets/icons';

export default function NeogaLink() {
  const { formID } = useParams();
  const [formData, setFormData] = useState<Omit<CreateFormInfo, 'id'>>({
    title: '',
    subtitle: '',
    image: '',
  });
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    if (formID && !isNaN(+formID))
      (async () => {
        const formData = await api.neogaService.getCreateFormInfo(Number(formID));
        setFormData(formData);
      })();
  }, []);

  return (
    <StNeogaLink>
      {isCreated ? (
        <QuestionCard isBack={true}>
          <StLinkButton isCreated={isCreated}>
            <IcLinkWhite />
            <div>링크 복사하기</div>
          </StLinkButton>
        </QuestionCard>
      ) : (
        <QuestionCard
          content={formData.subtitle}
          title={formData.title}
          image="https://user-images.githubusercontent.com/73823388/157658161-1dab67ec-d994-4668-bec0-e1dda28cf2f9.png"
        >
          <StLinkButton onClick={() => setIsCreated(true)} isCreated={isCreated}>
            <IcLinkCoral />
            <div>링크 생성하기</div>
          </StLinkButton>
        </QuestionCard>
      )}
    </StNeogaLink>
  );
}
