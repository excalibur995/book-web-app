import { useQuery } from "@tanstack/react-query";

import { DETAIL_BOOKS_QUERY_KEY } from "../models/constants";
import fetchBookDetail from "./fetch-book-detail";

export default function useBook(id?: string) {
  return useQuery({
    queryKey: [DETAIL_BOOKS_QUERY_KEY, id],
    enabled: !!id,
    queryFn: ({ signal }) => fetchBookDetail({ id: id!, signal }),
  });
}
