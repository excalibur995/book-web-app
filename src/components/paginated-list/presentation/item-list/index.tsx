import React from "react";
import { formatDate } from "src/lib/utils";
import { Book } from "src/models/types";
import Button from "src/presentation/ui/button";

const Item: React.FC<Book> = (book) => {
  return (
    <li className="book-items">
      <figure className="image-container">
        <img className="book-image" src={book.cover} alt={book.title} />
      </figure>
      <h3>{book.title}</h3>
      <i className="book-description">{book.description}</i>
      <section className="book-author-section">
        <section>
          <h5>{book.author}</h5>
          <h6>{formatDate(book.publicationDate)}</h6>
        </section>
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Add to Favourite
        </Button>
      </section>
    </li>
  );
};

export default Item;
