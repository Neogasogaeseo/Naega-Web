/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  StJoinForm,
  StDetailWrapper,
  StNoticeWrapper,
  StInputWrapper,
  StButton,
  StProfileImg,
  StPhotoUploadImage,
} from './style';
import CommonInput from '@components/common/CommonInput';
import FileUpload from '@components/common/FileUpload';
import { icProfile,icEmail } from '@assets/icons';
import { useRecoilValue } from 'recoil';
import {kakaoAccessToken,kakaoRefreshToken} from "@stores/kakao-auth";
import {postJoin} from '@api/login-user';
import { Navigate } from 'react-router-dom';


function JoinForm() {
  const accessToken = useRecoilValue(kakaoAccessToken);
  const refreshToken = useRecoilValue(kakaoRefreshToken);
  console.log("조인페이지코드",accessToken);
  console.log("조인페이지코드2",refreshToken);
  const [isConditionMet, setIsConditionMet] = useState({
    id: false,
    name: false,
  });
  const [image, setImage] = useState<File | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [userData, setUserData] = useState({
    id: inputId,
    name: inputName,
    image: '',
    provider:'카카오톡',
    accesstoken: accessToken,
    refreshtoken: refreshToken,
  })

  useEffect(() => {
    const idCheck = /^[a-z|0-9|.|_]+$/;
    const idStartCheck = /^[^.|^_]/;
    if (idCheck.test(inputId) && idStartCheck.test(inputId)) {
      setIsConditionMet({ ...isConditionMet, id: true });
    } else {
      setIsConditionMet({ ...isConditionMet, id: false });
    }
  }, [inputId]);

  const onChangeId = (value: string) => {
    setInputId(value);
  };
  const onChangeName = (value: string) => {
    setInputName(value);
  };
  const onClickSubmitUserInfo = async()=> {
    const postData = {
      profileId: userData.id,
      name: userData.name,
      image: userData.image,
      provider: userData.provider,
      accesstoken: userData.accesstoken,
      refreshtoken: userData.refreshtoken,
    };
    const getData = await postJoin(postData);
    getData;
  };
  return (
    <StJoinForm>
      <StNoticeWrapper>
        아이디와 사용자 이름을
        <br /> 입력해주세요
      </StNoticeWrapper>
      <StDetailWrapper>너가소개서에서 사용되는 이름이에요!</StDetailWrapper>
      <StProfileImg>
        <FileUpload width="118px" height="118px" setFile={setImage} borderRadius="80px">
          <StPhotoUploadImage src={icProfile} />
        </FileUpload>
      </StProfileImg>
      <StInputWrapper>
        <p>아이디 입력</p>
        <CommonInput
          width="350px"
          isConditionMet={isConditionMet.id}
          errorMsg="*영문, 숫자, 특수문자(._) 4~15자 이내"
          placeholder="neososeo_team"
          onChange={onChangeId}
          maxLength={20}
          img={icEmail}
        />
      </StInputWrapper>
      <StInputWrapper>
        <p>사용자 이름 입력</p>
        <CommonInput
          width="350px"
          isConditionMet={isConditionMet.name}
          placeholder="너소서"
          onChange={onChangeName}
        />
      </StInputWrapper>
      <StButton
        type="submit"
        onClick={onClickSubmitUserInfo}
        disabled={inputId === '' || inputName === '' || !isConditionMet.id}
      >
        완료
      </StButton>
    </StJoinForm>
  );
}

export default JoinForm;
