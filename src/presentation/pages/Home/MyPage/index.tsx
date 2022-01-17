import { api } from '@api/index';
import {
  MyPageKeywords,
  NeososeoAnswerBookmark,
  TeamFeedbackBookmark,
  User,
} from '@api/types/user';
import { imgEmptyProfile } from '@assets/images';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import FeedbackCard from '@components/FeedbackCard';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function HomeMyPage() {
  const { userID } = useParams();
  const { userID: loginID } = useLoginUser();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [mypageKeywords, setMypageKeywords] = useState<MyPageKeywords | null>(null);
  const [neososeoBookmark, setNeososeoBookmark] = useState<NeososeoAnswerBookmark | null>(null);
  const [feedbackBookmark, setFeedbackBookmark] = useState<TeamFeedbackBookmark | null>(null);

  useEffect(() => {
    if (!userID) return;
    (async () => {
      const data = await api.userService.getUserInfo(userID);
      setUserInfo(data);
    })();
  }, [userID]);

  useEffect(() => {
    if (!userID) return;
    (async () => {
      const data = await api.userService.getMyPageKeywords(userID);
      setMypageKeywords(data);
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
    <div>
      {userInfo && (
        <>
          <div>
            <img src={userInfo.profileImage} />
            <div>
              <div>{userInfo.username}</div>
              <div>@{userInfo.userID}</div>
            </div>
            {loginID === userInfo.userID && <div>My 공유하기</div>}
          </div>
          {mypageKeywords && (
            <div>
              <div>친구가 말하는 강쥐</div>
              <ImmutableKeywordList
                keywordList={mypageKeywords.neososeo}
                onItemClick={() => null}
              />
              <div>함께한 팀원이 말하는 강쥐</div>
              <ImmutableKeywordList keywordList={mypageKeywords.team} onItemClick={() => null} />
            </div>
          )}
          {neososeoBookmark && (
            <div>
              <div>
                {userInfo.username}(이)가 사랑한 소개 <span>{neososeoBookmark.count}</span>
              </div>
              <div>전체보기</div>
            </div>
          )}
          {feedbackBookmark && (
            <div>
              <div>
                일하며 받은 피드백 <span>{feedbackBookmark.count}</span>
              </div>
              {feedbackBookmark.teamList.map((team) => (
                <div key={team.id}>
                  <img src={team.profileImage ?? imgEmptyProfile} alt={team.profileName} />
                  <div>{team.profileName}</div>
                </div>
              ))}
              {feedbackBookmark.feedbackList.map((feedback) => (
                <FeedbackCard key={feedback.id} {...feedback} />
              ))}
              <div>전체보기</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default HomeMyPage;
