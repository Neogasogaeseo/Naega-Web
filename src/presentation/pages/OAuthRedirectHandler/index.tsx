/* eslint-disable @typescript-eslint/no-unused-vars */
import { kakaoAccessTokenState,kakaoRefreshTokenState } from "@stores/kakao-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { postLogin } from '@api/login-user';
import { useLoginUser } from '@hooks/useLoginUser';

const OAuthRedirectHandler = () => {
    const navigate = useNavigate();
    const {setAccessToken} = useLoginUser();
    const setKakaoAccessToken = useSetRecoilState(kakaoAccessTokenState);
    const setKakaoRefreshToken = useSetRecoilState(kakaoRefreshTokenState);

    useEffect(()=>{
        const code = new URL(window.location.href).searchParams.get('code') ?? ''; //인가코드
        //if(code)  getKakaoTokenHandler(code.toString())
        console.log(code);
        postLogin(code).then(response => {
            if(response.authUser) {
                setAccessToken(response.accesstoken);
                navigate("/home");
            } else {
                setKakaoAccessToken(response.accesstoken);
                setKakaoRefreshToken(response.refreshtoken);
                navigate('/join');
            }
        })

        
       /*
        1. postLogin에서 내가 회원가입한 적이 있는지 검사
        2-1. 회워낙입한 적이 있따면 SETaCEESSToken해주고 메인페이지로 navigate
        2-2. 회원가입한 적이 없다면 밑에꺼 그대로
        */
    },[]);

    /*
    useEffect(()=>{
        if(kakaoToken==='') return
        console.log(kakaoToken)
        postLogin(kakaoToken).then(response => {
            if(response.authUser) {
                setAccessToken(response.accesstoken)
                navigate("/home")
            } else {navigate('/join'); }
        })
    }, [kakaoToken])
*/
    //토큰 발급 REST API
    // const getKakaoTokenHandler = async (code:string) => {
    //     const data:any = {
    //         grant_type: "authorization_code",
    //         client_id: CLIENT_ID,
    //         redirect_uri: REDIRECT_URI,
    //         code: code
    //     }
    //     const queryString = Object.keys(data)
    //     .map((k:any)=> encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    //     .join('&');

    //     console.log("쿼리스트링",queryString);

    //     axios.post('https://kauth.kakao.com/oauth/token',queryString,{
    //         headers: {
    //             'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //         }
    //     }) .then((res)=>{
    //         //서버에 토큰 전송
    //         console.log("Res",res);
    //         setKakaoAccessToken(res.data.access_token);
    //         setKakaoRefreshToken(res.data.refresh_token);
    //     })
    // }

    return (
        <>   
        </>
    );
};

export default OAuthRedirectHandler;