import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { neososeoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { isAllFilled } from '@utils/string';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { StButton, StNeososeoFormLayout, StNeososeoTitle, StSubTitle } from '../style';
import { StTextarea, StKeywordListWrapper } from './style';

function NeososeoFormAnswer() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
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

  if (!neososeoFormData) return <></>;

  return (
    <>
      <StNeososeoFormLayout>
        <div>
          <StNeososeoTitle>
            <span>Q.</span>
            <span>{neososeoFormData.content}</span>
          </StNeososeoTitle>
          <StSubTitle>답변 내용을 입력해주세요.</StSubTitle>
          <StTextarea placeholder="직접 입력해주세요" onChange={(e) => setAnswer(e.target.value)} />
          <StSubTitle>키워드를 입력해주세요.</StSubTitle>
          <Link to="keyword">
            <CommonInput
              width="100%"
              placeholder="팀원을 표현하는 키워드를 입력해주세요."
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
          답변 작성하기
        </StButton>
      </StNeososeoFormLayout>
      <Outlet
        context={{
          keywordList: keywordList,
          addKeyword: (keyword: Keyword) =>
            setKeywordList((prev) =>
              prev.map((prev) => prev.content).includes(keyword.content)
                ? prev
                : [...prev, keyword],
            ),
          removeKeyword: (targetKeyword: Keyword) =>
            setKeywordList((prev) =>
              prev.filter((keyword) => keyword.content !== targetKeyword.content),
            ),
          targetUser: neososeoFormData.userID,
        }}
      />
    </>
  );
}

export default NeososeoFormAnswer;
