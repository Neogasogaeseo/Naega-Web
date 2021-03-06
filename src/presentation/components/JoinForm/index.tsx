import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postJoin } from '@api/login-user';
import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import { kakaoAccessTokenState, kakaoRefreshTokenState } from '@stores/kakao-auth';
import CommonLabel from '@components/common/Label';
import CommonInput from '@components/common/Input';
import { StJoinForm, StInputWrapper, StButton } from './style';
import { StErrorMsg } from '@components/common/Input/style';
import { icProfile, icEmail, icPencil } from '@assets/icons';
import ImageUpload from '@components/common/ImageUpload';
import useImageUpload from '@hooks/useImageUpload';
import BottomSheet from '@components/common/BottomSheet';

function JoinForm() {
  const accessToken = useRecoilValue(kakaoAccessTokenState);
  const refreshToken = useRecoilValue(kakaoRefreshTokenState);
  const [isJoinConditionPassed, setIsJoinConditionPassed] = useState({
    id: false,
    name: false,
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const { saveLoginUser } = useLoginUser();
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();

  useEffect(() => {
    const idCheck = /^[a-z|0-9|.|_]{4,15}$/;
    const idStartCheck = /^[a-z]/;

    if (!inputId) {
      setErrorMsg('');
      return;
    }

    setIsJoinConditionPassed({
      id: idCheck.test(inputId) && idStartCheck.test(inputId),
      name: inputName !== '',
    });

    if (inputId) {
      if (!idCheck.test(inputId)) {
        setErrorMsg('*영문 소문자, 숫자, 특수문자(._) 4~15자 이내');
      } else if (!idStartCheck.test(inputId)) {
        setErrorMsg('*아이디의 첫 글자는 영문 소문자');
      } else {
        setErrorMsg('');
      }
    }
  }, [inputId, inputName]);

  const onClickSubmitUserInfo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('profileId', inputId);
      form.append('name', inputName);
      image && form.append('image', image);
      form.append('provider', 'kakao');
      form.append('accesstoken', accessToken);
      form.append('refreshtoken', refreshToken);

      const response = await postJoin(form);
      if (response.status === 200) {
        saveLoginUser({
          id: response.data.user,
          accessToken: response.data.accesstoken,
          username: response.data.user.name,
          userID: response.data.user.profileId,
          profileImage: response.data.user.image,
        });
        navigate('/join/complete');
      } else {
        fireToast({ content: '중복된 아이디입니다.' });
      }
    } catch (error) {
      console.error(error);
      navigate('/');
    }
  };

  return (
    <>
      <StJoinForm>
        <h1>회원가입</h1>
        <ImageUpload
          styles={{
            width: '118px',
            height: '118px',
            borderRadius: '50%',
          }}
          defaultChildren={{
            src: icPencil,
            styles: { width: '32.29px', right: '117px' },
          }}
          {...imageUploadProps}
        >
          <img src={icProfile} />
        </ImageUpload>
        <StInputWrapper>
          <CommonLabel content="아이디" marginTop="44px" marginBottom="20px" />
          <CommonInput
            width="100%"
            placeholder="neososeo_team"
            onChange={(value) => {
              setInputId(value);
            }}
            maxLength={15}
            img={icEmail}
          />
          <StErrorMsg>{errorMsg}</StErrorMsg>
          <CommonLabel content="이름" marginTop="44px" marginBottom="20px" />
          <CommonInput
            width="100%"
            placeholder="이름을 입력해주세요"
            onChange={(value) => {
              setInputName(value);
            }}
            maxLength={6}
          />
        </StInputWrapper>
        <StButton
          type="submit"
          onClick={onClickSubmitUserInfo}
          disabled={!Object.values(isJoinConditionPassed).every((condition) => condition === true)}
        >
          완료
        </StButton>
      </StJoinForm>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </>
  );
}

export default JoinForm;
