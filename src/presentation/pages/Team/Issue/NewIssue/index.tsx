import { icCamera } from '@assets/icons';
import React, { useEffect, useState } from 'react';
import FileUpload from '@components/common/FileUpload';
import {
  StNewIssue,
  StTitleWrapper,
  StQuestionWrapper,
  StCategoryWrapper,
  StTextera,
  StUploadContainer,
  StButton,
  StPhotoUploadImage,
  StPhotoUploadMiddleDesc,
  StSelectCategory,
} from './style';
import { getTeamIssueCategory } from '@infrastructure/remote/issue';
import { IssueCategory } from '@api/types/team';
import { useNavigate, useParams } from 'react-router-dom';
import { postTeamIssue } from '@infrastructure/remote/issue';
import { TeamInfoData } from '@api/types/team';
import { api } from '@api/index';

function TeamNewIssue() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const [teamInfoData, setTeamInfoData] = useState<TeamInfoData | undefined>(undefined);
  const [categoryList, setCategoryList] = useState<IssueCategory[] | null>(null);
  const [image, setImage] = useState<File | null>();
  const [button, setButton] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<IssueCategory[]>([]);
  const [isClickCategory, setIsClickCategory] = useState(false);
  const [issueTextarea, setIssueTextarea] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const onChangeIssue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIssueTextarea(e.currentTarget.value);
    setButton(true);
  };

  useEffect(() => {
    setButton(false);
  }, [issueTextarea]);

  useEffect(() => {
    (async () => {
      const getCategoryList = await getTeamIssueCategory();
      setCategoryList(getCategoryList);

      if (teamID === undefined) return;
      const teamDetailData = await api.teamService.getTeamInfo(Number(teamID));
      setTeamInfoData(teamDetailData);
    })();
  }, []);

  const onClickSelectedHandler = (category: IssueCategory) => {
    if (selectedCategory.length === 0) {
      setSelectedCategory([category]);
    } else if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((v) => v !== category));
    }
    setIsClickCategory(!isClickCategory);
  };

  const onClickSubmitIssue = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirmed(true);
    try {
      const form = new FormData();
      teamID && form.append('teamId', teamID);
      form.append('categoryId', selectedCategory.map((category) => category.id).join(''));
      form.append('content', issueTextarea);
      image && form.append('image', image);
      const response = await postTeamIssue(form);
      if (response.status === 200) {
        navigate(`/team/${teamID}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StNewIssue>
      <StTitleWrapper>
        {teamInfoData && teamInfoData.teamDetailData.teamDetail.teamName}에 이슈 등록하기
      </StTitleWrapper>
      <p>팀에서 겪은 우리의 이슈를 등록하세요</p>
      <StQuestionWrapper>이슈의 카테고리를 선택해주세요</StQuestionWrapper>
      <StCategoryWrapper>
        {categoryList &&
          categoryList.map((category, id) => {
            return (
              <StSelectCategory
                selected={selectedCategory.indexOf(category)}
                key={id}
                onClick={() => {
                  onClickSelectedHandler(category);
                }}
              >
                {category.name}
              </StSelectCategory>
            );
          })}
      </StCategoryWrapper>
      <StQuestionWrapper>팀에서 어떤 일이 있었나요?</StQuestionWrapper>
      <StTextera
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
        disabled={(!button && issueTextarea == '') || selectedCategory.length === 0 || isConfirmed}
      >
        완료
      </StButton>
    </StNewIssue>
  );
}

export default TeamNewIssue;
