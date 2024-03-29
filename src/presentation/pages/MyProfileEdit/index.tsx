import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { api } from '@api/index';
import { useToast } from '@hooks/useToast';
import { useLoginUser } from '@hooks/useLoginUser';
import useImageUpload from '@hooks/useImageUpload';
import ImageUpload from '@components/common/ImageUpload';
import BottomSheet from '@components/common/BottomSheet';
import CommonInput from '@components/common/Input';
import CommonLabel from '@components/common/Label';
import CommonNavigation from '@components/common/Navigation';
import { StEmptyImage, StInputWrapper, StMyProfileEdit } from './style';
import { imgEmptyProfile } from '@assets/images';
import { icMypageEdit } from '@assets/icons';

function MyProfileEdit() {
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const { username, userID, profileImage, initLoginUser } = useLoginUser();
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();
  const [inputId, setInputId] = useState(userID);
  const [inputName, setInputName] = useState(username);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isInitial, setIsInitial] = useState(true);
  const [isEditConditionPassed, setIsEditConditionPassed] = useState({
    id: false,
    name: false,
  });

  useEffect(() => {
    const isImageInitial = image === undefined;
    const isInputIdInitial = inputId === userID;
    const isInputNameInitial = inputName === username;
    setIsInitial(isImageInitial && isInputIdInitial && isInputNameInitial);
  }, [inputId, inputName, image]);

  useEffect(() => {
    const idCheck = /^[a-z]+[a-z|0-9|.|_]{3,15}$/;
    const isIdPassed = idCheck.test(inputId) && !isDuplicate;

    setIsEditConditionPassed((prev) => ({ ...prev, id: isIdPassed }));

    if (!/^[a-z]/.test(inputId)) {
      setErrorMsg('*아이디의 첫 글자는 영문 소문자');
    } else if (!idCheck.test(inputId)) {
      setErrorMsg('*영문 소문자, 숫자, 특수문자(._) 4~15자 이내');
    } else if (isDuplicate) {
      setErrorMsg('*중복된 아이디입니다.');
    } else {
      setErrorMsg('');
    }

    if (!inputId.length) setErrorMsg('');
  }, [inputId, isDuplicate]);

  useEffect(() => {
    setIsEditConditionPassed((prev) => ({ ...prev, name: inputName !== '' }));
  }, [inputName]);

  const editProfile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append('profileId', inputId);
    form.append('name', inputName);
    image === null
      ? form.append('image', '')
      : image instanceof File && form.append('image', image);
    const response = await api.userService.editUserProfile(form);
    if (response.isSuccess) {
      fireToast({ content: '수정 완료' });
      initLoginUser();
      navigate(`/home/mypage/${response.profileId}`);
    }
  };

  const { mutate: editMyProfile } = useMutation(editProfile, { useErrorBoundary: true });

  return (
    <>
      <CommonNavigation title="프로필 수정" />
      <StMyProfileEdit>
        <ImageUpload
          styles={{
            width: '118px',
            height: '118px',
            borderRadius: '50%',
          }}
          defaultThumbnail={profileImage === null ? '' : profileImage}
          defaultChildren={{
            src: icMypageEdit,
            styles: { width: '32.29px' },
          }}
          {...imageUploadProps}
        >
          <StEmptyImage src={imgEmptyProfile} />
        </ImageUpload>
        <StInputWrapper>
          <CommonLabel content="아이디" marginTop="52px" marginBottom="20px" />
          <CommonInput
            value={inputId}
            width="100%"
            onChange={(value) => {
              setInputId(value);
            }}
            onBlur={async () => {
              if (inputId) {
                const { isDuplicate: duplicationCheckResponse } =
                  await api.userService.getDuplicationCheck(inputId);
                setIsDuplicate(duplicationCheckResponse);
              }
            }}
            placeholder={userID}
            maxLength={15}
            defaultValue={userID}
            errorMsg={errorMsg}
          />
          <CommonLabel content="이름" marginTop="46px" marginBottom="20px" />
          <CommonInput
            value={inputName}
            width="100%"
            onChange={(value) => {
              setInputName(value);
            }}
            placeholder={username}
            maxLength={6}
            defaultValue={username}
          />
        </StInputWrapper>
        <button
          onClick={editMyProfile}
          disabled={
            !Object.values(isEditConditionPassed).every((condition) => condition === true) ||
            isInitial
          }
        >
          완료
        </button>
      </StMyProfileEdit>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </>
  );
}

export default MyProfileEdit;
