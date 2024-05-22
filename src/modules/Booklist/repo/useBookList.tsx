import { useQuery } from "@tanstack/react-query";
import { BOOKS_QUERY_KEY } from "../models/constants";
import fetchBooks from "./fetch-book";

export default function useBookList() {
  return useQuery({
    queryKey: [BOOKS_QUERY_KEY],
    queryFn: fetchBooks,
  });
}
