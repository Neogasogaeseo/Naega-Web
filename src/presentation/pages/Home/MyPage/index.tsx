import { api } from '@api/index';
import { IcArrowViewAll, IcCopyMypage, IcMypageEdit } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import FeedbackCardExpandableList from '@components/FeedbackCard/ExpandableList';
import NeososeoAnswerCardExpandableList from '@components/NeososeoAnswerCard/ExpandableList';
import ProfileList from '@components/common/ProfileList';
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
import { imgEmptyProfile } from '@assets/images';
import { useQuery } from 'react-query';
import MyPageEditBottomSheet from '@components/common/BottomSheet/ProfileEdit';

function HomeMyPage() {
  const { userID } = useParams();
  const { userID: loginID } = useLoginUser();
  const [isMyPage, setIsMyPage] = useState(false);
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const { pathname } = useLocation();
  const { fireToast } = useToast();
  const navigate = useNavigate();

  if (!userID) return <></>;

  useEffect(() => {
    setIsMyPage(userID === loginID);
  }, [userID, loginID]);

  const { data: mypageInfo, isLoading: isMyPageInfoLoading } = useQuery(
    ['userInfo', userID],
    () => api.userService.getMyPageInfo(userID ?? ''),
    { useErrorBoundary: true, retry: 1 },
  );

  const { data: neososeoBookmark, isLoading: isNSSBookmarkLoading } = useQuery(
    ['nssBookmark', userID],
    () => api.userService.getNeososeoBookmark(userID ?? ''),
    { useErrorBoundary: true, retry: 1 },
  );

  const { data: feedbackBookmark, isLoading: isTSSBookmarkLoading } = useQuery(
    ['tssBookmark', userID],
    () => api.userService.getFeedbackBookmark(userID ?? ''),
    { useErrorBoundary: true, retry: 1 },
  );

  const openBottomSheet = () => {
    setIsBottomSheetOpened(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpened(false);
  };

  return (
    <StHomeMyPage>
      {isMyPageInfoLoading ? (
        <div>마이페이지 정보 로딩중</div>
      ) : (
        mypageInfo && (
          <>
            <StHomeMyPageHeader>
              <StMyPageProfile>
                <img src={mypageInfo.profileImage || imgEmptyProfile} />
                {isMyPage && <IcMypageEdit onClick={() => openBottomSheet()} />}
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
                  <ImmutableKeywordList
                    keywordList={mypageInfo.neososeo}
                    onItemClick={() => null}
                  />
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
        )
      )}

      <StGreyBorder />
      {isNSSBookmarkLoading ? (
        <div>너소서 북마크 정보 로딩중</div>
      ) : (
        neososeoBookmark && (
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
        )
      )}
      <StGreyBorder />
      {isTSSBookmarkLoading ? (
        <div>팀소서 북마크 정보 로딩중</div>
      ) : (
        feedbackBookmark && (
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
                profileList={feedbackBookmark.teamList}
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
        )
      )}
      <StGreyBorderTall />
      <MyPageEditBottomSheet
        isOpened={isBottomSheetOpened}
        closeBottomSheet={closeBottomSheet}
        type="profile"
        userID={userID}
      />
    </StHomeMyPage>
  );
}

export default HomeMyPage;
