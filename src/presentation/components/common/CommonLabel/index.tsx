import { StLabel, StLabelWithOptional, StOptional } from './style';

interface CommonLabelProps {
  content: string;
  isOptional: boolean;
}

export default function CommonLabel(props: CommonLabelProps) {
  const { content, isOptional } = props;
  return isOptional ? (
    <>
      <StLabelWithOptional>{content}</StLabelWithOptional>
      <StOptional>선택</StOptional>
    </>
  ) : (
    <StLabel>{content}</StLabel>
  );
}
