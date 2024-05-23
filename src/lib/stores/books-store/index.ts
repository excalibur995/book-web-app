import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "src/models/types";
import { INITIAL_STATE } from "./models/constants";

export const bookSlice = createSlice({
  name: "book",
  initialState: INITIAL_STATE,
  reducers: {
    createNewBook: (state, action: PayloadAction<Book>) => {
      state.userBook.push(action.payload);
    },
    deleteAddedBook: (state, action: PayloadAction<number>) => {
      state.userBook = state.userBook.filter((book) => book.id !== action.payload);
    },
    editAddedBook: (state, action: PayloadAction<Book>) => {
      const index = state.userBook.findIndex(({ id }) => id === action.payload.id);
      if (index !== -1) {
        state.userBook[index] = action.payload;
      }
    },
    addBooktoFavourite: (state, action: PayloadAction<Book>) => {
      state.favourites.push(action.payload);
    },
    deleteBookfromFavourite: (state, action: PayloadAction<number>) => {
      state.favourites = state.favourites.filter((book) => book.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBooktoFavourite, createNewBook, deleteAddedBook, deleteBookfromFavourite, editAddedBook } =
  bookSlice.actions;

export default bookSlice.reducer;
