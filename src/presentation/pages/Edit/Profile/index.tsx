import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { useToast } from '@hooks/useToast';
import { useLoginUser } from '@hooks/useLoginUser';
import CommonInput from '@components/common/Input';
import CommonLabel from '@components/common/Label';
import CommonNavigation from '@components/common/Navigation';
import FileUpload from '@components/common/FileUpload';
import { StInputWrapper, StMyProfileEdit, StProfileImg } from './style';
import { StErrorMsg } from '@components/common/Input/style';
import { IcMypageEdit } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';

function MyProfileEdit() {
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const { username, userID, profileImage, initLoginUser } = useLoginUser();
  const [image, setImage] = useState<File | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isEditConditionPassed, setIsEditConditionPassed] = useState({
    id: false,
    name: false,
  });

  useEffect(() => {
    (async () => {
      if (!inputId) {
        setErrorMsg('');
        return;
      }

      const idCheck = /^[a-z]+[a-z|0-9|.|_]{3,15}$/;
      const passedId = idCheck.test(inputId) && !isDuplicate;

      setIsEditConditionPassed({
        ...isEditConditionPassed,
        id: passedId,
      });

      if (inputId) {
        if (!/^[a-z]/.test(inputId)) {
          setErrorMsg('*아이디의 첫 글자는 영문 소문자');
        } else if (!idCheck.test(inputId)) {
          setErrorMsg('*영문 소문자, 숫자, 특수문자(._) 4~15자 이내');
        } else if (isDuplicate) {
          setErrorMsg('*중복된 아이디입니다.');
        } else {
          setErrorMsg('');
        }
      }
    })();
  }, [inputId, isDuplicate]);

  useEffect(() => {
    setIsEditConditionPassed({
      ...isEditConditionPassed,
      name: inputName !== '',
    });
  }, [inputName]);

  const editProfile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('profileId', inputId);
      form.append('name', inputName);
      image && form.append('image', image);
      const response = await api.userService.editUserProfile(form);
      if (response.isSuccess) {
        fireToast({ content: '수정 완료' });
        initLoginUser();
        navigate(`/home/mypage/${response.profileId}`);
      }
    } catch (error) {
      console.error(error);
      navigate('/');
    }
  };

  return (
    <>
      <CommonNavigation title="프로필 수정" />
      <StMyProfileEdit>
        <StProfileImg>
          <FileUpload width="118px" height="118px" setFile={setImage} borderRadius="50%">
            <>
              <img src={profileImage || imgEmptyProfile} />
              <IcMypageEdit />
            </>
          </FileUpload>
        </StProfileImg>
        <StInputWrapper>
          <CommonLabel content="아이디" marginTop="52px" marginBottom="20px" />
          <CommonInput
            width="100%"
            isConditionPassed={isEditConditionPassed.id}
            onChange={(value) => {
              setInputId(value);
            }}
            onBlur={async () => {
              if (!inputId) return;
              const { isSuccess } = await api.userService.getDuplicationCheck(inputId);
              if (isSuccess) setIsDuplicate(true);
              else setIsDuplicate(false);
            }}
            value={inputId}
            placeholder={userID}
            maxLength={15}
          />
          <StErrorMsg>{errorMsg}</StErrorMsg>
          <CommonLabel content="이름" marginTop="46px" marginBottom="20px" />
          <CommonInput
            width="100%"
            isConditionPassed={isEditConditionPassed.name}
            onChange={(value) => {
              setInputName(value);
            }}
            placeholder={username}
          />
        </StInputWrapper>
        <button
          onClick={editProfile}
          disabled={!Object.values(isEditConditionPassed).every((condition) => condition === true)}
        >
          완료
        </button>
      </StMyProfileEdit>
    </>
  );
}

export default MyProfileEdit;
