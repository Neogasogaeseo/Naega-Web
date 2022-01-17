import styled from 'styled-components';
import {COLOR} from '@styles/common/color';

export const StLandingPage = styled.div``;
export const StHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 16px 48px 20px;
    align-items: center;
`;
export const StLogoImg = styled.img``;
export const StLogin = styled.button`
    width: 58px;
    height: 27px;
    background-color: ${COLOR.CORAL_MAIN};
    color: white;
    border-radius: 13.5px;
`;
export const StMainImg = styled.img``;
export const StMain = styled.div`
    text-align: center;
    letter-spacing: -0.01em;
&>p{
    font-weight: 600;
    font-size: 16px;
    line-height: 162%;
    color: ${COLOR.CORAL_MAIN};
}
&>h2{
    font-weight: 600;
    font-size: 24px;
    line-height: 143.99%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
}
`;
export const StContent = styled.div`
    font-size: 15px;
    line-height: 100%;
    text-align: center;
    line-height: 21px;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_6};
    margin: 17px 0px 56px 0px;
`;

export const StServiceButton = styled.button`
    width: 202px;
    height: 52px;
    display: block;
    background-color: ${COLOR.CORAL_MAIN};
    color: white;
    border-radius: 18px;
    margin: 57.6px 0px 0px 90px;
`;

export const StMiddle = styled.div`
    width: 100%;
    height: 852px;
    background-color: ${COLOR.GRAY_1};
    margin-top: 69px;
`;

export const StMiddleTitle = styled.div`
&>h2{
    margin: 70px 0px 20px 0px;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
}
`;
export const StMiddleContent = styled.div`
    font-size: 15px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_5};
    margin-bottom: 22px;
`;
export const StMiddleImg = styled.img``;

