import { StCommonLabel, StLabel, StLabelWithOptional, StOptional } from './style';

interface CommonLabelProps {
  content: string;
  marginBottom: string;
  isOptional?: boolean;
}

export default function CommonLabel(props: CommonLabelProps) {
  const { content, marginBottom, isOptional } = props;
  return isOptional ? (
    <StCommonLabel marginBottom={marginBottom}>
      <StLabelWithOptional>{content}</StLabelWithOptional>
      <StOptional> (선택)</StOptional>
    </StCommonLabel>
  ) : (
    <StLabel marginBottom={marginBottom}>{content}</StLabel>
  );
}
