import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBookStore from "src/lib/stores/books-store/hook";
import { Book, ButtonClick } from "src/models/types";
import useToastState from "src/presentation/ui/toast/hooks/useToast";

const defaultImage = "/no-cover.png";

export default function useItemState(book: Book) {
  const { id } = useParams();
  const { open, setOpen, onHandleOpen } = useToastState();
  const navigate = useNavigate();

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

  const onHandleToggleFavourite = (e: ButtonClick) => {
    e.preventDefault();
    onHandleOpen();
    if (isThisBookinFavourite) {
      return removefromFavourite();
    }
    return addtoFavourite();
  };

  const goToEdit = (e: ButtonClick) => {
    e.preventDefault();
    navigate(`/edit/${book.id}`);
  };

  return {
    onHandleToggleFavourite,
    isThisBookinFavourite,
    isEditable,
    handleImageError,
    imageSrc,
    isDetail: !!id,
    goToEdit,
    open,
    setOpen,
  };
}
