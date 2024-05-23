import { Book } from "src/models/types";
import { addBooktoFavourite, createNewBook, deleteAddedBook, deleteBookfromFavourite, editAddedBook } from ".";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function useBookStore() {
  const favourites = useAppSelector((state) => state.favourites);
  const userBook = useAppSelector((state) => state.userBook);

  const dispatch = useAppDispatch();

  const onAddToFavorite = (book: Book) => {
    dispatch(addBooktoFavourite(book));
  };

  const onRemovefromFavourite = (id: number | string) => {
    dispatch(deleteBookfromFavourite(Number(id)));
  };

  const onHandleEditAddedBook = (book: Book) => {
    dispatch(editAddedBook(book));
  };

  const onDeleteBook = (id: string | number) => {
    dispatch(deleteAddedBook(Number(id)));
  };

  const onCreateNewBook = (book: Book) => {
    dispatch(createNewBook(book));
  };

  const getUserAddedBook = (id?: string | number) => userBook.find((book) => book.id === Number(id));
  const checkIsThisBookFromUser = (id?: string | number) => !!getUserAddedBook(id);
  const checkIsBookFavourite = (book: Book) => !!favourites.find((b) => b.id === book.id);

  return {
    onAddToFavorite,
    onRemovefromFavourite,
    onHandleEditAddedBook,
    onDeleteBook,
    onCreateNewBook,
    checkIsBookFavourite,
    checkIsThisBookFromUser,
    favourites,
    userBook,
    getUserAddedBook,
  };
}
