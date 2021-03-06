import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { IssueCategory } from '@api/types/team';
import CommonNavigation from '@components/common/Navigation';
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
import ImageUpload from '@components/common/ImageUpload';
import useImageUpload from '@hooks/useImageUpload';
import BottomSheet from '@components/common/BottomSheet';

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

  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();
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
          {teamInfoData && teamInfoData.teamDetail.teamName}??? ?????? ????????????
        </StTitleWrapper>
        <p>????????? ?????? ????????? ????????? ???????????????</p>
        <StQuestionWrapper>????????? ??????????????? ??????????????????</StQuestionWrapper>
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
        <StQuestionWrapper>????????? ?????? ?????? ?????????????</StQuestionWrapper>
        <StTextarea
          placeholder="????????? ?????? ????????? ??????????????????"
          name="issueTextarea"
          value={issueTextarea}
          onChange={onChangeIssue}
        />
        <StQuestionWrapper>
          ????????? ????????? ????????? ?????????????????????<span>(??????)</span>
        </StQuestionWrapper>
        <ImageUpload
          styles={{
            width: '100%',
            height: '149px',
            borderRadius: '16px',
          }}
          {...imageUploadProps}
        >
          <StUploadContainer>
            <StPhotoUploadImage src={icCamera} />
            <StPhotoUploadMiddleDesc>????????? ???????????? ?????????????????????</StPhotoUploadMiddleDesc>
          </StUploadContainer>
        </ImageUpload>
        <StButton
          type="submit"
          onClick={onClickSubmitIssue}
          disabled={issueTextarea === '' || !selectedCategory || isConfirming}
        >
          ??????
        </StButton>
      </StNewIssue>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={bottomSheetButtonList}
        closeBottomSheet={closeBottomSheet}
      />
    </>
  );
}

export default TeamNewIssue;
