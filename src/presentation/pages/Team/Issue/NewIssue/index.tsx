import { icCamera } from '@assets/icons';
import React, { useEffect, useState } from 'react';
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
} from './style';
import { getTeamIssueCategory } from '@infrastructure/remote/issue';
import { IssueCategory } from '@api/types/team';
import { useNavigate, useParams } from 'react-router-dom';
import { postTeamIssue } from '@infrastructure/remote/issue';

function TeamNewIssue() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const [categoryList, setCategoryList] = useState<IssueCategory[] | null>(null);
  const [image, setImage] = useState<File | null>();
  const [button, setButton] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<IssueCategory[]>([]);
  const [isClickCategory, setIsClickCategory] = useState(false);
  const [issueTextarea, setIssueTextarea] = useState('');
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
    try {
      const form = new FormData();
      teamID && form.append('teamId', teamID);
      form.append('categoryId', selectedCategory.map((category) => category.id).join(''));
      form.append('content', issueTextarea);
      image && form.append('image', image);
      const response = await postTeamIssue(form);
      console.log('response', response);
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StNewIssue>
      <StTitleWrapper>솝트에 이슈 등록하기</StTitleWrapper>
      <p>우리의 이슈를 등록하세요</p>
      <StQuestionWrapper>어떤 일이 있었는지 기록해주세요</StQuestionWrapper>
      <div>
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
      </div>
      <StTextera
        placeholder="직접 입력해주세요"
        name="issueTextarea"
        value={issueTextarea}
        onChange={onChangeIssue}
      />
      <StOptionWrapper>
        <StQuestionWrapper>
          기억하고 싶은 순간을 이미지로 남겨보세요<p>(선택)</p>{' '}
        </StQuestionWrapper>
      </StOptionWrapper>
      <FileUpload width="350px" height="149px" setFile={setImage} borderRadius="16px">
        <StUploadContainer>
          <StPhotoUploadImage src={icCamera} />
          <StPhotoUploadMiddleDesc>파일을 선택해서 업로드해주세요</StPhotoUploadMiddleDesc>
        </StUploadContainer>
      </FileUpload>
      <StButton
        type="submit"
        onClick={onClickSubmitIssue}
        disabled={(!button && issueTextarea == '') || selectedCategory.length === 0}
      >
        완료
      </StButton>
    </StNewIssue>
  );
}

export default TeamNewIssue;
