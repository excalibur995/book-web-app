import useBookStore from "src/lib/stores/books-store/hook";
import BooklistPresentation from "src/presentation/book-list-pres";

export default function FavouriteBooks() {
  const { favourites } = useBookStore();
  return (
    <main className="container">
      <BooklistPresentation title="Bookmark" data={favourites} />
    </main>
  );
}
