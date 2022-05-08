import StSkeletonItem from '../style';
import { StNSSPickSkeleton } from './style';

function NSSPickSkeleton() {
  return (
    <StNSSPickSkeleton>
      <StSkeletonItem className="title" />
      {new Array(2).fill('').map((_, i) => (
        <div key={i}>
          <div className="header">
            <StSkeletonItem className="avatar" />
            <StSkeletonItem className="NSS-title" />
            <StSkeletonItem className="button" />
          </div>
          <div className="body">
            <StSkeletonItem className="content" />
            <StSkeletonItem className="content" />
            <div className="keyword-container">
              <StSkeletonItem className="keyword" />
              <StSkeletonItem className="keyword" />
            </div>
          </div>
        </div>
      ))}
    </StNSSPickSkeleton>
  );
}

export default NSSPickSkeleton;
