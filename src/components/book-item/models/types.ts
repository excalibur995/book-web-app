import { Book } from "src/models/types";

export type ItemProps = Book & { onAddToFavourite?: (book: Book) => void };
