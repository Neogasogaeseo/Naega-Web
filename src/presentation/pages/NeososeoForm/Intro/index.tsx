import { NeososeoFormData, Relation } from '@api/types/neososeo-form';
import { ImgPage1 } from '@assets/images';
import CommonInput from '@components/common/Input';
import CommonNavigation from '@components/common/Navigation';
import NeososeoFormHeader from '@components/NeososeoFormHeader';
import { neososeoAnswerState } from '@stores/neososeo-form';
import { isAllFilled } from '@utils/string';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  StButton,
  StNeososeoFormLayout,
  StNeososeoTitle,
  StRelation,
  StRelationWrapper,
  StSubTitle,
} from '../style';

interface OutletContextProps {
  neososeoFormData: NeososeoFormData;
}

function NeososeoFormIntro() {
  const { neososeoFormData } = useOutletContext<OutletContextProps>();
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
    setRelation(
      neososeoFormData.relation.find((relation) => relation.id === neososeoAnswer.relationID) ??
        neososeoFormData.relation[0],
    );
  }, [neososeoFormData]);

  return (
    <>
      <CommonNavigation />
      <StNeososeoFormLayout>
        <div>
          <NeososeoFormHeader title={neososeoFormData.title} image={neososeoFormData.imageSub} />
          <StNeososeoTitle>
            <span>Q.</span>
            <span>{neososeoFormData.content}</span>
          </StNeososeoTitle>
          <div>
            <StSubTitle>이름을 입력해주세요</StSubTitle>
            <CommonInput
              value={neososeoAnswer.name}
              width="100%"
              placeholder="당신의 이름이나 별명을 입력해주세요"
              onChange={(name) => setUserName(name)}
              defaultValue={neososeoAnswer.name}
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
        </div>
        <div>
          <ImgPage1 />
          <StButton
            onClick={() => navigate('../answer')}
            disabled={!isAllFilled(neososeoAnswer.name)}
          >
            다음
          </StButton>
        </div>
      </StNeososeoFormLayout>
    </>
  );
}

export default NeososeoFormIntro;
