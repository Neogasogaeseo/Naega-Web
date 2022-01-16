import { api } from '@api/index';
import { Keyword } from '@api/types/user';
import CommonInput from '@components/common/CommonInput';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { neoseosoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { StButton, StNeososeoFormLayout, StNeososeoTitle, StSubTitle } from '../style';
import { StTextarea, StKeywordListWrapper } from './style';

function NeososeoFormAnswer() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
  const [neososeoAnswerState, setNeososeoAnswerState] = useRecoilState(neoseosoAnswerState);
  const navigate = useNavigate();

  const postNeososeoForm = async () => {
    const response = await api.neososeoFormService.postFormAnswer(neososeoAnswerState);
    if (response.isSuccess) navigate('../finish');
  };

  const setAnswer = (answer: string) => setNeososeoAnswerState((prev) => ({ ...prev, answer }));

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
            <ImmutableKeywordList
              keywordList={neososeoAnswerState.keyword}
              onItemClick={() => null}
            />
          </StKeywordListWrapper>
        </div>
        <StButton onClick={postNeososeoForm}>답변 작성하기</StButton>
      </StNeososeoFormLayout>
      <Outlet
        context={{
          keywordList: neososeoAnswerState.keyword,
          addKeyword: (keyword: Keyword) =>
            setNeososeoAnswerState((prev) => ({
              ...prev,
              keyword: prev.keyword.map((k) => k.content).includes(keyword.content)
                ? prev.keyword
                : [...prev.keyword, keyword],
            })),
          removeKeyword: (targetKeyword: Keyword) =>
            setNeososeoAnswerState((prev) => ({
              ...prev,
              keyword: prev.keyword.filter((keyword) => keyword.content !== targetKeyword.content),
            })),
          targetUser: neososeoFormData.userID,
        }}
      />
    </>
  );
}

export default NeososeoFormAnswer;
