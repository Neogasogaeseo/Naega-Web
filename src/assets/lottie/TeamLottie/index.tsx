import lottie from 'lottie-web';
import NeogaLottie from './TeamLandingLottie.json';
import { useEffect } from 'react';

function TeamLandingLottie(){
    useEffect(()=>{
        const component = document.querySelector("#teamContainer");
        component &&
            lottie.loadAnimation({
            container: component,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: NeogaLottie,
        });
    },[]);
    return (
        <div id="teamContainer" style={{ width: '390px', height: '86px'}} />
    );
};

export default TeamLandingLottie;