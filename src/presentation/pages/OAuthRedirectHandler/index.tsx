import { kakaoAuthTokenState ,kakaoAccessToken, kakaoRefreshToken } from "@stores/kakao-auth";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {CLIENT_ID,REDIRECT_URI} from '@components/LoginForm/OAuth';

const OAuthRedirectHandler = () => {
    const navigate = useNavigate();
    const setKakaoToken = useSetRecoilState(kakaoAuthTokenState);
    const setKakaoAccessToken = useSetRecoilState(kakaoAccessToken);
    const setKakaoRefreshToken = useSetRecoilState(kakaoRefreshToken);

    useEffect(()=>{
        const code = new URL(window.location.href).searchParams.get('code');
        setKakaoToken(code??''); //인가코드
        navigate('/join');
        if(code){
            getKakaoTokenHandler(code.toString());
        }
    },[]);

    //토큰 발급 REST API
    const getKakaoTokenHandler = async(code:string) => {
        const data:any = {
            grant_type: "authorization_code",
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            code: code
        }
        const queryString = Object.keys(data)
        .map((k:any)=> encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');

        console.log("쿼리스트링",queryString);

        axios.post('https://kauth.kakao.com/oauth/token',queryString,{
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }) .then((res)=>{
            //서버에 토큰 전송
            console.log("Res",res);
            setKakaoAccessToken(res.data.access_token);
            setKakaoRefreshToken(res.data.refresh_token);
        })
    }

    return (
        <>   
        </>
    );
};

export default OAuthRedirectHandler;