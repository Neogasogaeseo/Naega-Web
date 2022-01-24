import { api } from '@api/index';
import { MyPageInfo, NeososeoAnswerBookmark, TeamFeedbackBookmark } from '@api/types/user';
import { IcArrowViewAll, IcCopyMypage, IcMypageEdit } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import FeedbackCardExpandableList from '@components/FeedbackCard/ExpandableList';
import NeososeoAnswerCardExpandableList from '@components/NeososeoAnswerCard/ExpandableList';
import ProfileList from '@components/ProfileList';
import { copyClipboard } from '@utils/copyClipboard';
import { useLoginUser } from '@hooks/useLoginUser';
import { useToast } from '@hooks/useToast';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
import MyEmptyView from '@components/common/Empty/MyPage';
import { DOMAIN } from '@utils/constant';

function HomeMyPage() {
  const { userID } = useParams();
  const { userID: loginID } = useLoginUser();
  const [mypageInfo, setMypageInfo] = useState<MyPageInfo | null>(null);
  const [neososeoBookmark, setNeososeoBookmark] = useState<NeososeoAnswerBookmark | null>(null);
  const [feedbackBookmark, setFeedbackBookmark] = useState<TeamFeedbackBookmark | null>(null);
  const [isMyPage, setIsMyPage] = useState(false);
  const { pathname } = useLocation();
  const { fireToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
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
              <StShare
                onClick={() =>
                  copyClipboard(`${DOMAIN}${pathname}`, () =>
                    fireToast({ content: '링크가 클립보드에 저장되었습니다.' }),
                  )
                }
              >
                <IcCopyMypage />
                <span>My 공유하기</span>
              </StShare>
            )}
          </StHomeMyPageHeader>
          <div style={{ marginBottom: 32 }}>
            {mypageInfo.neososeo && mypageInfo.neososeo.length !== 0 && (
              <>
                <StKeywordTitle>친구가 말하는 {mypageInfo.username}</StKeywordTitle>
                <ImmutableKeywordList keywordList={mypageInfo.neososeo} onItemClick={() => null} />
              </>
            )}
            {mypageInfo.team && mypageInfo.team.length !== 0 && (
              <>
                <StKeywordTitle>함께한 팀원이 말하는 {mypageInfo.username}</StKeywordTitle>
                <ImmutableKeywordList keywordList={mypageInfo.team} onItemClick={() => null} />
              </>
            )}
          </div>
        </>
      )}
      <StGreyBorder />
      {neososeoBookmark && (
        <div>
          <StTitle>
            <div>
              <span>내가 사랑한 내 소개</span>
              <span>{neososeoBookmark.count}</span>
            </div>
            {isMyPage && (
              <StDetailLink to="/neoga/result">
                <span>전체보기</span>
                <IcArrowViewAll />
              </StDetailLink>
            )}
          </StTitle>
          {neososeoBookmark.count > 0 ? (
            <NeososeoAnswerCardExpandableList answers={neososeoBookmark.answerList} />
          ) : (
            <MyEmptyView
              isMyPage={isMyPage}
              origin="너가소개서"
              onPickButtonClicked={() => navigate('/neoga/result')}
            />
          )}
        </div>
      )}
      <StGreyBorder />
      {feedbackBookmark && (
        <StNegativeMarginWrapper>
          <StFeedbackTeamWrapper>
            <StTitle>
              <div>
                <span>팀에서 받은 내 소개</span>
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
          {feedbackBookmark.feedbackList.length > 0 ? (
            <FeedbackCardExpandableList feedbacks={feedbackBookmark.feedbackList} />
          ) : (
            <MyEmptyView
              isMyPage={isMyPage}
              origin="팀원소개서"
              onPickButtonClicked={() => navigate('/home/team')}
            />
          )}
        </StNegativeMarginWrapper>
      )}
      <StGreyBorderTall />
    </StHomeMyPage>
  );
}

export default HomeMyPage;
