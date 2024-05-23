export interface PaginationProps {
  page: number;
  totalPages: number;
  handlePrevious?: () => void;
  handleNext?: () => void;
}
