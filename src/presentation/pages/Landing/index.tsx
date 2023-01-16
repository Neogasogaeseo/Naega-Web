import {
  imgGlass,
  imgLanding,
  imgLink,
  imgMainPage,
  imgMypage,
  imgTeamsoseo,
} from '@assets/images';
import TeamLandingLottie from '@assets/lottie/TeamLottie';
import CommonHeader from '@components/common/Header';
import { GaAction, GaCategory, useGoogleAnalytics } from '@hooks/useGoogleAnalytics';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StFooter,
  StLandingWrapper,
  StMain,
  StMiddleBlack,
  StMiddleContent,
  StMiddleMypage,
  StMiddleNeososeo,
  StMiddleNeososeoAnswer,
  StMiddleTeamsoseo,
  StMiddleTitle,
  StServiceButton,
  StShadow,
} from './style';

function Landing() {
  const { isAuthenticated } = useLoginUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated]);

  const { makeGaEvent } = useGoogleAnalytics();

  return (
    <StLandingWrapper>
      <CommonHeader />
      <StMain>
        <p>나와 함께한 당신이 써 주는</p>
        <h2>너가소개서</h2>
        <div>
          내가 스스로 말하기는 낯간지럽고
          <br />
          누군가 나를 대신 설명해줬음 할 때,
        </div>
        <img src={imgMainPage} />
        <StShadow top={161} />
        <StServiceButton
          theme="coral"
          onClick={() => {
            makeGaEvent({
              category: GaCategory.LANDING,
              action: GaAction.CLICK,
              label: 'login_top',
            });
            navigate(`/login`);
          }}
        >
          너가소개서 받으러 가기
        </StServiceButton>
      </StMain>
      <StMiddleNeososeo>
        <StMiddleTitle>
          <h2>
            나를 알아갈 수 있는
            <br />
            다양한 질문, <span> 너가소개서</span>
          </h2>
        </StMiddleTitle>
        <StMiddleContent>
          주변에 궁금했던 설문을 골라
          <br />
          친구들의 답변으로 새로운 나를 발견하세요
        </StMiddleContent>
        <img src={imgLanding} />
      </StMiddleNeososeo>
      <StMiddleNeososeoAnswer>
        <StMiddleTitle>
          <h2>
            <span>링크</span>를 통해 간편하게
            <br />
            답변을 받아보세요
          </h2>
        </StMiddleTitle>
        <img src={imgLink} />
      </StMiddleNeososeoAnswer>
      <StMiddleTeamsoseo>
        <StMiddleBlack>
          <h2>
            <span>팀원소개서</span>로<br />
            협업 경험을 기록해보세요.
          </h2>
          <StMiddleContent>
            팀원들과 협업하며 일어난 이슈들을 기록하고
            <br />
            그에 대한 피드백을 주고 받으세요!
          </StMiddleContent>
          <TeamLandingLottie />
          <img src={imgTeamsoseo} />
        </StMiddleBlack>
      </StMiddleTeamsoseo>
      <StMiddleMypage>
        <StMiddleTitle>
          <h2>
            마음에 들었던 소개로
            <br />
            <span>MY</span>를 채우고 공유하세요
          </h2>
        </StMiddleTitle>
        <StMiddleContent>
          나를 잘 표현하는 소개를 pick하고
          <br />
          링크로 공유해서 주변에 자랑해보세요
        </StMiddleContent>
        <img src={imgMypage} />
        <StShadow top={172} />
        <StShadow top={640} />
      </StMiddleMypage>
      <StFooter>
        <h2>
          나의 너가소개서도
          <br />
          궁금하다면?
        </h2>
        <img src={imgGlass} />
        <StServiceButton
          theme="black"
          onClick={() => {
            makeGaEvent({
              category: GaCategory.LANDING,
              action: GaAction.CLICK,
              label: 'login_bottom',
            });
            navigate(`/login`);
          }}
        >
          지금 시작하기
        </StServiceButton>
      </StFooter>
    </StLandingWrapper>
  );
}

export default Landing;
