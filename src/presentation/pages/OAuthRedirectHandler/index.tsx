/* eslint-disable @typescript-eslint/no-unused-vars */
import { kakaoAuthTokenState } from "@stores/kakao-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const OAuthRedirectHandler = () => {
    const navigate = useNavigate();
    const setKakaoToken = useSetRecoilState(kakaoAuthTokenState);
    useEffect(()=>{
        const code = new URL(window.location.href).searchParams.get('code');
        setKakaoToken(code??'');
        console.log(code);
        navigate('/join');
    },[]);
    console.log("들어옴");

    return (
        <div>
            
        </div>
    );
};

export default OAuthRedirectHandler;