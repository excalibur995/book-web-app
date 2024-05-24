import { Suspense } from "react";
import { Link } from "react-router-dom";
import { PaginatedBooksProps as Props } from "./models/types";
import "./paginted-list.scss";

import Item from "../book-item";
import Pagination from "./presentation/pagination";
import usePaginatedStates from "./usecases/usePaginatedStates";

export default function PaginatedList({ isError, isLoading, data }: Props) {
  const { handleNext, handlePrevious, paginatedBooks, page, totalPages } = usePaginatedStates(data || []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading stories</div>;

  if (paginatedBooks && paginatedBooks.length < 1) return <div>You don't have anything to show.</div>;

  return (
    <>
      <ul className="book-list">
        {paginatedBooks.map((book) => (
          <Suspense key={book.id}>
            <Link id="RouterNavLink" to={`/detail/${book.id}`}>
              <Item {...book} />
            </Link>
          </Suspense>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} handleNext={handleNext} handlePrevious={handlePrevious} />
    </>
  );
}
