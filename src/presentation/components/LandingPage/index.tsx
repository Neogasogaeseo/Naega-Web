import {
  imgLogo,
  ImgMainPage,
  ImgMypage,
  ImgTeamsoseo,
  ImgGlass,
  ImgLink,
  ImgLanding,
} from '@assets/images';
import { useNavigate } from 'react-router-dom';
import {
  StLogin,
  StHeader,
  StMain,
  StContent,
  StServiceButton,
  StMiddle,
  StMiddleTitle,
  StMiddleContent,
  StMiddleBlack,
  StFooter,
  StMiddleMypage,
  StImgMainPhone,
} from './style';
import NeogaLottie from '@assets/lottie/NeogaLottie';
import TeamLottie from '@assets/lottie/TeamLottie';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <StHeader>
        <img src={imgLogo}></img>
        <StLogin
          onClick={() => {
            navigate(`/login`);
          }}
        >
          로그인
        </StLogin>
      </StHeader>
      <StMain>
        <p>나와 함께한 당신이 써 주는</p>
        <h2>너가소개서</h2>
        <StContent>
          내가 스스로 말하기는 낯간지럽고
          <br />
          누군가 나를 대신 설명해줬음 할 때,
        </StContent>
        <img src={ImgMainPage} />
        <StServiceButton
          isBlack={false}
          onClick={() => {
            navigate(`/login`);
          }}
        >
          너가소개서 받으러 가기
        </StServiceButton>
      </StMain>
      <StMiddle style={{ position: 'relative' }}>
        <StMiddleTitle>
          <h2>
            나를 알아갈 수 있는
            <br />
            다양한 질문, <span> 너가소개서</span>
          </h2>
        </StMiddleTitle>
        <StMiddleContent>
          주변에 궁금했던 설문을 골라<br />
          친구들의 답변으로 새로운 나를 발견하세요
        </StMiddleContent>
        <StImgMainPhone>
          <img src={ImgLanding} />
        </StImgMainPhone>
        <NeogaLottie />
      </StMiddle>
      <StMiddleTitle>
        <h2>
          <span>링크</span>를 통해 간편하게<br />
          답변을 받아보세요
        </h2>
        <img src={ImgLink} />
      </StMiddleTitle>
      <StMiddleMypage>
        <StMiddleBlack>
          <h2>
            <span>팀원소개서</span>로<br />
            협업 경험을 기록해보세요.
          </h2>
          <StMiddleContent>
            팀원들과 협업하며 일어난 이슈들을 기록하고<br />
            그에 대한 피드백을 주고 받으세요!
          </StMiddleContent>
          <TeamLottie />
          <img src={ImgTeamsoseo} />
        </StMiddleBlack>
        <StMiddleTitle>
          <h2>
            마음에 들었던 소개로
            <br />
            <span>MY</span>를 채우고 공유하세요
          </h2>
        </StMiddleTitle>
        <StMiddleContent>
          나를 잘 표현하는 소개를 pick하고<br />
          링크로 공유해서 주변에 자랑해보세요
        </StMiddleContent>
        <img src={ImgMypage} />
      </StMiddleMypage>
      <StFooter>
        <h2>
          나의 너가소개서도
          <br />
          궁금하다면?
        </h2>
        <img src={ImgGlass} />
        <StServiceButton
          isBlack={true}
          onClick={() => {
            navigate(`/login`);
          }}
        >
          지금 시작하기
        </StServiceButton>
      </StFooter>
    </div>
  );
}

export default LandingPage;
