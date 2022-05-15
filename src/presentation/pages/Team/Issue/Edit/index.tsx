import { icCamera, icEdit, icTrash } from '@assets/icons';
import React, { useEffect, useState } from 'react';
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
  StImage,
} from './style';
import { IssueCategory, IssueData } from '@api/types/team';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '@api/index';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLoginUser } from '@hooks/useLoginUser';
import useImageUpload from '@hooks/useImageUpload';
import BottomSheet from '@components/common/BottomSheet';

export default function TeamIssueEdit() {
  const navigate = useNavigate();
  const { teamID, issueID } = useParams();
  if (teamID === undefined || issueID === undefined) navigate('/');
  const queryClient = useQueryClient();
  const { id } = useLoginUser();

  const { data: categoryList } = useQuery(
    'teamIssueCategoryList',
    api.teamService.getTeamIssueCategory,
  );
  const { data: teamInfoData } = useQuery(
    ['teamDetailData', teamID],
    () => api.teamService.getTeamInfo(Number(teamID)),
    { onError: () => navigate('/home') },
  );
  const { data: issueInfo } = useQuery(
    ['issueDetailData', `${teamID}-${issueID}`],
    () => api.teamService.getIssueInfo(issueID ?? ''),
    {
      onSuccess: () => {
        id !== issueInfo?.writerID && navigate('/');
      },
      useErrorBoundary: true,
    },
  );

  const [selectedCategory, setSelectedCategory] = useState<IssueCategory | undefined>(undefined);
  const [issueTextarea, setIssueTextarea] = useState(issueInfo ? issueInfo.title : '');
  const [isConfirming, setIsConfirming] = useState(false);
  const {
    image,
    setImage,
    fileInputRef,
    bottomSheetOpened,
    isImageDeleted,
    clickFileInputRef,
    removeImage,
    openBottomSheet,
    closeBottomSheet,
    cancelDelete,
  } = useImageUpload();

  const onChangeIssue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIssueTextarea(e.currentTarget.value);
  };

  const onClickSelectedHandler = (category: IssueCategory) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(undefined);
    } else setSelectedCategory(category);
  };

  const editIssue = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirming(true);
    mutate();
  };

  const { mutate, data: editResponse } = useMutation<
    { isSuccess: boolean; image: string | null } | undefined
  >(
    async () => {
      if (selectedCategory && teamID)
        return await api.teamService.editIssue(
          Number(issueID),
          selectedCategory.id,
          issueTextarea,
          image,
          image ? 'NEW' : issueInfo?.team.thumbnail && isImageDeleted ? 'DELETE' : 'NONE',
        );
    },
    {
      onSuccess: () => {
        navigate(-1);
        const oldIssueData = queryClient.getQueryData<IssueData>('issueDetailData');
        oldIssueData &&
          queryClient.setQueryData<IssueData | undefined>('issueDetailData', (old) => {
            if (editResponse && old) {
              return editResponse.image
                ? {
                    ...old,
                    title: issueTextarea,
                    category: selectedCategory ? selectedCategory.name : '',
                    thumbnail: editResponse.image,
                  }
                : {
                    ...old,
                    title: issueTextarea,
                    category: selectedCategory ? selectedCategory.name : '',
                  };
            }
          });
      },
    },
  );

  const getCategoryInfoFromName = (categoryName: string) => {
    if (!categoryList) return;
    return categoryList.find((category) => category.name === categoryName) ?? categoryList[0];
  };

  const getImageThumbnail = () => {
    if (issueInfo && issueInfo.team.thumbnail) {
      return isImageDeleted ? (
        <StUploadContainer>
          <StPhotoUploadImage src={icCamera} />
          <StPhotoUploadMiddleDesc>파일을 선택해서 업로드해주세요</StPhotoUploadMiddleDesc>
        </StUploadContainer>
      ) : (
        <StImage src={issueInfo.team.thumbnail} />
      );
    }
    return (
      <StUploadContainer>
        <StPhotoUploadImage src={icCamera} />
        <StPhotoUploadMiddleDesc>파일을 선택해서 업로드해주세요</StPhotoUploadMiddleDesc>
      </StUploadContainer>
    );
  };

  useEffect(() => {
    setSelectedCategory(getCategoryInfoFromName(issueInfo ? issueInfo.category : ''));
  }, []);

  return (
    <StNewIssue>
      <StTitleWrapper>
        {teamInfoData && teamInfoData.teamDetail.teamName}에 이슈 수정하기
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
      <div onClick={() => (!image ? clickFileInputRef() : openBottomSheet())}>
        <FileUpload
          ref={fileInputRef}
          isDeleted={isImageDeleted}
          cancelDelete={cancelDelete}
          width="100%"
          height="149px"
          setFile={setImage}
          borderRadius="16px"
        >
          {getImageThumbnail()}
        </FileUpload>
      </div>

      <StButton
        type="submit"
        onClick={editIssue}
        disabled={issueTextarea === '' || !selectedCategory || isConfirming}
      >
        완료
      </StButton>
      <BottomSheet
        isOpened={bottomSheetOpened}
        buttonList={[
          {
            icon: icEdit,
            label: '이미지 수정하기',
            onClick: clickFileInputRef,
          },
          { icon: icTrash, label: '이미지 삭제하기', onClick: removeImage },
        ]}
        closeBottomSheet={closeBottomSheet}
      />
    </StNewIssue>
  );
}
