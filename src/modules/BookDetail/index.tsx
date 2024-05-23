import { Navigate, useLocation, useParams } from "react-router-dom";

import Item from "src/components/book-item";
import "./book-detail.scss";
import useBook from "./repo/useBook";

const BookeDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, isError, isLoading } = useBook(id);

  if (!id) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (isLoading) return <main>Loading...</main>;
  if (isError || !data) return <main>Error loading stories</main>;

  return (
    <main className="container detail-container">
      <Item {...data} />
    </main>
  );
};

export default BookeDetail;
