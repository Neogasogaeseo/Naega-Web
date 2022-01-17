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
import { icProfile } from '@assets/icons';
import { icEmail } from '@assets/icons';

function JoinForm() {
  const [isConditionMet, setIsConditionMet] = useState({
    id: false,
    name: false,
  });
  const [image, setImage] = useState<File | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');

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
  const onClickSubmitUserInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
