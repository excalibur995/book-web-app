import { useState } from "react";
import { Book } from "src/models/types";
import { PAGE_SIZE } from "src/modules/Booklist/models/constants";

export default function usePaginatedStates(books: Book[]) {
  const [page, setPage] = useState<number>(1);
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedBooks = books?.slice(startIndex, endIndex) || [];
  const totalPages = books ? Math.ceil(books.length / PAGE_SIZE) : 0;

  const changePage = (newPage: number) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalPages) newPage = totalPages;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    page,
    changePage,
    totalPages,
    paginatedBooks,
  };
}
