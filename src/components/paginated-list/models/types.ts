import { Book } from "src/models/types";

export interface PaginatedBooksProps {
  data?: Book[];
  isLoading?: boolean;
  isError?: boolean;
}
