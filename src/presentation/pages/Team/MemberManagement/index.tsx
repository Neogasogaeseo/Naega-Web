import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import CommonNavigation from '@components/common/Navigation';
import { StTeamMember, StTeamMemberManagement } from './style';
import { imgEmptyProfile } from '@assets/images';
import { api } from '@api/index';
import TeamMemberAddForEdit from '@components/TeamMemberAdd/ForEdit';
import { selectedUserListState } from '@stores/team';
import CommonModal from '@components/common/Modal';

export default function TeamMemberManagement() {
  const { teamID } = useParams();
  const navigate = useNavigate();
  const { data: memberList } = useQuery(
    ['teamEditMember', teamID ?? ''],
    () => {
      if (teamID) return api.teamService.getTeamEditMember(+teamID);
    },
    { useErrorBoundary: true },
  );
  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const editTeamMember = async () => {
    if (teamID) {
      const newUserIdList = selectedUserList.map((user) => user.id);
      await api.teamService.editTeamMember(+teamID, `[${newUserIdList.join(', ')}]`);
    }
  };

  const closeAddMode = () => {
    setIsAddMode(false);
    setSelectedUserList([]);
  };

  const { mutate } = useMutation(editTeamMember, {
    onSettled: closeAddMode,
    onSuccess: () => {
      return queryClient.invalidateQueries('teamEditMember');
    },
  });

  useEffect(() => {
    if (!teamID) navigate('/home');
  }, []);

  return isAddMode && teamID ? (
    <>
      <CommonModal
        title="저장이 안됩니다"
        description={'뒤로가기를 누르면 추가하신' + '\n' + '팀원 정보가 저장이 안돼요'}
        isOpened={isModalOpen}
        isCoral={false}
        onClickConfirm={() => {
          closeAddMode();
          setIsModalOpen(false);
        }}
        onClickCancel={() => setIsModalOpen(false)}
      />
      <TeamMemberAddForEdit
        teamID={+teamID}
        onClickSubmitButton={mutate}
        onClickBackButton={() => {
          if (selectedUserList.length) {
            setIsModalOpen(true);
          } else {
            closeAddMode();
          }
        }}
      />
    </>
  ) : (
    <>
      <CommonNavigation
        title="팀원 관리"
        submitButton={{ content: '추가', onClick: () => setIsAddMode(true) }}
      />
      <StTeamMemberManagement>
        {memberList &&
          memberList.map((member) => (
            <StTeamMember key={member.id} isConfirmed={member.isConfirmed}>
              <div>
                <img src={member.image || imgEmptyProfile} />
                <div>
                  <div>{member.name}</div>
                  <div>{`@${member.profileID}`}</div>
                </div>
              </div>
              <button>{member.isConfirmed ? (member.isHost ? '팀장' : '팀원') : '초대 중'}</button>
            </StTeamMember>
          ))}
      </StTeamMemberManagement>
    </>
  );
}
