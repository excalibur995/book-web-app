import { Navigate, useLocation, useParams } from "react-router-dom";
import Item from "src/components/book-item";
import BookSkeleton from "src/presentation/book-skeleton";
import "./book-detail.scss";
import useBook from "./repo/useBook";

const BookDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, isError, isLoading } = useBook(id);

  if (!id) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <main className="container detail-container">
      {isLoading && <BookSkeleton />}
      {!isLoading && (isError || !data) && "Error loading stories"}
      {data && <Item {...data} />}
    </main>
  );
};

export default BookDetail;
