import lottie from 'lottie-web';
import NeogaLottie from './NeogaLandingLottie.json';
import { useEffect } from 'react';

function NeogaLandingLottie(){
    useEffect(()=>{
        const component = document.querySelector("#neogaContainer");
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
        <div id="neogaContainer" style={{ width: '390px', height: '156px', margin: '-30px 0px 0px 0px'  }} />
    );
};

export default NeogaLandingLottie;