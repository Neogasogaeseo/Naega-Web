import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { IssueCategory } from '@api/types/team';
import CommonNavigation from '@components/common/Navigation';
import FileUpload from '@components/common/FileUpload';
import {
  StNewIssue,
  StTitleWrapper,
  StQuestionWrapper,
  StCategoryWrapper,
  StTextarea,
  StUploadContainer,
  StButton,
  StPhotoUploadImage,
  StPhotoUploadMiddleDesc,
  StCategory,
} from './style';
import { icCamera } from '@assets/icons';

function TeamNewIssue() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  if (teamID === undefined) navigate('/');

  const { data: categoryList } = useQuery(
    'teamIssueCategoryList',
    api.teamService.getTeamIssueCategory,
  );
  const { data: teamInfoData } = useQuery(
    ['teamDetailData', teamID],
    () => api.teamService.getTeamInfo(Number(teamID)),
    { onError: () => navigate('/home') },
  );

  const [image, setImage] = useState<File | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<IssueCategory | null>();
  const [issueTextarea, setIssueTextarea] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  const onChangeIssue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIssueTextarea(e.currentTarget.value);
  };

  const onClickSelectedHandler = (category: IssueCategory) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
    } else setSelectedCategory(category);
  };

  const onClickSubmitIssue = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirming(true);
    if (!selectedCategory || !teamID) return;
    try {
      const response = await api.teamService.postTeamIssue(
        teamID,
        issueTextarea,
        selectedCategory.id,
        image,
      );
      if (response.id) {
        navigate(-1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CommonNavigation />
      <StNewIssue>
        <StTitleWrapper>
          {teamInfoData && teamInfoData.teamDetail.teamName}에 이슈 등록하기
        </StTitleWrapper>
        <p>팀에서 겪은 우리의 이슈를 등록하세요</p>
        <StQuestionWrapper>이슈의 카테고리를 선택해주세요</StQuestionWrapper>
        <StCategoryWrapper>
          {categoryList &&
            categoryList.map((category) => {
              return (
                <StCategory
                  selected={selectedCategory?.id === category.id}
                  key={category.id}
                  onClick={() => {
                    onClickSelectedHandler(category);
                  }}
                >
                  {category.name}
                </StCategory>
              );
            })}
        </StCategoryWrapper>
        <StQuestionWrapper>팀에서 어떤 일이 있었나요?</StQuestionWrapper>
        <StTextarea
          placeholder="팀에서 겪은 상황을 작성해주세요"
          name="issueTextarea"
          value={issueTextarea}
          onChange={onChangeIssue}
        />
        <StQuestionWrapper>
          이슈와 관련된 사진을 업로드해주세요<span>(선택)</span>
        </StQuestionWrapper>
        <FileUpload width="100%" height="149px" setFile={setImage} borderRadius="16px">
          <StUploadContainer>
            <StPhotoUploadImage src={icCamera} />
            <StPhotoUploadMiddleDesc>파일을 선택해서 업로드해주세요</StPhotoUploadMiddleDesc>
          </StUploadContainer>
        </FileUpload>
        <StButton
          type="submit"
          onClick={onClickSubmitIssue}
          disabled={issueTextarea === '' || !selectedCategory || isConfirming}
        >
          완료
        </StButton>
      </StNewIssue>
    </>
  );
}

export default TeamNewIssue;
