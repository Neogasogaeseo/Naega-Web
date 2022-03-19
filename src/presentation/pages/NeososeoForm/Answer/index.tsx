import { api } from '@api/index';
import { NeososeoFormData } from '@api/types/neososeo-form';
import { Keyword } from '@api/types/user';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { neososeoAnswerState } from '@stores/neososeo-form';
import { isAllFilled } from '@utils/string';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { StButton, StNeososeoFormLayout, StNeososeoTitle, StSubTitle } from '../style';
import { StTextarea, StKeywordListWrapper } from './style';

interface OutletContextProps {
  neososeoFormData: NeososeoFormData;
}

function NeososeoFormAnswer() {
  const { neososeoFormData } = useOutletContext<OutletContextProps>();
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  const [neososeoAnswer, setNeososeoAnswer] = useRecoilState(neososeoAnswerState);
  const navigate = useNavigate();

  const postNeososeoForm = async () => {
    const response = await api.neososeoFormService.postFormAnswer(neososeoAnswer);
    if (response.isSuccess) navigate('../finish');
  };

  const setAnswer = (answer: string) => setNeososeoAnswer((prev) => ({ ...prev, answer }));

  useEffect(() => {
    setNeososeoAnswer((prev) => ({ ...prev, keyword: keywordList.map((k) => k.id) }));
  }, [keywordList]);

  return (
    <>
      <StNeososeoFormLayout>
        <div>
          <StNeososeoTitle>
            <span>Q.</span>
            <span>{neososeoFormData.content}</span>
          </StNeososeoTitle>
          <StSubTitle>답변을 입력해주세요</StSubTitle>
          <StTextarea
            placeholder="질문에 대한 답변을 입력해주세요"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <StSubTitle>답변에 대한 내 키워드를 남겨주세요</StSubTitle>
          <Link to="keyword">
            <CommonInput
              width="100%"
              placeholder="답변의 핵심 키워드로 나를 표현해주세요"
              disabled
            />
          </Link>
          <StKeywordListWrapper>
            <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
          </StKeywordListWrapper>
        </div>
        <StButton
          disabled={!isAllFilled(neososeoAnswer.answer) || !(neososeoAnswer.keyword.length !== 0)}
          onClick={postNeososeoForm}
        >
          답변 제출하기
        </StButton>
      </StNeososeoFormLayout>
      <Outlet
        context={{
          keywordList: keywordList,
          addKeyword: (keyword: Keyword) =>
            setKeywordList((prev) =>
              prev.map((prev) => prev.id).includes(keyword.id) ? prev : [...prev, keyword],
            ),
          removeKeyword: (targetKeyword: Keyword) =>
            setKeywordList((prev) => prev.filter((keyword) => keyword.id !== targetKeyword.id)),
          targetUser: { id: neososeoFormData.userID, profileName: neososeoFormData.userName },
        }}
      />
    </>
  );
}

export default NeososeoFormAnswer;
