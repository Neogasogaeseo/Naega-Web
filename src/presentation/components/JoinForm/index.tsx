import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postJoin } from '@api/login-user';
import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import { kakaoAccessTokenState, kakaoRefreshTokenState } from '@stores/kakao-auth';
import CommonLabel from '@components/common/CommonLabel';
import CommonInput from '@components/common/CommonInput';
import FileUpload from '@components/common/FileUpload';
import { icProfile, icEmail } from '@assets/icons';
import {
  StJoinForm,
  StNoticeWrapper,
  StInputWrapper,
  StButton,
  StProfileImg,
  StPhotoUploadImage,
} from './style';

function JoinForm() {
  const accessToken = useRecoilValue(kakaoAccessTokenState);
  const refreshToken = useRecoilValue(kakaoRefreshTokenState);
  const [isJoinConditionPassed, setIsJoinConditionPassed] = useState({
    id: false,
    name: false,
  });
  const [image, setImage] = useState<File | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const { saveLoginUser } = useLoginUser();
  const navigate = useNavigate();
  const { fireToast } = useToast();

  useEffect(() => {
    const idCheck = /^[a-z|0-9|.|_]+$/;
    const idStartCheck = /^[^.|^_]/;
    setIsJoinConditionPassed({
      ...isJoinConditionPassed,
      id: idCheck.test(inputId) && idStartCheck.test(inputId),
    });
  }, [inputId]);

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
    <StJoinForm>
      <StNoticeWrapper>회원가입</StNoticeWrapper>
      <StProfileImg>
        <FileUpload width="118px" height="118px" setFile={setImage} borderRadius="80px">
          <StPhotoUploadImage src={icProfile} />
        </FileUpload>
      </StProfileImg>
      <StInputWrapper>
      <CommonLabel content="아이디" marginTop="44px" marginBottom="20px" />
        <CommonInput
          width="100%"
          isJoinConditionPassed={isJoinConditionPassed.id}
          errorMsg="*영문, 숫자, 특수문자(._) 4~15자 이내"
          placeholder="neososeo_team"
          onChange={(value: string) => {
            setInputId(value);
          }}
          maxLength={20}
          img={icEmail}
        />
        <CommonLabel content="이름" marginTop="44px" marginBottom="20px" />
        <CommonInput
          width="100%"
          isJoinConditionPassed={isJoinConditionPassed.name}
          placeholder="이름을 입력해주세요"
          onChange={(value: string) => {
            setInputName(value);
          }}
        />
      </StInputWrapper>
      <StButton
        type="submit"
        onClick={onClickSubmitUserInfo}
        disabled={inputId === '' || inputName === '' || !isJoinConditionPassed.id}
      >
        완료
      </StButton>
    </StJoinForm>
  );
}

export default JoinForm;
