import { Relation } from '@api/types/neososeo-form';
import CommonInput from '@components/common/CommonInput';
import { neososeoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { isAllFilled } from '@utils/string';
import { useEffect, useState } from 'react';
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
  const [relation, setRelation] = useState<Relation | null>(null);
  const [neososeoAnswer, setNeososeoAnswer] = useRecoilState(neososeoAnswerState);
  const navigate = useNavigate();

  const setUserName = (userName: string) =>
    setNeososeoAnswer((prev) => ({ ...prev, name: userName }));

  const setAnswerRelation = (relationID: number) =>
    setNeososeoAnswer((prev) => ({ ...prev, relationID }));

  useEffect(() => {
    if (!relation) return;
    setAnswerRelation(relation.id);
  }, [relation]);

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
        <StSubTitle>이름을 입력해주세요</StSubTitle>
        <CommonInput
          width="100%"
          placeholder="당신의 이름이나 별명을 입력해주세요"
          onChange={(name) => setUserName(name)}
        />
        <StSubTitle>{neososeoFormData.userName}님은 당신에게 어떤 사람인가요?</StSubTitle>
        <StRelationWrapper>
          {neososeoFormData.relation.map((relation) => (
            <StRelation
              key={relation.id}
              selected={neososeoAnswer.relationID === relation.id}
              onClick={() => setRelation(relation)}
            >
              {relation.content}
            </StRelation>
          ))}
        </StRelationWrapper>
      </div>
      <StButton onClick={() => navigate('../answer')} disabled={!isAllFilled(neososeoAnswer.name)}>
        다음
      </StButton>
    </StNeososeoFormLayout>
  );
}

export default NeososeoFormIntro;
