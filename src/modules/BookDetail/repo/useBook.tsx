import { useQuery } from "@tanstack/react-query";

import { useAppSelector } from "src/lib/stores/hooks";
import { DETAIL_BOOKS_QUERY_KEY } from "../models/constants";
import fetchBookDetail from "./fetch-book-detail";

export default function useBook(id?: string) {
  const userbook = useAppSelector((state) => state.userBook);

  const userAddedBook = userbook.find((book) => book.id === Number(id));

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
