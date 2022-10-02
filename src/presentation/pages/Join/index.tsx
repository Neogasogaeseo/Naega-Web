import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import CommonLabel from '@components/common/Label';
import CommonInput from '@components/common/Input';
import { StJoin, StButton } from './style';
import { icProfile, icEmail, icCameraMainCoral } from '@assets/icons';
import ImageUpload from '@components/common/ImageUpload';
import useImageUpload from '@hooks/useImageUpload';
import BottomSheet from '@components/common/BottomSheet';
import { api } from '@api/index';

export default function Join() {
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

      const loginUser = await api.loginUserService.postUserInfo(form);
      if (loginUser) {
        saveLoginUser(loginUser);
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
      <StJoin>
        <h1>회원가입</h1>
        <ImageUpload
          styles={{
            width: '118px',
            height: '118px',
            borderRadius: '50%',
          }}
          defaultChildren={{
            src: icCameraMainCoral,
            styles: { width: '32.29px' },
          }}
          {...imageUploadProps}
        >
          <img src={icProfile} />
        </ImageUpload>
        <CommonLabel content="아이디" marginTop="44px" marginBottom="20px" />
        <CommonInput
          value={inputId}
          width="100%"
          placeholder="neososeo_team"
          onChange={(value) => {
            setInputId(value);
          }}
          maxLength={15}
          img={icEmail}
        />
        <CommonLabel content="이름" marginTop="44px" marginBottom="20px" />
        <CommonInput
          value={inputName}
          errorMsg={errorMsg}
          width="100%"
          placeholder="이름을 입력해주세요"
          onChange={(value) => setInputName(value)}
          maxLength={6}
        />
        <StButton
          type="submit"
          onClick={onClickSubmitUserInfo}
          disabled={!Object.values(isJoinConditionPassed).every((condition) => condition === true)}
        >
          완료
        </StButton>
      </StJoin>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </>
  );
}
