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
import { StErrorMsg } from '@components/common/Input/style';
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
      setErrorMsg('*???????????? ??? ????????? ?????? ?????????');
    } else if (!idCheck.test(inputId)) {
      setErrorMsg('*?????? ?????????, ??????, ????????????(._) 4~15??? ??????');
    } else if (isDuplicate) {
      setErrorMsg('*????????? ??????????????????.');
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
      fireToast({ content: '?????? ??????' });
      initLoginUser();
      navigate(`/home/mypage/${response.profileId}`);
    }
  };

  const { mutate: editMyProfile } = useMutation(editProfile, { useErrorBoundary: true });

  return (
    <>
      <CommonNavigation title="????????? ??????" />
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
          <CommonLabel content="?????????" marginTop="52px" marginBottom="20px" />
          <CommonInput
            width="100%"
            isConditionPassed={isEditConditionPassed.id}
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
          />
          <StErrorMsg>{errorMsg}</StErrorMsg>
          <CommonLabel content="??????" marginTop="46px" marginBottom="20px" />
          <CommonInput
            width="100%"
            isConditionPassed={isEditConditionPassed.name}
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
          ??????
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
