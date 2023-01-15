import { api } from '@api/index';
import { NeososeoFormData } from '@api/types/neososeo-form';
import { Keyword } from '@api/types/user';
import { ImgPage2 } from '@assets/images';
import { StInput } from '@components/common/Input/style';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import CommonNavigation from '@components/common/Navigation';
import NeososeoFormHeader from '@components/NeososeoFormHeader';
import { neososeoAnswerState } from '@stores/neososeo-form';
import { isAllFilled } from '@utils/string';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { StButton, StNeososeoFormLayout, StNeososeoTitle, StSubTitle } from '../style';
import { StKeywordListWrapper, StTextarea } from './style';

interface OutletContextProps {
  neososeoFormData: NeososeoFormData;
}

function NeososeoFormAnswer() {
  const { neososeoFormData } = useOutletContext<OutletContextProps>();
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  const [neososeoAnswer, setNeososeoAnswer] = useRecoilState(neososeoAnswerState);
  const resetNeososeoAnswer = useResetRecoilState(neososeoAnswerState);
  const navigate = useNavigate();

  const postNeososeoForm = async () => {
    const response = await api.neososeoFormService.postFormAnswer({
      ...neososeoAnswer,
      userID: neososeoFormData.userID,
      formID: neososeoFormData.createdID,
    });
    if (response.isSuccess) {
      resetNeososeoAnswer();
      navigate('../finish');
    }
  };

  const setAnswer = (answer: string) => setNeososeoAnswer((prev) => ({ ...prev, answer }));

  useEffect(() => {
    setNeososeoAnswer((prev) => ({ ...prev, keyword: keywordList.map((k) => k.id) }));
  }, [keywordList]);

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
          <StSubTitle>답변을 입력해주세요</StSubTitle>
          <StTextarea
            placeholder="질문에 대한 답변을 입력해주세요"
            onChange={(e) => setAnswer(e.target.value)}
            defaultValue={neososeoAnswer.answer}
          />
          <StSubTitle>답변에 대한 {neososeoFormData.userName}의 키워드를 남겨주세요</StSubTitle>
          <Link to="keyword">
            <StInput width="100%" placeholder="답변을 키워드로 요악해주세요" disabled />
          </Link>
          <StKeywordListWrapper>
            <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
          </StKeywordListWrapper>
        </div>
        <div>
          <ImgPage2 />
          <StButton
            disabled={!isAllFilled(neososeoAnswer.answer) || !(neososeoAnswer.keyword.length !== 0)}
            onClick={postNeososeoForm}
          >
            답변 제출하기
          </StButton>
        </div>
      </StNeososeoFormLayout>
      <Outlet
        context={{
          keywordList: keywordList,
          addKeyword: (keyword: Keyword) => {
            setKeywordList((prev) =>
              prev.map((prev) => prev.id).includes(keyword.id) ? prev : [...prev, keyword],
            );
          },
          removeKeyword: (targetKeyword: Keyword) =>
            setKeywordList((prev) => prev.filter((keyword) => keyword.id !== targetKeyword.id)),
          targetUser: { id: neososeoFormData.userID, profileName: neososeoFormData.userName },
        }}
      />
    </>
  );
}

export default NeososeoFormAnswer;
