import { imgComputer, ImgBackgroundEllipse } from '@assets/images';
import Question from '@components/common/Question';
import { StNeogaLink, StTitle, StLinkCreateButton } from './style';

export default function NeogaLink() {
  const title = '너가 닮고 싶은\n나의 일잘러 모습';
  const image = imgComputer;
  const question = '나와 함께하며 당신이\n닮고 싶었던 능력이 있었나요?';
  return (
    <StNeogaLink>
      <StTitle>
        <div>{title}</div>
        <div>
          <ImgBackgroundEllipse />
          <img src={image} />
        </div>
      </StTitle>
      <Question content={question} />
      <StLinkCreateButton>링크 생성하기</StLinkCreateButton>
    </StNeogaLink>
  );
}
