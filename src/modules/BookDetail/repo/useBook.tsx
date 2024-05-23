import { useQuery } from "@tanstack/react-query";

import useBookStore from "src/lib/stores/books-store/hook";
import { DETAIL_BOOKS_QUERY_KEY } from "../models/constants";
import fetchBookDetail from "./fetch-book-detail";

export default function useBook(id?: string) {
  const { getUserAddedBook } = useBookStore();
  const userAddedBook = getUserAddedBook(id);

  const { data, isError, isLoading } = useQuery({
    queryKey: [DETAIL_BOOKS_QUERY_KEY, id],
    enabled: !!id && !userAddedBook,
    queryFn: ({ signal }) => fetchBookDetail({ id: id!, signal }),
  });

  return {
    isLoading,
    isError,
    data: userAddedBook || data,
  };
}
