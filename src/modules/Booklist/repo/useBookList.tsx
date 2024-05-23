import { useQuery } from "@tanstack/react-query";
import useBookStore from "src/lib/stores/books-store/hook";
import { BOOKS_QUERY_KEY } from "../models/constants";
import fetchBooks from "./fetch-book";

export default function useBookList() {
  const { userBook } = useBookStore();
  return useQuery({
    queryKey: [BOOKS_QUERY_KEY],
    queryFn: fetchBooks,
    select: (data) => [...data, ...userBook],
  });
}
