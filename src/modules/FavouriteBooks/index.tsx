import { useAppSelector } from "src/lib/stores/hooks";
import BooklistPresentation from "src/presentation/book-list-pres";

export default function FavouriteBooks() {
  const favourites = useAppSelector((state) => state.favourites);
  return (
    <main className="container">
      <BooklistPresentation title="Bookmark" data={favourites} />
    </main>
  );
}
