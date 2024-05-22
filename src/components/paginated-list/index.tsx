import { Suspense } from "react";
import { Link } from "react-router-dom";
import { PaginatedBooksProps as Props } from "./models/types";
import "./paginted-list.scss";
import Item from "./presentation/item-list/lazy";
import usePaginatedStates from "./usecases/usePaginatedStates";

export default function PaginatedList({ isError, isLoading, data }: Props) {
  const { paginatedBooks } = usePaginatedStates(data || []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading stories</div>;

  return (
    <ul className="book-list">
      {paginatedBooks.map((book) => (
        <Suspense key={book.id}>
          <Link to={`/detail/${book.id}`}>
            <Item {...book} />
          </Link>
        </Suspense>
      ))}
    </ul>
  );
}
