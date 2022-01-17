import {imgLogo,ImgMainPage,ImgMainPhone} from '@assets/images';
import { useNavigate } from 'react-router-dom';
import {
    StLandingPage,
    StLogoImg,
    StLogin,
    StHeader,
    StMain,
    StContent,
    StMainImg,
    StServiceButton,
    StMiddle,
    StMiddleTitle,
    StMiddleContent,
} from './style';

function LandingPage(){
    const navigate = useNavigate();
    return (
        <StLandingPage>
            <StHeader>
                <StLogoImg src={imgLogo}></StLogoImg>
                <StLogin onClick={()=>{
                    navigate(`/login`);
                }}>로그인</StLogin>
            </StHeader>
            <StMain>
                <p>너가 나좀..소개해줄래?</p>
                <h2>너를 통해 발견하는 나</h2>
                <StContent>내가 나를 말하기는 낯 간지럽고<br/>
                누군가 이렇게 괜찮은 나를 설명해줬음 할 때<br/>
                모두 너가소개서 하세요!
                </StContent>
                <StMainImg src={ImgMainPage} />
                <StServiceButton onClick={()=>{
                    navigate(`/login`);
                }}>서비스 시작하기</StServiceButton>
            </StMain>
            <StMiddle>
                <StMiddleTitle>
                <h2>나를 알아갈 수 있는<br/>
                다양한 질문, 너가소개서</h2>
                </StMiddleTitle>
                <StMiddleContent>
                    주변에 궁금했던 설문을 골라 <br/>
                    친구들의 답변으로 새로운 나를 발견하세요
                </StMiddleContent>
                {/* <StMiddleImg src={ImgMainPhone}></StMiddleImg> */}
                <ImgMainPhone />
            </StMiddle>
        </StLandingPage>
    );
};

export default LandingPage;