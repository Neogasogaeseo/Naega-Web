import StSkeletonItem from '../style';
import { StMyPageInfoSkeleton } from './style';

function MyPageInfoSkeleton() {
  return (
    <StMyPageInfoSkeleton>
      <div className="profile">
        <div>
          <StSkeletonItem className="avatar" />
        </div>
        <div>
          <StSkeletonItem className="text short" />
          <StSkeletonItem className="text long" />
        </div>
      </div>
      <div className="my-keyword">
        <StSkeletonItem className="title" />
        <div>
          <StSkeletonItem className="subtitle" />
          <div className="keyword-container">
            <StSkeletonItem className="keyword" />
            <StSkeletonItem className="keyword" />
            <StSkeletonItem className="keyword" />
          </div>
        </div>
        <div>
          <StSkeletonItem className="subtitle" />
          <div className="keyword-container">
            <StSkeletonItem className="keyword" />
            <StSkeletonItem className="keyword" />
            <StSkeletonItem className="keyword" />
          </div>
        </div>
      </div>
    </StMyPageInfoSkeleton>
  );
}

export default MyPageInfoSkeleton;
