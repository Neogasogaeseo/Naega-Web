import React, { useEffect, useState } from 'react';
import {
  StJoinForm,
  StNoticeWrapper,
  StInputWrapper,
  StButton,
  StProfileImg,
  StPhotoUploadImage,
} from './style';
import CommonInput from '@components/common/CommonInput';
import FileUpload from '@components/common/FileUpload';
import { icProfile, icEmail } from '@assets/icons';
import { useRecoilValue } from 'recoil';
import { kakaoAccessTokenState, kakaoRefreshTokenState } from '@stores/kakao-auth';
import { postJoin } from '@api/login-user';
import { useLoginUser } from '@hooks/useLoginUser';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@hooks/useToast';

function JoinForm() {
  const accessToken = useRecoilValue(kakaoAccessTokenState);
  const refreshToken = useRecoilValue(kakaoRefreshTokenState);
  const [isConditionMet, setIsConditionMet] = useState({
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
      if (response.data) {
        saveLoginUser({
          id: response.user,
          accessToken: response.accesstoken,
          username: response.user.name,
          userID: response.user.profileId,
          profileImage: response.user.image,
        });
        navigate('/join/complete');
      } else {
        fireToast({ content: '중복된 아이디입니다. ' });
      }
    } catch (error) {
      console.error(error); //나중에 또 처리합시다.
    }
  };

  return (
    <StJoinForm>
      <StNoticeWrapper>
        회원가입
      </StNoticeWrapper>
      <StProfileImg>
        <FileUpload width="118px" height="118px" setFile={setImage} borderRadius="80px">
          <StPhotoUploadImage src={icProfile} />
        </FileUpload>
      </StProfileImg>
      <StInputWrapper>
        <p>아이디</p>
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
        <p>이름</p>
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
