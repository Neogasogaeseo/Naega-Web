import { icNoReply } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';
import {
  StNeogaResultCard,
  StNeogaCardHeader,
  StNeogaCardLine,
  StNeogaCardContent,
  StNeogaNoReply,
} from './style';

function NeogaResultCard() {
  return (
    <>
      <StNeogaResultCard>
        <StNeogaCardHeader>
          <img src={imgEmptyProfile} />
          <div>
            <div>너가 닮고 싶은 나의 일잘러 모습</div>
            <div>2022-01-12</div>
          </div>
        </StNeogaCardHeader>
        <StNeogaCardLine />
        <StNeogaCardContent>
          <div>
            <span>동네친구</span>
            <span>·</span>
            <span>백지연</span>
          </div>
          <div>너가소개서 너가소개서 너가소개서 너가소개서 너가소개서</div>
          <div>
            <span>너가소개서최대10자</span>
            <span>너가소개서최대10자</span>
          </div>
        </StNeogaCardContent>
        <StNeogaCardContent>
          <div>
            <span>동네친구</span>
            <span>·</span>
            <span>백지연</span>
          </div>
          <div>너가소개서 너가소개서 너가소개서 너가소개서 너가소개서</div>
          <div>
            <span>너가소개서최대10자</span>
            <span>너가소개서최대10자</span>
          </div>
        </StNeogaCardContent>
      </StNeogaResultCard>
      {/* 아직 답변이 없어요 테스트용 */}
      <StNeogaResultCard>
        <StNeogaCardHeader>
          <img src={imgEmptyProfile} />
          <div>
            <div>너가 기억하는 나의 첫인상</div>
            <div>2022-01-12</div>
          </div>
        </StNeogaCardHeader>
        <StNeogaCardLine />
        <StNeogaNoReply>
          <img src={icNoReply} />
          아직 답변이 없어요
        </StNeogaNoReply>
      </StNeogaResultCard>
    </>
  );
}

export default NeogaResultCard;
