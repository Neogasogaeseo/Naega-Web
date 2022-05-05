import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { DOMAIN } from '@utils/constant';
import { copyClipboard } from '@utils/copyClipboard';
import { useToast } from '@hooks/useToast';
import { useLoginUser } from '@hooks/useLoginUser';
import ProfileList from '@components/common/ProfileList';
import MyEmptyView from '@components/common/Empty/MyPage';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import MyPageEditBottomSheet from '@components/common/BottomSheet/MyPageEdit';
import FeedbackCardExpandableList from '@components/FeedbackCard/ExpandableList';
import NeososeoAnswerCardExpandableList from '@components/NeososeoAnswerCard/ExpandableList';
import {
  StDetailLink,
  StFeedbackTeamWrapper,
  StGreyBorder,
  StGreyBorderTall,
  StHomeMyPage,
  StHomeMyPageHeader,
  StKeywordSection,
  StKeywordTitle,
  StNegativeMarginWrapper,
  StShare,
  StTitle,
  StMyPageProfile,
} from './style';
import { IcArrowViewAll, IcCopyMypage, icCrown, IcMypageEdit } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';

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
                {isMyPage && <IcMypageEdit onClick={() => setIsBottomSheetOpened(true)} />}
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
            <StKeywordSection>
              <div>
                <div>
                  <img src={icCrown} />
                  <span>My 키워드</span>
                </div>
                {isMyPage && (
                <StDetailLink onClick={() => navigate(`/mypage/keyword/${userID}`)}>
                  키워드 전체보기
                  <IcArrowViewAll />
                </StDetailLink>
                )}
              </div>
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
            </StKeywordSection>
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
                <StDetailLink onClick={() => navigate(`/mypage/neoga/${userID}`)}>
                  픽 하러 가기
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
                  <StDetailLink onClick={() => navigate(`/mypage/team/${userID}`)}>
                    픽 하러 가기
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
        closeBottomSheet={() => setIsBottomSheetOpened(false)}
        type="profile"
      />
    </StHomeMyPage>
  );
}

export default HomeMyPage;
