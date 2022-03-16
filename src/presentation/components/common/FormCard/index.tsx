import { imgLinkCreated } from '@assets/images';
import { StSuggest, StCircle, StFormCard, StFormTitle } from './style';

interface FormCardProps {
  image?: string;
  title?: string;
  content?: string;
  children: React.ReactNode;
  isFront?: boolean;
}

export default function FormCard(props: FormCardProps) {
  const { image = '', title = '', content = '', children, isFront = true } = props;
  return isFront ? (
    <StFormCard isFront={isFront}>
      <img src={image} />
      <div>{content}</div>
      <StFormTitle>{title}</StFormTitle>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StFormCard>
  ) : (
    <StFormCard isFront={isFront}>
      <img src={imgLinkCreated} />
      <div>너가소개서 생성 완료!</div>
      <StSuggest>
        <div>링크를 복사해서</div>
        <div>친구들에게 공유해보세요</div>
      </StSuggest>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StFormCard>
  );
}
