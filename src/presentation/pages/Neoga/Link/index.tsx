import NeososeoFormHeader from '@components/common/NeososeoFormHeader';
import Question from '@components/common/Question';
import { StNeogaLink, StLinkCreateButton } from './style';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@api/index';
import { useState } from 'react';
import { CreateFormInfo } from '@api/types/neoga';

export default function NeogaLink() {
  const navigate = useNavigate();
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
      <NeososeoFormHeader title={formData.title} image={formData.image} />
      <Question content={formData.subtitle} />
      <StLinkCreateButton onClick={() => navigate(`./new`)}>링크 생성하기</StLinkCreateButton>
    </StNeogaLink>
  );
}
