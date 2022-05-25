import { IcCamera } from '@assets/icons';
import React, { useEffect, useState } from 'react';
import {
  StNewIssue,
  StTitleWrapper,
  StQuestionWrapper,
  StCategoryWrapper,
  StTextarea,
  StUploadContainer,
  StButton,
  StCategory,
} from './style';
import { IssueCategory, IssueData } from '@api/types/team';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '@api/index';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLoginUser } from '@hooks/useLoginUser';
import useImageUpload from '@hooks/useImageUpload';
import BottomSheet from '@components/common/BottomSheet';
import CommonNavigation from '@components/common/Navigation';
import ImageUpload from '@components/common/ImageUpload';

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
        if (!issueInfo || id !== issueInfo.writerID) navigate('/');
      },
      useErrorBoundary: true,
    },
  );

  const [selectedCategory, setSelectedCategory] = useState<IssueCategory | undefined>(undefined);
  const [issueTextarea, setIssueTextarea] = useState(issueInfo ? issueInfo.title : '');
  const [isConfirming, setIsConfirming] = useState(false);
  const { image, bottomSheetOpened, imageUploadProps, closeBottomSheet, bottomSheetButtonList } =
    useImageUpload();

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
        );
    },
    {
      onSuccess: () => {
        closeBottomSheet();
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

  useEffect(() => {
    setSelectedCategory(getCategoryInfoFromName(issueInfo ? issueInfo.category : ''));
  }, []);

  return (
    <>
      <CommonNavigation />
      <StNewIssue>
        <StTitleWrapper>
          {teamInfoData && teamInfoData.teamDetail.teamName}에 이슈 수정하기
        </StTitleWrapper>
        <p>팀에서 겪은 우리의 이슈를 등록하세요</p>
        <StQuestionWrapper>이슈의 카테고리를 선택해주세요</StQuestionWrapper>
        <StCategoryWrapper>
          {categoryList?.map((category) => {
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
        <ImageUpload
          styles={{
            width: '100%',
            height: '149px',
            borderRadius: '16px',
          }}
          defaultThumbnail={issueInfo?.team.thumbnail === null ? '' : issueInfo?.team.thumbnail}
          {...imageUploadProps}
        >
          <StUploadContainer>
            <IcCamera />
            <div>파일을 선택해서 업로드해주세요</div>
          </StUploadContainer>
        </ImageUpload>
        <StButton
          type="submit"
          onClick={editIssue}
          disabled={issueTextarea === '' || !selectedCategory || isConfirming}
        >
          완료
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
