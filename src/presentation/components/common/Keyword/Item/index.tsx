import { icCloseGrey, icCloseWhite } from '@assets/icons';
import { COLOR } from '@styles/common/color';
import { StKeywordItem } from './style';

interface Keyword {
  content: string;
  color: string;
}

interface Props extends Keyword {
  isMutable: boolean;
  onDeleteClick?: () => void;
  onItemClick?: () => void;
  viewMode: 'linear' | 'flex';
}

function KeywordItem(props: Props) {
  const { isMutable, content, color, onDeleteClick, onItemClick, viewMode } = props;
  return (
    <StKeywordItem color={color} onClick={onItemClick}>
      <div>
        <div>{content}</div>
        {isMutable && (
          <img
            onClick={onDeleteClick}
            src={viewMode === 'linear' || color === COLOR.GRAY_3 ? icCloseGrey : icCloseWhite}
          />
        )}
      </div>
    </StKeywordItem>
  );
}

export default KeywordItem;
