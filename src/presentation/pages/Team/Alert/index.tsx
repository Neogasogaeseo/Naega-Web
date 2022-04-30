import { api } from '@api/index';
import CommonNavigation from '@components/common/Navigation';
import TeamNoticeItem from '@components/TeamNoticeItem';
import { useQuery } from 'react-query';
import { StTeamNoticeItemContainer } from './style';

function TeamAlert() {
  const { data: noticeList } = useQuery(['notice'], () => api.teamService.getNotice());
  return (
    <>
      <CommonNavigation isBack={true} title="알림" />
      <StTeamNoticeItemContainer>
        {noticeList?.map((notice) => (
          <TeamNoticeItem key={notice.teamID} {...notice} />
        ))}
      </StTeamNoticeItemContainer>
    </>
  );
}

export default TeamAlert;
