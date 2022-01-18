import { api } from '@api/index';
import { MyPageInfo, NeososeoAnswerBookmark, TeamFeedbackBookmark } from '@api/types/user';
import { IcArrowViewAll, IcCopyMypage, IcMypageEdit } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import FeedbackCardExpandableList from '@components/FeedbackCard/ExpandableList';
import NeososeoAnswerCardExpandableList from '@components/NeososeoAnswerCard/ExpandableList';
import ProfileList from '@components/ProfileList';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StDetailLink,
  StFeedbackTeamWrapper,
  StGreyBorder,
  StGreyBorderTall,
  StHomeMyPage,
  StHomeMyPageHeader,
  StKeywordTitle,
  StNegativeMarginWrapper,
  StShare,
  StTitle,
  StMyPageProfile,
} from './style';

function HomeMyPage() {
  const { userID } = useParams();
  const { userID: loginID } = useLoginUser();
  const [mypageInfo, setMypageInfo] = useState<MyPageInfo | null>(null);
  const [neososeoBookmark, setNeososeoBookmark] = useState<NeososeoAnswerBookmark | null>(null);
  const [feedbackBookmark, setFeedbackBookmark] = useState<TeamFeedbackBookmark | null>(null);
  const [isMyPage, setIsMyPage] = useState(false);

  useEffect(() => {
    console.log(userID, loginID);
    setIsMyPage(userID === loginID);
  }, [userID, loginID]);

  useEffect(() => {
    if (!userID) return;
    (async () => {
      const data = await api.userService.getMyPageInfo(userID);
      setMypageInfo(data);
    })();
  }, [userID]);

  useEffect(() => {
    if (!userID) return;
    (async () => {
      const data = await api.userService.getNeososeoBookmark(userID);
      setNeososeoBookmark(data);
    })();
  }, [userID]);

  useEffect(() => {
    if (!userID) return;
    (async () => {
      const data = await api.userService.getFeedbackBookmark(userID);
      setFeedbackBookmark(data);
    })();
  }, [userID]);

  return (
    <StHomeMyPage>
      {mypageInfo && (
        <>
          <StHomeMyPageHeader>
            <StMyPageProfile>
              <img src={mypageInfo.profileImage} />
              {isMyPage && <IcMypageEdit />}
            </StMyPageProfile>
            <div>
              <div>{mypageInfo.username}</div>
              <div>@{mypageInfo.userID}</div>
            </div>
            {isMyPage && (
              <StShare>
                <IcCopyMypage />
                <span>My 공유하기</span>
              </StShare>
            )}
          </StHomeMyPageHeader>
          <div style={{ marginBottom: 32 }}>
            <StKeywordTitle>친구가 말하는 강쥐</StKeywordTitle>
            <ImmutableKeywordList keywordList={mypageInfo.neososeo} onItemClick={() => null} />
            <StKeywordTitle>함께한 팀원이 말하는 강쥐</StKeywordTitle>
            <ImmutableKeywordList keywordList={mypageInfo.team} onItemClick={() => null} />
          </div>
        </>
      )}
      <StGreyBorder />
      {neososeoBookmark && (
        <div>
          <StTitle>
            <div>
              <span>내가 사랑한 소개</span>
              <span>{neososeoBookmark.count}</span>
            </div>
            {isMyPage && (
              <StDetailLink to="/home/neoga">
                <span>전체보기</span>
                <IcArrowViewAll />
              </StDetailLink>
            )}
          </StTitle>
          <NeososeoAnswerCardExpandableList answers={neososeoBookmark.answerList} />
        </div>
      )}
      <StGreyBorder />
      {feedbackBookmark && (
        <StNegativeMarginWrapper>
          <StFeedbackTeamWrapper>
            <StTitle>
              <div>
                <span>일하며 받은 피드백</span>
                <span>{feedbackBookmark.count}</span>
              </div>
              {isMyPage && (
                <StDetailLink to="/home/team">
                  <span>전체보기</span>
                  <IcArrowViewAll />
                </StDetailLink>
              )}
            </StTitle>
            <ProfileList
              isSquare={true}
              profileListData={feedbackBookmark.teamList}
              onProfileClick={() => null}
              onAddClick={() => null}
              isAddNeeded={false}
            />
          </StFeedbackTeamWrapper>
          <FeedbackCardExpandableList feedbacks={feedbackBookmark.feedbackList} />
        </StNegativeMarginWrapper>
      )}
      <StGreyBorderTall />
    </StHomeMyPage>
  );
}

export default HomeMyPage;
