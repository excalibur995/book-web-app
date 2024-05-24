import { Skeleton } from "../ui/skeleton";
import "./book-skeleton.scss";

export default function BookSkeleton() {
  return (
    <div className="book-skeleton-container">
      <Skeleton className="image-placeholder" />
      <Skeleton />
      <Skeleton className="description-placeholder" />
      <section className="lower-section">
        <Skeleton />
        <Skeleton />
      </section>
    </div>
  );
}
