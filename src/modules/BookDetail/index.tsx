import { Navigate, useLocation, useParams } from "react-router-dom";

import Item from "src/components/paginated-list/presentation/item-list";
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
      {/* <div className="book-detail-container">
        <div className="book-detail-wrapper">
          <img src={data?.cover} alt={data?.title} />
          <section className="book-detail-description">
            <h1>{data?.title}</h1>
            <desc>{data?.description}</desc>
            <span>
              <b>Publication Date</b> {formatDate(data?.publicationDate)}
            </span>
            <span>
              by <b>{data?.author}</b>
            </span>
          </section>
        </div>
      </div> */}
    </main>
  );
};

export default BookeDetail;
