import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "src/lib/stores/hooks";
import { BOOKS_QUERY_KEY } from "../models/constants";
import fetchBooks from "./fetch-book";

export default function useBookList() {
  const userBook = useAppSelector((state) => state.userBook);
  return useQuery({
    queryKey: [BOOKS_QUERY_KEY],
    queryFn: fetchBooks,
    select: (data) => [...data, ...userBook],
  });
}
