import { StCommonLabel, StLabel, StLabelWithOptional, StOptional } from './style';

interface CommonLabelProps {
  content: string;
  marginBottom?: string;
  marginTop?: string;
  isOptional?: boolean;
}

export default function CommonLabel(props: CommonLabelProps) {
  const { content, marginBottom, marginTop, isOptional } = props;
  return isOptional ? (
    <StCommonLabel marginTop={marginTop} marginBottom={marginBottom}>
      <StLabelWithOptional>{content}</StLabelWithOptional>
      <StOptional>(선택)</StOptional>
    </StCommonLabel>
  ) : (
    <StLabel marginTop={marginTop} marginBottom={marginBottom}>
      {content}
    </StLabel>
  );
}
