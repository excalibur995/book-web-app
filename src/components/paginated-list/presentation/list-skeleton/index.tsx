import { PAGE_SIZE } from "src/modules/Booklist/models/constants";
import BookSkeleton from "src/presentation/book-skeleton";
import "./list-skeleton.scss";

export default function ListSkeleton() {
  return (
    <div className="book-list list-skeleton-container">
      {Array(PAGE_SIZE)
        .fill(PAGE_SIZE)
        .map((_, index) => (
          <BookSkeleton key={index} />
        ))}
    </div>
  );
}
