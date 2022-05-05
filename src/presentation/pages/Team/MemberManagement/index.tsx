import CommonNavigation from '@components/common/Navigation';
import { StTeamMember, StTeamMemberManagement } from './style';
import { imgEmptyProfile } from '@assets/images';

export default function TeamMemberManagement() {
  const test = [
    {
      id: 1,
      name: '영주',
      profileID: 'yyyyy',
      img: 'https://firebasestorage.googleapis.com/v0/b/neogasogaeseo-9aaf5.appspot.com/o/20220121_184109_44796702690.JPG?alt=media',
      isConfirmed: true,
    },
    {
      id: 2,
      name: '주영',
      profileID: 'jjjjjj',
      image: null,
      isConfirmed: false,
    },
  ];
  return (
    <>
      <CommonNavigation
        title="팀원 관리"
        submitButton={{ content: '추가', onClick: () => console.log() }}
      />
      <StTeamMemberManagement>
        {test &&
          test.map((t) => (
            <StTeamMember key={t.id} isConfirmed={t.isConfirmed}>
              <div>
                <img src={t.image || imgEmptyProfile} />
                <div>
                  <div>{t.name}</div>
                  <div>{`@${t.profileID}`}</div>
                </div>
              </div>
              <button>{t.isConfirmed ? '팀원' : '초대 중'}</button>
            </StTeamMember>
          ))}
      </StTeamMemberManagement>
    </>
  );
}
