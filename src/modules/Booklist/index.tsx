import PaginatedList from "src/components/paginated-list";
import "./booklist.scss";
import useBookList from "./repo/useBookList";

function BooklistPage() {
  const response = useBookList();
  return (
    <main className="container">
      <h2>Special for You</h2>
      <PaginatedList {...response} />
    </main>
  );
}

export default BooklistPage;
