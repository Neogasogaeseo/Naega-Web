/* eslint-disable @typescript-eslint/no-unused-vars */
import { icCamera } from '@assets/icons';
import React, { useState } from 'react';
import FileUpload from '@components/common/FileUpload';
import {
  StNewIssue,
  StTitleWrapper,
  StQuestionWrapper,
  StOptionWrapper,
  StTextera,
  StUploadContainer,
  StButton,
  StPhotoUploadImage,
  StPhotoUploadMiddleDesc,
  StSelectCategory,
  StButtonGray,
} from './style';

function TeamNewIssue() {
  const [image, setImage] = useState<File | null>();
  const [button, setButton] = useState(false);
  const [issueTextarea, setIssueTextarea] = useState('');
  const onChangeIssue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIssueTextarea(e.currentTarget.value);
    setButton(true);
  };

  const onClickSubmitIssue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setButton(false);
    console.log('전송!', issueTextarea);
  };

  return (
    <StNewIssue>
      <StTitleWrapper>솝트에 이슈 등록하기</StTitleWrapper>
      <p>우리의 이슈를 등록하세요</p>
      <StQuestionWrapper>어떤 일이 있었는지 기록해주세요</StQuestionWrapper>
      <StSelectCategory>
        <option value="">선택</option>
      </StSelectCategory>
      <StTextera
        placeholder="직접 입력해주세요"
        name="issueTextarea"
        value={issueTextarea}
        onChange={onChangeIssue}
      />
      <StOptionWrapper>
        <StQuestionWrapper>기억하고 싶은 순간을 이미지로 남겨보세요 (선택)</StQuestionWrapper>
      </StOptionWrapper>
      <FileUpload width="350px" height="149px" setFile={setImage} borderRadius="16px">
        <StUploadContainer>
          <StPhotoUploadImage src={icCamera} />
          <StPhotoUploadMiddleDesc>파일을 선택해서 업로드해주세요</StPhotoUploadMiddleDesc>
        </StUploadContainer>
      </FileUpload>
      {button ? (
        <StButton type="submit" onClick={onClickSubmitIssue}>
          완료
        </StButton>
      ) : (
        <StButtonGray type="submit">완료</StButtonGray>
      )}
    </StNewIssue>
  );
}

export default TeamNewIssue;
