import { api } from '@api/index';
import { NeososeoFormData } from '@api/types/neososeo-form';
import { Keyword } from '@api/types/user';
import { ImgPage2 } from '@assets/images';
import CommonInput from '@components/common/Input';
import CommonNavigation from '@components/common/Navigation';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import NeososeoFormHeader from '@components/common/NeososeoFormHeader';
import { neososeoAnswerState } from '@stores/neososeo-form';
import { isAllFilled } from '@utils/string';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { StButton, StNeososeoFormLayout, StNeososeoTitle, StSubTitle } from '../style';
import { StTextarea, StKeywordListWrapper } from './style';
import { useToast } from '@hooks/useToast';

interface OutletContextProps {
  neososeoFormData: NeososeoFormData;
}

function NeososeoFormAnswer() {
  const { neososeoFormData } = useOutletContext<OutletContextProps>();
  const { fireToast } = useToast();
  const [keywordList, setKeywordList] = useState<Keyword[]>([]);
  const [neososeoAnswer, setNeososeoAnswer] = useRecoilState(neososeoAnswerState);
  const resetNeososeoAnswer = useResetRecoilState(neososeoAnswerState);
  const navigate = useNavigate();

  const postNeososeoForm = async () => {
    const response = await api.neososeoFormService.postFormAnswer({
      ...neososeoAnswer,
      userID: neososeoFormData.userID,
      formID: neososeoFormData.formID,
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
          <StSubTitle>????????? ??????????????????</StSubTitle>
          <StTextarea
            placeholder="????????? ?????? ????????? ??????????????????"
            onChange={(e) => setAnswer(e.target.value)}
            defaultValue={neososeoAnswer.answer}
          />
          <StSubTitle>????????? ?????? {neososeoFormData.userName}??? ???????????? ???????????????</StSubTitle>
          <Link to="keyword">
            <CommonInput width="100%" placeholder="????????? ???????????? ??????????????????" disabled />
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
            ?????? ????????????
          </StButton>
        </div>
      </StNeososeoFormLayout>
      <Outlet
        context={{
          keywordList: keywordList,
          addKeyword: (keyword: Keyword) => {
            if (keywordList.length < 2) {
              setKeywordList((prev) =>
                prev.map((prev) => prev.id).includes(keyword.id) ? prev : [...prev, keyword],
              );
            } else {
              fireToast({ content: '???????????? ?????? 2??? ????????? ??? ?????????' });
            }
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
