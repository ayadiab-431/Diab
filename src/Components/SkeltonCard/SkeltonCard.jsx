import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function SkeletonCard() {
  return (
    <div className="card-container col-12 col-sm-6 col-lg-4">
      <div className="card">
        <Skeleton height={180} /> {/* بدل صورة المنتج */}
        <div className="p-2">
          <Skeleton height={20} width="80%" />
          <Skeleton height={15} width="60%" style={{ marginTop: 6 }} />
        </div>
      </div>
    </div>
  );
}
