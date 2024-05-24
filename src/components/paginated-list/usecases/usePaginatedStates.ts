import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book } from "src/models/types";
import { PAGE_SIZE } from "src/modules/Booklist/models/constants";

export default function usePaginatedStates(books: Book[]) {
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize the searchParams object
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  // Get the initial page from URL params or default to 1
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [page, setPage] = useState<number>(initialPage);
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedBooks = books?.slice(startIndex, endIndex) || [];
  const totalPages = books ? Math.ceil(books.length / PAGE_SIZE) : 0;

  const changePage = (newPage: number) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalPages) newPage = totalPages;
    setPage(newPage);
    // Update the URL parameter
    navigate(`?page=${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => changePage(page - 1);
  const handleNext = () => changePage(page + 1);

  useEffect(() => {
    const newPage = parseInt(searchParams.get("page") || "1", 10);
    if (newPage !== page) {
      setPage(newPage);
    }
  }, [searchParams, page]);

  return {
    page,
    changePage,
    totalPages,
    handlePrevious,
    handleNext,
    paginatedBooks,
  };
}
