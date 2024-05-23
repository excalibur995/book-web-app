import { Book } from "src/models/types";

export interface BooksState {
  userBook: Book[];
  favourites: Book[];
}

// Define the initial state using that type
