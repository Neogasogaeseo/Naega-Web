import CommonInput from '@components/common/CommonInput';
import { neososeoFormState } from '@stores/neososeo-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  StButton,
  StNeososeoFormLayout,
  StNeososeoTitle,
  StRelation,
  StRelationWrapper,
  StSubTitle,
} from '../style';

function NeososeoFormIntro() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
  const [selectedRelation, setSelectedRelation] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!neososeoFormData) return;
    setSelectedRelation(neososeoFormData.relation[0]);
  }, [neososeoFormData]);
  if (!neososeoFormData) return <></>;
  return (
    <StNeososeoFormLayout>
      <StNeososeoTitle>
        <span>Q.</span>
        <span>{neososeoFormData.content}</span>
      </StNeososeoTitle>
      <div>
        <StSubTitle>나를 소개해주세요</StSubTitle>
        <CommonInput width="100%" placeholder="나를 나타내는 별명을 입력해주세요" />
        <StSubTitle>{neososeoFormData.userName}님과의 관계를 선택해주세요</StSubTitle>
        <StRelationWrapper>
          {neososeoFormData.relation.map((relation) => (
            <StRelation
              key={relation}
              selected={selectedRelation === relation}
              onClick={() => setSelectedRelation(relation)}
            >
              {relation}
            </StRelation>
          ))}
        </StRelationWrapper>
      </div>
      <StButton onClick={() => navigate('../answer')}>다음</StButton>
    </StNeososeoFormLayout>
  );
}

export default NeososeoFormIntro;
