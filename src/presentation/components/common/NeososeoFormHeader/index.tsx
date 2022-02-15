import { splitIntoTwoLines } from '@utils/string';
import { StNeososeoFormHeader } from './style';

interface NeososeoFormHeaderProps {
  title: string;
  image: string;
}

function NeososeoFormHeader(props: NeososeoFormHeaderProps) {
  const { title, image } = props;
  return (
    <StNeososeoFormHeader>
      <div>{splitIntoTwoLines(title)}</div>
      <div>
        <img src={image} alt={title} />
      </div>
    </StNeososeoFormHeader>
  );
}

export default NeososeoFormHeader;
