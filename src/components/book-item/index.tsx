import React from "react";
import { formatDate } from "src/lib/utils";
import "./book-item.scss";

import Button from "src/presentation/ui/button";
import Toast from "src/presentation/ui/toast";
import { ItemProps } from "./models/types";
import useItemState from "./usecases/useItemState";

const Item: React.FC<ItemProps> = (book) => {
  const {
    open,
    goToEdit,
    onHandleToggleFavourite,
    isThisBookinFavourite,
    isEditable,
    imageSrc,
    handleImageError,
    isDetail,
    setOpen,
  } = useItemState(book);
  return (
    <li className="book-items">
      <figure className="image-container">
        <img className="book-image" src={imageSrc} alt={book.title} onError={handleImageError} />
      </figure>
      <h3 className="book-title">{book.title}</h3>
      <i aria-expanded={isDetail} className="book-description">
        {book.description}
      </i>
      <section className="book-author-section">
        <section>
          <h5>{book.author}</h5>
          <h6>{formatDate(book.publicationDate)}</h6>
        </section>
        <section className="button-container">
          <Toast
            open={open}
            setOpen={setOpen}
            title={!isThisBookinFavourite ? "Removed from Bookmarked" : "Added to Bookmark"}
            description={<div>Successfully {!isThisBookinFavourite ? "Removed from" : "Added to"} Favourites</div>}
          >
            <Button variant={isThisBookinFavourite ? "secondary" : "default"} onClick={onHandleToggleFavourite}>
              {isThisBookinFavourite ? "Favourite" : "Bookmark"}
            </Button>
          </Toast>
          {isEditable && (
            <Button onClick={goToEdit} variant="outline">
              Edit
            </Button>
          )}
        </section>
      </section>
    </li>
  );
};

export default Item;
