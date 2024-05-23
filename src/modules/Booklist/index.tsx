import BooklistPresentation from "src/presentation/book-list-pres";
import useBookList from "./repo/useBookList";

function BooklistPage() {
  const response = useBookList();
  return (
    <main className="container">
      <BooklistPresentation title="Special for You" {...response} />
    </main>
  );
}

export default BooklistPage;
