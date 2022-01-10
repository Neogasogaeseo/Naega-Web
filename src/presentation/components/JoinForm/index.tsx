/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  StJoinWrapper,
  StDetailWrapper,
  StNoticeWrapper,
  StInputWrapper,
  StButton,
  StProfileImg,
  StButtonGray,
  StPhotoUploadImage,
} from './style';
import CommonInput from '@components/common/CommonInput';
import FileUpload from '@components/common/FileUpload';
import { imgEmptyJoinProfile } from '@assets/images';
import { icEmail } from '@assets/icons';

function index() {
  const [isConditionMet, setIsConditionMet] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
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
    <StJoinWrapper>
      <StNoticeWrapper>
        아이디와 사용자 이름을
        <br /> 입력해주세요
      </StNoticeWrapper>
      <StDetailWrapper>너가소개서에서 사용되는 이름이에요!</StDetailWrapper>
      <StProfileImg>
        <FileUpload width="170px" height="170px" setFile={setImage} borderRadius="80px">
          <StPhotoUploadImage src={imgEmptyJoinProfile} />
        </FileUpload>
      </StProfileImg>
      <StInputWrapper>
        <p>아이디 입력</p>
        <CommonInput
          width="350px"
          isConditionMet={isConditionMet}
          errorMsg="*중복된 아이디입니다."
          placeholder="neososeo"
          onChange={onChangeId}
          img={icEmail}
        />
      </StInputWrapper>
      <StInputWrapper>
        <p>사용자 이름 입력</p>
        <CommonInput
          width="350px"
          isConditionMet={isConditionMet}
          placeholder="너소서"
          onChange={onChangeName}
        />
      </StInputWrapper>
      {inputId && inputName ? (
        <StButton onClick={onClickSubmitUserInfo}>완료</StButton>
      ) : (
        <StButtonGray>완료</StButtonGray>
      )}
    </StJoinWrapper>
  );
}

export default index;
