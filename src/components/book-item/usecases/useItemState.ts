import { useState } from "react";
import { useParams } from "react-router-dom";
import useBookStore from "src/lib/stores/books-store/hook";
import { Book } from "src/models/types";

const defaultImage = "/no-cover.png";

export default function useItemState(book: Book) {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(book.cover);
  const { onAddToFavorite, onRemovefromFavourite, checkIsBookFavourite } = useBookStore();

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  const isThisBookinFavourite = checkIsBookFavourite(book);
  const isEditable = book.isUserAddedBook;

  const addtoFavourite = () => {
    onAddToFavorite(book);
  };

  const removefromFavourite = () => {
    onRemovefromFavourite(book.id);
  };

  const onHandleToggleFavourite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isThisBookinFavourite) {
      return removefromFavourite();
    }
    return addtoFavourite();
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
