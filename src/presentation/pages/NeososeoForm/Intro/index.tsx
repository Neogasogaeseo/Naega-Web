import CommonInput from '@components/common/CommonInput';
import { neoseosoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
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
  const [neososeoAnswerState, setNeososeoAnswerState] = useRecoilState(neoseosoAnswerState);
  const navigate = useNavigate();

  const setUserName = (userName: string) =>
    setNeososeoAnswerState((prev) => ({ ...prev, name: userName }));

  const setRelation = (relation: string) =>
    setNeososeoAnswerState((prev) => ({ ...prev, relation }));

  useEffect(() => {
    if (!neososeoFormData) return;
    setRelation(neososeoFormData.relation[0]);
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
        <CommonInput
          width="100%"
          placeholder="나를 나타내는 별명을 입력해주세요"
          onChange={(name) => setUserName(name)}
        />
        <StSubTitle>{neososeoFormData.userName}님과의 관계를 선택해주세요</StSubTitle>
        <StRelationWrapper>
          {neososeoFormData.relation.map((relation) => (
            <StRelation
              key={relation}
              selected={neososeoAnswerState.relation === relation}
              onClick={() => setRelation(relation)}
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
