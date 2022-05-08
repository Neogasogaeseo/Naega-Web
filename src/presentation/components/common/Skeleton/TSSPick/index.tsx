import StSkeletonItem from '../style';
import { StTSSPickSkeleton } from './style';

function TSSPickSkeleton() {
  return (
    <StTSSPickSkeleton>
      <StSkeletonItem className="title" />
      <div className="team-container">
        {new Array(2).fill('').map((_, i) => (
          <div className="team" key={i}>
            <StSkeletonItem className="avatar" />
            <StSkeletonItem className="name" />
          </div>
        ))}
      </div>
      {new Array(2).fill('').map((_, i) => (
        <div key={i}>
          <div className="header">
            <StSkeletonItem className="TSS-title" />
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
    </StTSSPickSkeleton>
  );
}

export default TSSPickSkeleton;
