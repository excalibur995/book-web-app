import { useState } from "react";
import { useParams } from "react-router-dom";
import { addBooktoFavourite, deleteBookfromFavourite } from "src/lib/stores/books-store";
import { useAppDispatch, useAppSelector } from "src/lib/stores/hooks";
import { RootState } from "src/lib/stores/store";
import { Book } from "src/models/types";

const defaultImage = "/no-cover.png";

export default function useItemState(book: Book) {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(book.cover);

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };
  const favourites = useAppSelector((state: RootState) => state.favourites);
  const dispatch = useAppDispatch();

  const isThisBookinFavourite = !!favourites.find((b) => b.id === book.id);
  const isEditable = book.isUserAddedBook;

  const onAddToFavorite = () => {
    dispatch(addBooktoFavourite(book));
  };

  const onRemovefromFavourite = () => {
    dispatch(deleteBookfromFavourite(book.id));
  };

  const onHandleToggleFavourite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isThisBookinFavourite) {
      return onRemovefromFavourite();
    }
    return onAddToFavorite();
  };

  return {
    onHandleToggleFavourite,
    isThisBookinFavourite,
    isEditable,
    handleImageError,
    imageSrc,
    isDetail: !!id,
  };
}
